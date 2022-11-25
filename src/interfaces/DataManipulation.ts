export type singleInsertType = (data: any, table: string) => Promise<void>

export type batchInsertType = (data: any[], table: string) => Promise<void>

export type UpdateType = (filter: any, data: any, table: string) => Promise<any>

export type DeleteType = (filter: any, table: string) => Promise<void>

export type UpsertType = (filter: any, data: any, table: string) => Promise<any>
