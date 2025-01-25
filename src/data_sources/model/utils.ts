import EditorModel from '../../editor/model/Editor';
import { DynamicValue, DynamicValueDefinition } from '../types';
import { ConditionalVariableType, DataCondition } from './conditional_variables/DataCondition';
import DataVariable, { DataVariableType } from './DataVariable';

export function isDynamicValueDefinition(value: any): value is DynamicValueDefinition {
  return typeof value === 'object' && [DataVariableType, ConditionalVariableType].includes(value?.type);
}

export function isDynamicValue(value: any): value is DynamicValue {
  return value instanceof DataVariable || value instanceof DataCondition;
}

export function isDataVariable(variable: any) {
  return variable?.type === DataVariableType;
}

export function isDataCondition(variable: any) {
  return variable?.type === ConditionalVariableType;
}

export function evaluateVariable(variable: any, em: EditorModel) {
  return isDataVariable(variable) ? new DataVariable(variable, { em }).getDataValue() : variable;
}

export function getDynamicValueInstance(valueDefinition: DynamicValueDefinition, em: EditorModel): DynamicValue {
  const dynamicType = valueDefinition.type;
  let dynamicVariable: DynamicValue;

  switch (dynamicType) {
    case DataVariableType:
      dynamicVariable = new DataVariable(valueDefinition, { em: em });
      break;
    case ConditionalVariableType: {
      const { condition, ifTrue, ifFalse } = valueDefinition;
      dynamicVariable = new DataCondition(condition, ifTrue, ifFalse, { em: em });
      break;
    }
    default:
      throw new Error(`Unsupported dynamic type: ${dynamicType}`);
  }

  return dynamicVariable;
}

export function evaluateDynamicValueDefinition(valueDefinition: DynamicValueDefinition, em: EditorModel) {
  const dynamicVariable = getDynamicValueInstance(valueDefinition, em);

  return { variable: dynamicVariable, value: dynamicVariable.getDataValue() };
}
