/** Types generated for queries found in "Benchmarks/EdgeCases/EdgeCases.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'SqlInjection' parameters type */
export interface ISqlInjectionParams {
  query?: string | null | void;
}

/** 'SqlInjection' return type */
export interface ISqlInjectionResult {
  count: string | null;
}

/** 'SqlInjection' query type */
export interface ISqlInjectionQuery {
  params: ISqlInjectionParams;
  result: ISqlInjectionResult;
}

const sqlInjectionIR: any = {"usedParamSet":{"query":true},"params":[{"name":"query","required":false,"transform":{"type":"scalar"},"locs":[{"a":45,"b":50}]}],"statement":"SELECT COUNT(*) FROM cat WHERE cat_name like :query"};

/**
 * Query generated from SQL:
 * ```
 * SELECT COUNT(*) FROM cat WHERE cat_name like :query
 * ```
 */
export const sqlInjection = new PreparedQuery<ISqlInjectionParams,ISqlInjectionResult>(sqlInjectionIR);


/** 'BigIntColumn' parameters type */
export interface IBigIntColumnParams {
  name?: string | null | void;
}

/** 'BigIntColumn' return type */
export interface IBigIntColumnResult {
  id: string;
}

/** 'BigIntColumn' query type */
export interface IBigIntColumnQuery {
  params: IBigIntColumnParams;
  result: IBigIntColumnResult;
}

const bigIntColumnIR: any = {"usedParamSet":{"name":true},"params":[{"name":"name","required":false,"transform":{"type":"scalar"},"locs":[{"a":36,"b":40}]}],"statement":"SELECT id\nFROM cat\nWHERE cat_name = :name"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id
 * FROM cat
 * WHERE cat_name = :name
 * ```
 */
export const bigIntColumn = new PreparedQuery<IBigIntColumnParams,IBigIntColumnResult>(bigIntColumnIR);


/** 'MaxQuery' parameters type */
export type IMaxQueryParams = void;

/** 'MaxQuery' return type */
export interface IMaxQueryResult {
  max: string | null;
}

/** 'MaxQuery' query type */
export interface IMaxQueryQuery {
  params: IMaxQueryParams;
  result: IMaxQueryResult;
}

const maxQueryIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT MAX(price) from toy"};

/**
 * Query generated from SQL:
 * ```
 * SELECT MAX(price) from toy
 * ```
 */
export const maxQuery = new PreparedQuery<IMaxQueryParams,IMaxQueryResult>(maxQueryIR);


