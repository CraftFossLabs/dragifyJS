import { ObjectAny } from '../../common';
import EditorModel from '../../editor/model/Editor';
import Component from './Component';
import { DynamicValueWatcher } from './DynamicValueWatcher';

export class ComponentDynamicValueWatcher {
  private propertyWatcher: DynamicValueWatcher;
  private attributeWatcher: DynamicValueWatcher;

  constructor(
    private component: Component,
    em: EditorModel,
  ) {
    this.propertyWatcher = new DynamicValueWatcher(this.createPropertyUpdater(), em);
    this.attributeWatcher = new DynamicValueWatcher(this.createAttributeUpdater(), em);
  }

  private createPropertyUpdater() {
    return (key: string, value: any) => {
      this.component.set(key, value, { fromDataSource: true, avoidStore: true });
    };
  }

  private createAttributeUpdater() {
    return (key: string, value: any) => {
      this.component.addAttributes({ [key]: value }, { fromDataSource: true, avoidStore: true });
    };
  }

  addProps(props: ObjectAny) {
    this.propertyWatcher.addDynamicValues(props);
  }

  addAttributes(attributes: ObjectAny) {
    this.attributeWatcher.addDynamicValues(attributes);
  }

  setAttributes(attributes: ObjectAny) {
    this.attributeWatcher.setDynamicValues(attributes);
  }

  removeAttributes(attributes: string[]) {
    this.attributeWatcher.removeListeners(attributes);
  }

  getDynamicPropsDefs() {
    return this.propertyWatcher.getAllSerializableValues();
  }

  getDynamicAttributesDefs() {
    return this.attributeWatcher.getAllSerializableValues();
  }

  getAttributesDefsOrValues(attributes: ObjectAny) {
    return this.attributeWatcher.getSerializableValues(attributes);
  }

  getPropsDefsOrValues(props: ObjectAny) {
    return this.propertyWatcher.getSerializableValues(props);
  }

  destroy() {
    this.propertyWatcher.removeListeners();
    this.attributeWatcher.removeListeners();
  }
}
