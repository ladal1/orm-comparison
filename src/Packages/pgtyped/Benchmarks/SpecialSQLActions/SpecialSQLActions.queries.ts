/** Types generated for queries found in "Benchmarks/SpecialSQLActions/SpecialSQLActions.sql" */
import { PreparedQuery } from '@pgtyped/runtime'

export type Json =
  | null
  | boolean
  | number
  | string
  | Json[]
  | { [key: string]: Json }

/** 'UpsertToysToHouse' parameters type */
export interface IUpsertToysToHouseParams {
  amount?: number | null | void
  houseId?: number | null | void
  toyId?: number | null | void
}

/** 'UpsertToysToHouse' return type */
export interface IUpsertToysToHouseResult {
  amount: number
}

/** 'UpsertToysToHouse' query type */
export interface IUpsertToysToHouseQuery {
  params: IUpsertToysToHouseParams
  result: IUpsertToysToHouseResult
}

const upsertToysToHouseIR: any = {
  usedParamSet: { toyId: true, houseId: true, amount: true },
  params: [
    {
      name: 'toyId',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 57, b: 62 }],
    },
    {
      name: 'houseId',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 65, b: 72 }],
    },
    {
      name: 'amount',
      required: false,
      transform: { type: 'scalar' },
      locs: [
        { a: 75, b: 81 },
        { a: 138, b: 144 },
      ],
    },
  ],
  statement:
    'INSERT INTO toy_house (toy_id, house_id, amount)\nVALUES (:toyId, :houseId, :amount) ON CONFLICT (toy_id, house_id) DO\nUPDATE SET amount = :amount + toy_house.amount RETURNING amount',
}

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO toy_house (toy_id, house_id, amount)
 * VALUES (:toyId, :houseId, :amount) ON CONFLICT (toy_id, house_id) DO
 * UPDATE SET amount = :amount + toy_house.amount RETURNING amount
 * ```
 */
export const upsertToysToHouse = new PreparedQuery<
  IUpsertToysToHouseParams,
  IUpsertToysToHouseResult
>(upsertToysToHouseIR)

/** 'BigIntColumn' parameters type */
export interface IBigIntColumnParams {
  name?: string | null | void
}

/** 'BigIntColumn' return type */
export interface IBigIntColumnResult {
  id: string
}

/** 'BigIntColumn' query type */
export interface IBigIntColumnQuery {
  params: IBigIntColumnParams
  result: IBigIntColumnResult
}

const bigIntColumnIR: any = {
  usedParamSet: { name: true },
  params: [
    {
      name: 'name',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 36, b: 40 }],
    },
  ],
  statement: 'SELECT id\nFROM cat\nWHERE cat_name = :name',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT id
 * FROM cat
 * WHERE cat_name = :name
 * ```
 */
export const bigIntColumn = new PreparedQuery<
  IBigIntColumnParams,
  IBigIntColumnResult
>(bigIntColumnIR)

/** 'JsonColumn' parameters type */
export interface IJsonColumnParams {
  id?: number | null | void
}

/** 'JsonColumn' return type */
export interface IJsonColumnResult {
  stock_info: Json
}

/** 'JsonColumn' query type */
export interface IJsonColumnQuery {
  params: IJsonColumnParams
  result: IJsonColumnResult
}

const jsonColumnIR: any = {
  usedParamSet: { id: true },
  params: [
    {
      name: 'id',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 48, b: 50 }],
    },
  ],
  statement: 'SELECT stock_info\nFROM toys_producer\nWHERE id = :id',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT stock_info
 * FROM toys_producer
 * WHERE id = :id
 * ```
 */
export const jsonColumn = new PreparedQuery<
  IJsonColumnParams,
  IJsonColumnResult
>(jsonColumnIR)

/** 'JsonWhere' parameters type */
export interface IJsonWhereParams {
  ticker?: string | null | void
}

/** 'JsonWhere' return type */
export interface IJsonWhereResult {
  stock_info: Json
}

/** 'JsonWhere' query type */
export interface IJsonWhereQuery {
  params: IJsonWhereParams
  result: IJsonWhereResult
}

const jsonWhereIR: any = {
  usedParamSet: { ticker: true },
  params: [
    {
      name: 'ticker',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 67, b: 73 }],
    },
  ],
  statement:
    "SELECT stock_info\nFROM toys_producer\nWHERE stock_info->>'ticker' = :ticker",
}

/**
 * Query generated from SQL:
 * ```
 * SELECT stock_info
 * FROM toys_producer
 * WHERE stock_info->>'ticker' = :ticker
 * ```
 */
export const jsonWhere = new PreparedQuery<IJsonWhereParams, IJsonWhereResult>(
  jsonWhereIR
)

/** 'LikeQuery' parameters type */
export interface ILikeQueryParams {
  query?: string | null | void
}

/** 'LikeQuery' return type */
export interface ILikeQueryResult {
  id: number
}

/** 'LikeQuery' query type */
export interface ILikeQueryQuery {
  params: ILikeQueryParams
  result: ILikeQueryResult
}

const likeQueryIR: any = {
  usedParamSet: { query: true },
  params: [
    {
      name: 'query',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 48, b: 53 }],
    },
  ],
  statement: 'SELECT id\n  FROM house\nWHERE house_address LIKE :query',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT id
 *   FROM house
 * WHERE house_address LIKE :query
 * ```
 */
export const likeQuery = new PreparedQuery<ILikeQueryParams, ILikeQueryResult>(
  likeQueryIR
)

/** 'TransactionalOperationsInsertProducer' parameters type */
export interface ITransactionalOperationsInsertProducerParams {
  hq_location?: Json | null | void
  id?: number | null | void
  stock_info?: Json | null | void
}

/** 'TransactionalOperationsInsertProducer' return type */
export type ITransactionalOperationsInsertProducerResult = void

/** 'TransactionalOperationsInsertProducer' query type */
export interface ITransactionalOperationsInsertProducerQuery {
  params: ITransactionalOperationsInsertProducerParams
  result: ITransactionalOperationsInsertProducerResult
}

const transactionalOperationsInsertProducerIR: any = {
  usedParamSet: { id: true, stock_info: true, hq_location: true },
  params: [
    {
      name: 'id',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 64, b: 66 }],
    },
    {
      name: 'stock_info',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 69, b: 79 }],
    },
    {
      name: 'hq_location',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 82, b: 93 }],
    },
  ],
  statement:
    'INSERT INTO toys_producer (id, stock_info, hq_location)\nVALUES (:id, :stock_info, :hq_location)',
}

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO toys_producer (id, stock_info, hq_location)
 * VALUES (:id, :stock_info, :hq_location)
 * ```
 */
export const transactionalOperationsInsertProducer = new PreparedQuery<
  ITransactionalOperationsInsertProducerParams,
  ITransactionalOperationsInsertProducerResult
>(transactionalOperationsInsertProducerIR)

/** 'TransactionalOperationsInsertToy' parameters type */
export interface ITransactionalOperationsInsertToyParams {
  barcode?: string | null | void
  currency?: string | null | void
  date_introduced?: Date | null | void
  id?: number | null | void
  price?: string | null | void
  toy_name?: string | null | void
  toys_producer_id?: number | null | void
}

/** 'TransactionalOperationsInsertToy' return type */
export type ITransactionalOperationsInsertToyResult = void

/** 'TransactionalOperationsInsertToy' query type */
export interface ITransactionalOperationsInsertToyQuery {
  params: ITransactionalOperationsInsertToyParams
  result: ITransactionalOperationsInsertToyResult
}

const transactionalOperationsInsertToyIR: any = {
  usedParamSet: {
    id: true,
    toys_producer_id: true,
    toy_name: true,
    barcode: true,
    price: true,
    currency: true,
    date_introduced: true,
  },
  params: [
    {
      name: 'id',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 137, b: 139 }],
    },
    {
      name: 'toys_producer_id',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 146, b: 162 }],
    },
    {
      name: 'toy_name',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 169, b: 177 }],
    },
    {
      name: 'barcode',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 184, b: 191 }],
    },
    {
      name: 'price',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 198, b: 203 }],
    },
    {
      name: 'currency',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 210, b: 218 }],
    },
    {
      name: 'date_introduced',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 225, b: 240 }],
    },
  ],
  statement:
    'INSERT INTO toy (\n    id,\n    toys_producer_id,\n    toy_name,\n    barcode,\n    price,\n    currency,\n    date_introduced\n  )\nVALUES (\n    :id,\n    :toys_producer_id,\n    :toy_name,\n    :barcode,\n    :price,\n    :currency,\n    :date_introduced\n  )',
}

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO toy (
 *     id,
 *     toys_producer_id,
 *     toy_name,
 *     barcode,
 *     price,
 *     currency,
 *     date_introduced
 *   )
 * VALUES (
 *     :id,
 *     :toys_producer_id,
 *     :toy_name,
 *     :barcode,
 *     :price,
 *     :currency,
 *     :date_introduced
 *   )
 * ```
 */
export const transactionalOperationsInsertToy = new PreparedQuery<
  ITransactionalOperationsInsertToyParams,
  ITransactionalOperationsInsertToyResult
>(transactionalOperationsInsertToyIR)

/** 'TransactionalOperationsCountProducers' parameters type */
export type ITransactionalOperationsCountProducersParams = void

/** 'TransactionalOperationsCountProducers' return type */
export interface ITransactionalOperationsCountProducersResult {
  count: string | null
}

/** 'TransactionalOperationsCountProducers' query type */
export interface ITransactionalOperationsCountProducersQuery {
  params: ITransactionalOperationsCountProducersParams
  result: ITransactionalOperationsCountProducersResult
}

const transactionalOperationsCountProducersIR: any = {
  usedParamSet: {},
  params: [],
  statement: 'SELECT count(id) FROM toys_producer',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT count(id) FROM toys_producer
 * ```
 */
export const transactionalOperationsCountProducers = new PreparedQuery<
  ITransactionalOperationsCountProducersParams,
  ITransactionalOperationsCountProducersResult
>(transactionalOperationsCountProducersIR)
