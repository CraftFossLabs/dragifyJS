import { NumberOperation } from './operators/NumberOperator';
import { StringOperation } from './operators/StringOperations';
import { GenericOperation } from './operators/GenericOperator';
import { Model } from '../../../common';
import { LogicalOperation } from './operators/LogicalOperator';
import DynamicVariableListenerManager from '../DataVariableListenerManager';
import EditorModel from '../../../editor/model/Editor';
import { Condition } from './Condition';
import DataVariable, { DataVariableDefinition } from '../DataVariable';
import { evaluateVariable, isDataVariable } from '../utils';

export const ConditionalVariableType = 'conditional-variable';
export type ExpressionDefinition = {
  left: any;
  operator: GenericOperation | StringOperation | NumberOperation;
  right: any;
};

export type LogicGroupDefinition = {
  logicalOperator: LogicalOperation;
  statements: (ExpressionDefinition | LogicGroupDefinition | boolean)[];
};

export type ConditionDefinition = ExpressionDefinition | LogicGroupDefinition | boolean;
export type ConditionalVariableDefinition = {
  type: typeof ConditionalVariableType;
  condition: ConditionDefinition;
  ifTrue: any;
  ifFalse: any;
};

type DataConditionType = {
  type: typeof ConditionalVariableType;
  condition: Condition;
  ifTrue: any;
  ifFalse: any;
};
export class DataCondition extends Model<DataConditionType> {
  lastEvaluationResult: boolean;
  private condition: Condition;
  private em: EditorModel;
  private variableListeners: DynamicVariableListenerManager[] = [];
  private _onValueChange?: () => void;

  constructor(
    condition: ExpressionDefinition | LogicGroupDefinition | boolean,
    public ifTrue: any,
    public ifFalse: any,
    opts: { em: EditorModel; onValueChange?: () => void },
  ) {
    if (typeof condition === 'undefined') {
      throw new MissingConditionError();
    }

    const conditionInstance = new Condition(condition, { em: opts.em });
    super({
      type: ConditionalVariableType,
      condition: conditionInstance,
      ifTrue,
      ifFalse,
    });
    this.condition = conditionInstance;
    this.em = opts.em;
    this.lastEvaluationResult = this.evaluate();
    this.listenToDataVariables();
    this._onValueChange = opts.onValueChange;
  }

  evaluate() {
    return this.condition.evaluate();
  }

  getDataValue(): any {
    return this.lastEvaluationResult ? evaluateVariable(this.ifTrue, this.em) : evaluateVariable(this.ifFalse, this.em);
  }

  reevaluate(): void {
    this.lastEvaluationResult = this.evaluate();
  }

  set onValueChange(newFunction: () => void) {
    this._onValueChange = newFunction;
    this.listenToDataVariables();
  }

  private listenToDataVariables() {
    if (!this.em) return;

    // Clear previous listeners to avoid memory leaks
    this.cleanupListeners();

    const dataVariables = this.getDependentDataVariables();

    dataVariables.forEach((variable) => {
      const variableInstance = new DataVariable(variable, { em: this.em });
      const listener = new DynamicVariableListenerManager({
        em: this.em!,
        dataVariable: variableInstance,
        updateValueFromDataVariable: (() => {
          this.reevaluate();
          this._onValueChange?.();
        }).bind(this),
      });

      this.variableListeners.push(listener);
    });
  }

  getDependentDataVariables() {
    const dataVariables: DataVariableDefinition[] = this.condition.getDataVariables();
    if (isDataVariable(this.ifTrue)) dataVariables.push(this.ifTrue);
    if (isDataVariable(this.ifFalse)) dataVariables.push(this.ifFalse);

    return dataVariables;
  }

  private cleanupListeners() {
    this.variableListeners.forEach((listener) => listener.destroy());
    this.variableListeners = [];
  }

  toJSON() {
    return {
      type: ConditionalVariableType,
      condition: this.condition,
      ifTrue: this.ifTrue,
      ifFalse: this.ifFalse,
    };
  }
}
export class MissingConditionError extends Error {
  constructor() {
    super('No condition was provided to a conditional component.');
  }
}
