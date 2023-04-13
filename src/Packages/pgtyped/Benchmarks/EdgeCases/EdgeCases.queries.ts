/** Types generated for queries found in "Benchmarks/EdgeCases/EdgeCases.sql" */
import { PreparedQuery } from '@pgtyped/runtime'

/** 'SqlInjection' parameters type */
export interface ISqlInjectionParams {
  query?: string | null | void
}

/** 'SqlInjection' return type */
export interface ISqlInjectionResult {
  count: string | null
}

/** 'SqlInjection' query type */
export interface ISqlInjectionQuery {
  params: ISqlInjectionParams
  result: ISqlInjectionResult
}

const sqlInjectionIR: any = {
  usedParamSet: { query: true },
  params: [
    {
      name: 'query',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 45, b: 50 }],
    },
  ],
  statement: 'SELECT COUNT(*) FROM cat WHERE cat_name like :query',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT COUNT(*) FROM cat WHERE cat_name like :query
 * ```
 */
export const sqlInjection = new PreparedQuery<
  ISqlInjectionParams,
  ISqlInjectionResult
>(sqlInjectionIR)
