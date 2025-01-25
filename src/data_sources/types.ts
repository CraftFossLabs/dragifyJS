import { ObjectAny } from '../common';
import ComponentDataVariable from './model/ComponentDataVariable';
import DataRecord from './model/DataRecord';
import DataRecords from './model/DataRecords';
import DataVariable, { DataVariableDefinition } from './model/DataVariable';
import { ConditionalVariableDefinition, DataCondition } from './model/conditional_variables/DataCondition';

export type DynamicValue = DataVariable | ComponentDataVariable | DataCondition;
export type DynamicValueDefinition = DataVariableDefinition | ConditionalVariableDefinition;
export interface DataRecordProps extends ObjectAny {
  /**
   * Record id.
   */
  id: string;

  /**
   * Specifies if the record is mutable. Defaults to `true`.
   */
  mutable?: boolean;

  [key: string]: any;
}

export interface DataVariableListener {
  obj: any;
  event: string;
}

interface BaseDataSource {
  /**
   * DataSource id.
   */
  id: string;

  /**
   * DataSource validation and transformation factories.
   */
  transformers?: DataSourceTransformers;

  /**
   * If true will store the data source in the dragifyJS project.json file.
   */
  skipFromStorage?: boolean;
}
export interface DataSourceType<DR extends DataRecordProps> extends BaseDataSource {
  records: DataRecords<DR>;
}
export interface DataSourceProps<DR extends DataRecordProps> extends BaseDataSource {
  records?: DataRecords<DR> | DataRecord<DR>[] | DR[];
}
export type RecordPropsType<T> = T extends DataRecord<infer U> ? U : never;
export interface DataSourceTransformers {
  onRecordSetValue?: (args: { id: string | number; key: string; value: any }) => any;
}

/**{START_EVENTS}*/
export enum DataSourcesEvents {
  /**
   * @event `data:add` Added new data source.
   * @example
   * editor.on('data:add', (dataSource) => { ... });
   */
  add = 'data:add',
  addBefore = 'data:add:before',

  /**
   * @event `data:remove` Data source removed.
   * @example
   * editor.on('data:remove', (dataSource) => { ... });
   */
  remove = 'data:remove',
  removeBefore = 'data:remove:before',

  /**
   * @event `data:update` Data source updated.
   * @example
   * editor.on('data:update', (dataSource, changes) => { ... });
   */
  update = 'data:update',

  /**
   * @event `data:path` Data record path update.
   * @example
   * editor.on('data:path:SOURCE_ID:RECORD_ID:PROP_NAME', ({ dataSource, dataRecord, path }) => { ... });
   */
  path = 'data:path',

  /**
   * @event `data` Catch-all event for all the events mentioned above.
   * @example
   * editor.on('data', ({ event, model, ... }) => { ... });
   */
  all = 'data',
}
/**{END_EVENTS}*/
type DotSeparatedKeys<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${DotSeparatedKeys<T[K]>}`
          : `${K}`
        : never;
    }[keyof T]
  : never;

export type DeepPartialDot<T> = {
  [P in DotSeparatedKeys<T>]?: P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
      ? Rest extends DotSeparatedKeys<T[K]>
        ? DeepPartialDot<T[K]>[Rest]
        : never
      : never
    : P extends keyof T
      ? T[P]
      : never;
};
