/** Types generated for queries found in "src/Benchmarks/EntityTraversal/EntityTraversal.sql" */
import { PreparedQuery } from '@pgtyped/runtime'

/** 'GetCatColorById' parameters type */
export interface IGetCatColorByIdParams {
  catId?: number | null | void
}

/** 'GetCatColorById' return type */
export interface IGetCatColorByIdResult {
  hex_code: string
}

/** 'GetCatColorById' query type */
export interface IGetCatColorByIdQuery {
  params: IGetCatColorByIdParams
  result: IGetCatColorByIdResult
}

const getCatColorByIdIR: any = {
  usedParamSet: { catId: true },
  params: [
    {
      name: 'catId',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 154, b: 159 }],
    },
  ],
  statement:
    'SELECT\n  hex_code\nFROM\n    cat\n    JOIN cat_color ON cat_color.id = cat.cat_color_id\n    JOIN color_hex ON color_hex.id = cat_color.id\nWHERE\n    cat.id = :catId',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   hex_code
 * FROM
 *     cat
 *     JOIN cat_color ON cat_color.id = cat.cat_color_id
 *     JOIN color_hex ON color_hex.id = cat_color.id
 * WHERE
 *     cat.id = :catId
 * ```
 */
export const getCatColorById = new PreparedQuery<
  IGetCatColorByIdParams,
  IGetCatColorByIdResult
>(getCatColorByIdIR)

/** 'CountCatsByColor' parameters type */
export interface ICountCatsByColorParams {
  hexCode?: string | null | void
}

/** 'CountCatsByColor' return type */
export interface ICountCatsByColorResult {
  count: string | null
}

/** 'CountCatsByColor' query type */
export interface ICountCatsByColorQuery {
  params: ICountCatsByColorParams
  result: ICountCatsByColorResult
}

const countCatsByColorIR: any = {
  usedParamSet: { hexCode: true },
  params: [
    {
      name: 'hexCode',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 166, b: 173 }],
    },
  ],
  statement:
    'SELECT\n  COUNT(*)\nFROM\n    cat\n    JOIN cat_color ON cat_color.id = cat.cat_color_id\n    JOIN color_hex ON color_hex.id = cat_color.id\nWHERE\n    color_hex.hex_code = :hexCode',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   COUNT(*)
 * FROM
 *     cat
 *     JOIN cat_color ON cat_color.id = cat.cat_color_id
 *     JOIN color_hex ON color_hex.id = cat_color.id
 * WHERE
 *     color_hex.hex_code = :hexCode
 * ```
 */
export const countCatsByColor = new PreparedQuery<
  ICountCatsByColorParams,
  ICountCatsByColorResult
>(countCatsByColorIR)

/** 'GetToysAvailableToCat' parameters type */
export interface IGetToysAvailableToCatParams {
  catId?: number | null | void
}

/** 'GetToysAvailableToCat' return type */
export interface IGetToysAvailableToCatResult {
  toy_name: string
}

/** 'GetToysAvailableToCat' query type */
export interface IGetToysAvailableToCatQuery {
  params: IGetToysAvailableToCatParams
  result: IGetToysAvailableToCatResult
}

const getToysAvailableToCatIR: any = {
  usedParamSet: { catId: true },
  params: [
    {
      name: 'catId',
      required: false,
      transform: { type: 'scalar' },
      locs: [{ a: 202, b: 207 }],
    },
  ],
  statement:
    'SELECT\n  toy.toy_name\nFROM\n  toy\n  JOIN toy_house ON toy_house.toy_id = toy.id\n  JOIN house ON house.id = toy_house.house_id\n  JOIN house_cat ON house_cat.house_id = house.id\nWHERE\n  house_cat.cat_id = :catId',
}

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   toy.toy_name
 * FROM
 *   toy
 *   JOIN toy_house ON toy_house.toy_id = toy.id
 *   JOIN house ON house.id = toy_house.house_id
 *   JOIN house_cat ON house_cat.house_id = house.id
 * WHERE
 *   house_cat.cat_id = :catId
 * ```
 */
export const getToysAvailableToCat = new PreparedQuery<
  IGetToysAvailableToCatParams,
  IGetToysAvailableToCatResult
>(getToysAvailableToCatIR)
