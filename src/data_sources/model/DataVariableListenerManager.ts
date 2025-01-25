import { DataSourcesEvents, DataVariableListener } from '../types';
import { stringToPath } from '../../utils/mixins';
import { Model } from '../../common';
import EditorModel from '../../editor/model/Editor';
import DataVariable, { DataVariableType } from './DataVariable';
import { DynamicValue } from '../types';
import { DataCondition, ConditionalVariableType } from './conditional_variables/DataCondition';
import ComponentDataVariable from './ComponentDataVariable';

export interface DynamicVariableListenerManagerOptions {
  em: EditorModel;
  dataVariable: DynamicValue;
  updateValueFromDataVariable: (value: any) => void;
}

export default class DynamicVariableListenerManager {
  private dataListeners: DataVariableListener[] = [];
  private em: EditorModel;
  dynamicVariable: DynamicValue;
  private updateValueFromDynamicVariable: (value: any) => void;
  private model = new Model();

  constructor(options: DynamicVariableListenerManagerOptions) {
    this.em = options.em;
    this.dynamicVariable = options.dataVariable;
    this.updateValueFromDynamicVariable = options.updateValueFromDataVariable;

    this.listenToDynamicVariable();
  }

  private onChange = () => {
    const value = this.dynamicVariable.getDataValue();
    this.updateValueFromDynamicVariable(value);
  };

  listenToDynamicVariable() {
    const { em, dynamicVariable } = this;
    this.removeListeners();

    // @ts-ignore
    const type = dynamicVariable.get('type');
    let dataListeners: DataVariableListener[] = [];
    switch (type) {
      case DataVariableType:
        dataListeners = this.listenToDataVariable(dynamicVariable as DataVariable | ComponentDataVariable, em);
        break;
      case ConditionalVariableType:
        dataListeners = this.listenToConditionalVariable(dynamicVariable as DataCondition, em);
        break;
    }
    dataListeners.forEach((ls) => this.model.listenTo(ls.obj, ls.event, this.onChange));

    this.dataListeners = dataListeners;
  }

  private listenToConditionalVariable(dataVariable: DataCondition, em: EditorModel) {
    const dataListeners = dataVariable.getDependentDataVariables().flatMap((dataVariable) => {
      return this.listenToDataVariable(new DataVariable(dataVariable, { em: this.em }), em);
    });

    return dataListeners;
  }

  private listenToDataVariable(dataVariable: DataVariable | ComponentDataVariable, em: EditorModel) {
    const dataListeners: DataVariableListener[] = [];
    const { path } = dataVariable.attributes;
    const normPath = stringToPath(path || '').join('.');
    const [ds, dr] = this.em.DataSources.fromPath(path);
    ds && dataListeners.push({ obj: ds.records, event: 'add remove reset' });
    dr && dataListeners.push({ obj: dr, event: 'change' });
    dataListeners.push(
      { obj: dataVariable, event: 'change:path change:defaultValue' },
      { obj: em.DataSources.all, event: 'add remove reset' },
      { obj: em, event: `${DataSourcesEvents.path}:${normPath}` },
    );

    return dataListeners;
  }

  private removeListeners() {
    this.dataListeners.forEach((ls) => this.model.stopListening(ls.obj, ls.event, this.onChange));
    this.dataListeners = [];
  }

  destroy() {
    this.removeListeners();
  }
}
