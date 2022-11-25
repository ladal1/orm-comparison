export type simpleSelectType = (data: any, table: string) => Promise<void>

export interface ISelectBenchmark {
  simpleSelect: simpleSelectType
}
