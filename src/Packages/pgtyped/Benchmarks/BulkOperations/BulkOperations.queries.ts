/** Types generated for queries found in "Benchmarks/BulkOperations/BulkOperations.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type booleanArray = (boolean)[];

export type numberArray = (number)[];

export type stringArray = (string)[];

/** 'BulkInsert' parameters type */
export interface IBulkInsertParams {
  hasDogs?: booleanArray | null | void;
  houseAddresses?: stringArray | null | void;
  ids?: numberArray | null | void;
}

/** 'BulkInsert' return type */
export type IBulkInsertResult = void;

/** 'BulkInsert' query type */
export interface IBulkInsertQuery {
  params: IBulkInsertParams;
  result: IBulkInsertResult;
}

const bulkInsertIR: any = {"usedParamSet":{"ids":true,"houseAddresses":true,"hasDogs":true},"params":[{"name":"ids","required":false,"transform":{"type":"scalar"},"locs":[{"a":83,"b":86}]},{"name":"houseAddresses","required":false,"transform":{"type":"scalar"},"locs":[{"a":108,"b":122}]},{"name":"hasDogs","required":false,"transform":{"type":"scalar"},"locs":[{"a":141,"b":148}]}],"statement":"Insert into house (id, house_address, has_dog)\nSELECT * FROM\n      UNNEST(\n        :ids::integer[],\n        :houseAddresses::TEXT[],\n        :hasDogs::BOOLEAN[]\n      )"};

/**
 * Query generated from SQL:
 * ```
 * Insert into house (id, house_address, has_dog)
 * SELECT * FROM
 *       UNNEST(
 *         :ids::integer[],
 *         :houseAddresses::TEXT[],
 *         :hasDogs::BOOLEAN[]
 *       )
 * ```
 */
export const bulkInsert = new PreparedQuery<IBulkInsertParams,IBulkInsertResult>(bulkInsertIR);


/** 'CountHouses' parameters type */
export type ICountHousesParams = void;

/** 'CountHouses' return type */
export interface ICountHousesResult {
  count: string | null;
}

/** 'CountHouses' query type */
export interface ICountHousesQuery {
  params: ICountHousesParams;
  result: ICountHousesResult;
}

const countHousesIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT COUNT(*) FROM house"};

/**
 * Query generated from SQL:
 * ```
 * SELECT COUNT(*) FROM house
 * ```
 */
export const countHouses = new PreparedQuery<ICountHousesParams,ICountHousesResult>(countHousesIR);


/** 'BulkDelete' parameters type */
export interface IBulkDeleteParams {
  toyName?: string | null | void;
}

/** 'BulkDelete' return type */
export type IBulkDeleteResult = void;

/** 'BulkDelete' query type */
export interface IBulkDeleteQuery {
  params: IBulkDeleteParams;
  result: IBulkDeleteResult;
}

const bulkDeleteIR: any = {"usedParamSet":{"toyName":true},"params":[{"name":"toyName","required":false,"transform":{"type":"scalar"},"locs":[{"a":33,"b":40}]}],"statement":"DELETE FROM toy WHERE toy_name = :toyName"};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM toy WHERE toy_name = :toyName
 * ```
 */
export const bulkDelete = new PreparedQuery<IBulkDeleteParams,IBulkDeleteResult>(bulkDeleteIR);


/** 'BulkUpdate' parameters type */
export interface IBulkUpdateParams {
  newCurrency?: string | null | void;
  oldCurrency?: string | null | void;
}

/** 'BulkUpdate' return type */
export type IBulkUpdateResult = void;

/** 'BulkUpdate' query type */
export interface IBulkUpdateQuery {
  params: IBulkUpdateParams;
  result: IBulkUpdateResult;
}

const bulkUpdateIR: any = {"usedParamSet":{"newCurrency":true,"oldCurrency":true},"params":[{"name":"newCurrency","required":false,"transform":{"type":"scalar"},"locs":[{"a":26,"b":37}]},{"name":"oldCurrency","required":false,"transform":{"type":"scalar"},"locs":[{"a":56,"b":67}]}],"statement":"UPDATE toy SET currency = :newCurrency WHERE currency = :oldCurrency"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE toy SET currency = :newCurrency WHERE currency = :oldCurrency
 * ```
 */
export const bulkUpdate = new PreparedQuery<IBulkUpdateParams,IBulkUpdateResult>(bulkUpdateIR);


/** 'CountToysByName' parameters type */
export interface ICountToysByNameParams {
  toyName?: string | null | void;
}

/** 'CountToysByName' return type */
export interface ICountToysByNameResult {
  count: string | null;
}

/** 'CountToysByName' query type */
export interface ICountToysByNameQuery {
  params: ICountToysByNameParams;
  result: ICountToysByNameResult;
}

const countToysByNameIR: any = {"usedParamSet":{"toyName":true},"params":[{"name":"toyName","required":false,"transform":{"type":"scalar"},"locs":[{"a":42,"b":49}]}],"statement":"SELECT COUNT(*) FROM toy WHERE toy_name = :toyName"};

/**
 * Query generated from SQL:
 * ```
 * SELECT COUNT(*) FROM toy WHERE toy_name = :toyName
 * ```
 */
export const countToysByName = new PreparedQuery<ICountToysByNameParams,ICountToysByNameResult>(countToysByNameIR);


/** 'CountToysByCurrency' parameters type */
export interface ICountToysByCurrencyParams {
  currency?: string | null | void;
}

/** 'CountToysByCurrency' return type */
export interface ICountToysByCurrencyResult {
  count: string | null;
}

/** 'CountToysByCurrency' query type */
export interface ICountToysByCurrencyQuery {
  params: ICountToysByCurrencyParams;
  result: ICountToysByCurrencyResult;
}

const countToysByCurrencyIR: any = {"usedParamSet":{"currency":true},"params":[{"name":"currency","required":false,"transform":{"type":"scalar"},"locs":[{"a":42,"b":50}]}],"statement":"SELECT COUNT(*) FROM toy WHERE currency = :currency"};

/**
 * Query generated from SQL:
 * ```
 * SELECT COUNT(*) FROM toy WHERE currency = :currency
 * ```
 */
export const countToysByCurrency = new PreparedQuery<ICountToysByCurrencyParams,ICountToysByCurrencyResult>(countToysByCurrencyIR);


/** 'Pagination' parameters type */
export interface IPaginationParams {
  limit?: number | string | null | void;
  offset?: number | string | null | void;
}

/** 'Pagination' return type */
export interface IPaginationResult {
  cat_color_id: number | null;
  cat_name: string | null;
  date_of_birth: Date | null;
  id: string;
}

/** 'Pagination' query type */
export interface IPaginationQuery {
  params: IPaginationParams;
  result: IPaginationResult;
}

const paginationIR: any = {"usedParamSet":{"limit":true,"offset":true},"params":[{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":24,"b":29}]},{"name":"offset","required":false,"transform":{"type":"scalar"},"locs":[{"a":38,"b":44}]}],"statement":"SELECT * FROM cat LIMIT :limit OFFSET :offset"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM cat LIMIT :limit OFFSET :offset
 * ```
 */
export const pagination = new PreparedQuery<IPaginationParams,IPaginationResult>(paginationIR);


