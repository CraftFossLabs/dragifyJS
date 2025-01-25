import { LogicalOperator } from './operators/LogicalOperator';
import { ExpressionDefinition, LogicGroupDefinition } from './DataCondition';
import { Condition } from './Condition';
import EditorModel from '../../../editor/model/Editor';

export class LogicalGroupStatement {
  private em: EditorModel;

  constructor(
    private operator: LogicalOperator,
    private statements: (ExpressionDefinition | LogicGroupDefinition | boolean)[],
    opts: { em: EditorModel },
  ) {
    this.em = opts.em;
  }

  evaluate(): boolean {
    const results = this.statements.map((statement) => {
      const condition = new Condition(statement, { em: this.em });
      return condition.evaluate();
    });
    return this.operator.evaluate(results);
  }
}
