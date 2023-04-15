/**
 * Client
 **/

import * as runtime from './runtime/library'
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}`
    ? Tuple[K] extends Prisma.PrismaPromise<infer X>
      ? X
      : UnwrapPromise<Tuple[K]>
    : UnwrapPromise<Tuple[K]>
}

/**
 * Model cat
 *
 */
export type cat = {
  id: bigint
  cat_color_id: number | null
  cat_name: string | null
  date_of_birth: Date | null
}

/**
 * Model cat_color
 *
 */
export type cat_color = {
  id: number
  color_name: string
}

/**
 * Model color_hex
 *
 */
export type color_hex = {
  id: number
  hex_code: string
}

/**
 * Model house
 *
 */
export type house = {
  id: number
  house_address: string | null
  has_dog: boolean | null
}

/**
 * Model house_cat
 *
 */
export type house_cat = {
  house_id: number
  cat_id: bigint
}

/**
 * Model toy
 *
 */
export type toy = {
  id: number
  toys_producer_id: number | null
  toy_name: string
  barcode: string
  price: Prisma.Decimal
  currency: string
  naughty: string | null
  date_introduced: Date
}

/**
 * Model toy_house
 *
 */
export type toy_house = {
  toy_id: number
  house_id: number
  amount: number
}

/**
 * Model toys_producer
 *
 */
export type toys_producer = {
  id: number
  stock_info: Prisma.JsonValue
  hq_location: Prisma.JsonValue
}

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cats
 * const cats = await prisma.cat.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  GlobalReject extends
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
> {
  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cats
   * const cats = await prisma.cat.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>)
  $on<V extends U | 'beforeExit'>(
    eventType: V,
    callback: (
      event: V extends 'query'
        ? Prisma.QueryEvent
        : V extends 'beforeExit'
        ? () => Promise<void>
        : Prisma.LogEvent
    ) => void
  ): void

  /**
   * Connect with the database
   */
  $connect(): Promise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): Promise<UnwrapTuple<P>>

  $transaction<R>(
    fn: (
      prisma: Omit<
        this,
        '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
      >
    ) => Promise<R>,
    options?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  ): Promise<R>

  /**
   * `prisma.cat`: Exposes CRUD operations for the **cat** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cats
   * const cats = await prisma.cat.findMany()
   * ```
   */
  get cat(): Prisma.catDelegate<GlobalReject>

  /**
   * `prisma.cat_color`: Exposes CRUD operations for the **cat_color** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cat_colors
   * const cat_colors = await prisma.cat_color.findMany()
   * ```
   */
  get cat_color(): Prisma.cat_colorDelegate<GlobalReject>

  /**
   * `prisma.color_hex`: Exposes CRUD operations for the **color_hex** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Color_hexes
   * const color_hexes = await prisma.color_hex.findMany()
   * ```
   */
  get color_hex(): Prisma.color_hexDelegate<GlobalReject>

  /**
   * `prisma.house`: Exposes CRUD operations for the **house** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Houses
   * const houses = await prisma.house.findMany()
   * ```
   */
  get house(): Prisma.houseDelegate<GlobalReject>

  /**
   * `prisma.house_cat`: Exposes CRUD operations for the **house_cat** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more House_cats
   * const house_cats = await prisma.house_cat.findMany()
   * ```
   */
  get house_cat(): Prisma.house_catDelegate<GlobalReject>

  /**
   * `prisma.toy`: Exposes CRUD operations for the **toy** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Toys
   * const toys = await prisma.toy.findMany()
   * ```
   */
  get toy(): Prisma.toyDelegate<GlobalReject>

  /**
   * `prisma.toy_house`: Exposes CRUD operations for the **toy_house** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Toy_houses
   * const toy_houses = await prisma.toy_house.findMany()
   * ```
   */
  get toy_house(): Prisma.toy_houseDelegate<GlobalReject>

  /**
   * `prisma.toys_producer`: Exposes CRUD operations for the **toys_producer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Toys_producers
   * const toys_producers = await prisma.toys_producer.findMany()
   * ```
   */
  get toys_producer(): Prisma.toys_producerDelegate<GlobalReject>
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue }

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null
  }

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> =
    PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  export function validator<V>(): <S>(
    select: runtime.Types.Utils.LegacyExact<S, V>
  ) => S

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>

  export const ModelName: {
    cat: 'cat'
    cat_color: 'cat_color'
    color_hex: 'color_hex'
    house: 'house'
    house_cat: 'house_cat'
    toy: 'toy'
    toy_house: 'toy_house'
    toys_producer: 'toys_producer'
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation = {
    [P in 'findUnique' | 'findFirst']?: RejectPerModel | RejectOnNotFound
  }
  type IsReject<T> = T extends true
    ? True
    : T extends (err: Error) => Error
    ? True
    : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null.
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
  >

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Count Type CatCountOutputType
   */

  export type CatCountOutputType = {
    house_cat: number
  }

  export type CatCountOutputTypeSelect = {
    house_cat?: boolean
  }

  export type CatCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CatCountOutputTypeArgs
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? CatCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & CatCountOutputTypeArgs
    ? CatCountOutputType
    : S extends { select: any } & CatCountOutputTypeArgs
    ? {
        [P in TruthyKeys<S['select']>]: P extends keyof CatCountOutputType
          ? CatCountOutputType[P]
          : never
      }
    : CatCountOutputType

  // Custom InputTypes

  /**
   * CatCountOutputType without action
   */
  export type CatCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CatCountOutputType
     */
    select?: CatCountOutputTypeSelect | null
  }

  /**
   * Count Type Cat_colorCountOutputType
   */

  export type Cat_colorCountOutputType = {
    cat: number
  }

  export type Cat_colorCountOutputTypeSelect = {
    cat?: boolean
  }

  export type Cat_colorCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Cat_colorCountOutputTypeArgs
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? Cat_colorCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & Cat_colorCountOutputTypeArgs
    ? Cat_colorCountOutputType
    : S extends { select: any } & Cat_colorCountOutputTypeArgs
    ? {
        [P in TruthyKeys<S['select']>]: P extends keyof Cat_colorCountOutputType
          ? Cat_colorCountOutputType[P]
          : never
      }
    : Cat_colorCountOutputType

  // Custom InputTypes

  /**
   * Cat_colorCountOutputType without action
   */
  export type Cat_colorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Cat_colorCountOutputType
     */
    select?: Cat_colorCountOutputTypeSelect | null
  }

  /**
   * Count Type HouseCountOutputType
   */

  export type HouseCountOutputType = {
    house_cat: number
    toy_house: number
  }

  export type HouseCountOutputTypeSelect = {
    house_cat?: boolean
    toy_house?: boolean
  }

  export type HouseCountOutputTypeGetPayload<
    S extends boolean | null | undefined | HouseCountOutputTypeArgs
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? HouseCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & HouseCountOutputTypeArgs
    ? HouseCountOutputType
    : S extends { select: any } & HouseCountOutputTypeArgs
    ? {
        [P in TruthyKeys<S['select']>]: P extends keyof HouseCountOutputType
          ? HouseCountOutputType[P]
          : never
      }
    : HouseCountOutputType

  // Custom InputTypes

  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HouseCountOutputType
     */
    select?: HouseCountOutputTypeSelect | null
  }

  /**
   * Count Type ToyCountOutputType
   */

  export type ToyCountOutputType = {
    toy_house: number
  }

  export type ToyCountOutputTypeSelect = {
    toy_house?: boolean
  }

  export type ToyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ToyCountOutputTypeArgs
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? ToyCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & ToyCountOutputTypeArgs
    ? ToyCountOutputType
    : S extends { select: any } & ToyCountOutputTypeArgs
    ? {
        [P in TruthyKeys<S['select']>]: P extends keyof ToyCountOutputType
          ? ToyCountOutputType[P]
          : never
      }
    : ToyCountOutputType

  // Custom InputTypes

  /**
   * ToyCountOutputType without action
   */
  export type ToyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ToyCountOutputType
     */
    select?: ToyCountOutputTypeSelect | null
  }

  /**
   * Count Type Toys_producerCountOutputType
   */

  export type Toys_producerCountOutputType = {
    toy: number
  }

  export type Toys_producerCountOutputTypeSelect = {
    toy?: boolean
  }

  export type Toys_producerCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Toys_producerCountOutputTypeArgs
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? Toys_producerCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & Toys_producerCountOutputTypeArgs
    ? Toys_producerCountOutputType
    : S extends { select: any } & Toys_producerCountOutputTypeArgs
    ? {
        [P in TruthyKeys<
          S['select']
        >]: P extends keyof Toys_producerCountOutputType
          ? Toys_producerCountOutputType[P]
          : never
      }
    : Toys_producerCountOutputType

  // Custom InputTypes

  /**
   * Toys_producerCountOutputType without action
   */
  export type Toys_producerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Toys_producerCountOutputType
     */
    select?: Toys_producerCountOutputTypeSelect | null
  }

  /**
   * Models
   */

  /**
   * Model cat
   */

  export type AggregateCat = {
    _count: CatCountAggregateOutputType | null
    _avg: CatAvgAggregateOutputType | null
    _sum: CatSumAggregateOutputType | null
    _min: CatMinAggregateOutputType | null
    _max: CatMaxAggregateOutputType | null
  }

  export type CatAvgAggregateOutputType = {
    id: number | null
    cat_color_id: number | null
  }

  export type CatSumAggregateOutputType = {
    id: bigint | null
    cat_color_id: number | null
  }

  export type CatMinAggregateOutputType = {
    id: bigint | null
    cat_color_id: number | null
    cat_name: string | null
    date_of_birth: Date | null
  }

  export type CatMaxAggregateOutputType = {
    id: bigint | null
    cat_color_id: number | null
    cat_name: string | null
    date_of_birth: Date | null
  }

  export type CatCountAggregateOutputType = {
    id: number
    cat_color_id: number
    cat_name: number
    date_of_birth: number
    _all: number
  }

  export type CatAvgAggregateInputType = {
    id?: true
    cat_color_id?: true
  }

  export type CatSumAggregateInputType = {
    id?: true
    cat_color_id?: true
  }

  export type CatMinAggregateInputType = {
    id?: true
    cat_color_id?: true
    cat_name?: true
    date_of_birth?: true
  }

  export type CatMaxAggregateInputType = {
    id?: true
    cat_color_id?: true
    cat_name?: true
    date_of_birth?: true
  }

  export type CatCountAggregateInputType = {
    id?: true
    cat_color_id?: true
    cat_name?: true
    date_of_birth?: true
    _all?: true
  }

  export type CatAggregateArgs = {
    /**
     * Filter which cat to aggregate.
     */
    where?: catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cats to fetch.
     */
    orderBy?: Enumerable<catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cats
     **/
    _count?: true | CatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CatMaxAggregateInputType
  }

  export type GetCatAggregateType<T extends CatAggregateArgs> = {
    [P in keyof T & keyof AggregateCat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCat[P]>
      : GetScalarType<T[P], AggregateCat[P]>
  }

  export type CatGroupByArgs = {
    where?: catWhereInput
    orderBy?: Enumerable<catOrderByWithAggregationInput>
    by: CatScalarFieldEnum[]
    having?: catScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CatCountAggregateInputType | true
    _avg?: CatAvgAggregateInputType
    _sum?: CatSumAggregateInputType
    _min?: CatMinAggregateInputType
    _max?: CatMaxAggregateInputType
  }

  export type CatGroupByOutputType = {
    id: bigint
    cat_color_id: number | null
    cat_name: string | null
    date_of_birth: Date | null
    _count: CatCountAggregateOutputType | null
    _avg: CatAvgAggregateOutputType | null
    _sum: CatSumAggregateOutputType | null
    _min: CatMinAggregateOutputType | null
    _max: CatMaxAggregateOutputType | null
  }

  type GetCatGroupByPayload<T extends CatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CatGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CatGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CatGroupByOutputType[P]>
          : GetScalarType<T[P], CatGroupByOutputType[P]>
      }
    >
  >

  export type catSelect = {
    id?: boolean
    cat_color_id?: boolean
    cat_name?: boolean
    date_of_birth?: boolean
    cat_color?: boolean | cat_colorArgs
    house_cat?: boolean | cat$house_catArgs
    _count?: boolean | CatCountOutputTypeArgs
  }

  export type catInclude = {
    cat_color?: boolean | cat_colorArgs
    house_cat?: boolean | cat$house_catArgs
    _count?: boolean | CatCountOutputTypeArgs
  }

  export type catGetPayload<S extends boolean | null | undefined | catArgs> =
    S extends { select: any; include: any }
      ? 'Please either choose `select` or `include`'
      : S extends true
      ? cat
      : S extends undefined
      ? never
      : S extends { include: any } & (catArgs | catFindManyArgs)
      ? cat & {
          [P in TruthyKeys<S['include']>]: P extends 'cat_color'
            ? cat_colorGetPayload<S['include'][P]> | null
            : P extends 'house_cat'
            ? Array<house_catGetPayload<S['include'][P]>>
            : P extends '_count'
            ? CatCountOutputTypeGetPayload<S['include'][P]>
            : never
        }
      : S extends { select: any } & (catArgs | catFindManyArgs)
      ? {
          [P in TruthyKeys<S['select']>]: P extends 'cat_color'
            ? cat_colorGetPayload<S['select'][P]> | null
            : P extends 'house_cat'
            ? Array<house_catGetPayload<S['select'][P]>>
            : P extends '_count'
            ? CatCountOutputTypeGetPayload<S['select'][P]>
            : P extends keyof cat
            ? cat[P]
            : never
        }
      : cat

  type catCountArgs = Omit<catFindManyArgs, 'select' | 'include'> & {
    select?: CatCountAggregateInputType | true
  }

  export interface catDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one Cat that matches the filter.
     * @param {catFindUniqueArgs} args - Arguments to find a Cat
     * @example
     * // Get one Cat
     * const cat = await prisma.cat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends catFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args: SelectSubset<T, catFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'cat'
    > extends True
      ? Prisma__catClient<catGetPayload<T>>
      : Prisma__catClient<catGetPayload<T> | null, null>

    /**
     * Find one Cat that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {catFindUniqueOrThrowArgs} args - Arguments to find a Cat
     * @example
     * // Get one Cat
     * const cat = await prisma.cat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends catFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, catFindUniqueOrThrowArgs>
    ): Prisma__catClient<catGetPayload<T>>

    /**
     * Find the first Cat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catFindFirstArgs} args - Arguments to find a Cat
     * @example
     * // Get one Cat
     * const cat = await prisma.cat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends catFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args?: SelectSubset<T, catFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'cat'
    > extends True
      ? Prisma__catClient<catGetPayload<T>>
      : Prisma__catClient<catGetPayload<T> | null, null>

    /**
     * Find the first Cat that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catFindFirstOrThrowArgs} args - Arguments to find a Cat
     * @example
     * // Get one Cat
     * const cat = await prisma.cat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends catFindFirstOrThrowArgs>(
      args?: SelectSubset<T, catFindFirstOrThrowArgs>
    ): Prisma__catClient<catGetPayload<T>>

    /**
     * Find zero or more Cats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cats
     * const cats = await prisma.cat.findMany()
     *
     * // Get first 10 Cats
     * const cats = await prisma.cat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const catWithIdOnly = await prisma.cat.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends catFindManyArgs>(
      args?: SelectSubset<T, catFindManyArgs>
    ): Prisma.PrismaPromise<Array<catGetPayload<T>>>

    /**
     * Create a Cat.
     * @param {catCreateArgs} args - Arguments to create a Cat.
     * @example
     * // Create one Cat
     * const Cat = await prisma.cat.create({
     *   data: {
     *     // ... data to create a Cat
     *   }
     * })
     *
     **/
    create<T extends catCreateArgs>(
      args: SelectSubset<T, catCreateArgs>
    ): Prisma__catClient<catGetPayload<T>>

    /**
     * Create many Cats.
     *     @param {catCreateManyArgs} args - Arguments to create many Cats.
     *     @example
     *     // Create many Cats
     *     const cat = await prisma.cat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends catCreateManyArgs>(
      args?: SelectSubset<T, catCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cat.
     * @param {catDeleteArgs} args - Arguments to delete one Cat.
     * @example
     * // Delete one Cat
     * const Cat = await prisma.cat.delete({
     *   where: {
     *     // ... filter to delete one Cat
     *   }
     * })
     *
     **/
    delete<T extends catDeleteArgs>(
      args: SelectSubset<T, catDeleteArgs>
    ): Prisma__catClient<catGetPayload<T>>

    /**
     * Update one Cat.
     * @param {catUpdateArgs} args - Arguments to update one Cat.
     * @example
     * // Update one Cat
     * const cat = await prisma.cat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends catUpdateArgs>(
      args: SelectSubset<T, catUpdateArgs>
    ): Prisma__catClient<catGetPayload<T>>

    /**
     * Delete zero or more Cats.
     * @param {catDeleteManyArgs} args - Arguments to filter Cats to delete.
     * @example
     * // Delete a few Cats
     * const { count } = await prisma.cat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends catDeleteManyArgs>(
      args?: SelectSubset<T, catDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cats
     * const cat = await prisma.cat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends catUpdateManyArgs>(
      args: SelectSubset<T, catUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cat.
     * @param {catUpsertArgs} args - Arguments to update or create a Cat.
     * @example
     * // Update or create a Cat
     * const cat = await prisma.cat.upsert({
     *   create: {
     *     // ... data to create a Cat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cat we want to update
     *   }
     * })
     **/
    upsert<T extends catUpsertArgs>(
      args: SelectSubset<T, catUpsertArgs>
    ): Prisma__catClient<catGetPayload<T>>

    /**
     * Count the number of Cats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {catCountArgs} args - Arguments to filter Cats to count.
     * @example
     * // Count the number of Cats
     * const count = await prisma.cat.count({
     *   where: {
     *     // ... the filter for the Cats we want to count
     *   }
     * })
     **/
    count<T extends catCountArgs>(
      args?: Subset<T, catCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CatAggregateArgs>(
      args: Subset<T, CatAggregateArgs>
    ): Prisma.PrismaPromise<GetCatAggregateType<T>>

    /**
     * Group by Cat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatGroupByArgs['orderBy'] }
        : { orderBy?: CatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in "having" needs to be provided in "by"`
                ]
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
    >(
      args: SubsetIntersection<T, CatGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCatGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for cat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__catClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    )

    cat_color<T extends cat_colorArgs = {}>(
      args?: Subset<T, cat_colorArgs>
    ): Prisma__cat_colorClient<cat_colorGetPayload<T> | Null>

    house_cat<T extends cat$house_catArgs = {}>(
      args?: Subset<T, cat$house_catArgs>
    ): Prisma.PrismaPromise<Array<house_catGetPayload<T>> | Null>

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * cat base type for findUnique actions
   */
  export type catFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the cat
     */
    select?: catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: catInclude | null
    /**
     * Filter, which cat to fetch.
     */
    where: catWhereUniqueInput
  }

  /**
   * cat findUnique
   */
  export interface catFindUniqueArgs extends catFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * cat findUniqueOrThrow
   */
  export type catFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the cat
     */
    select?: catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: catInclude | null
    /**
     * Filter, which cat to fetch.
     */
    where: catWhereUniqueInput
  }

  /**
   * cat base type for findFirst actions
   */
  export type catFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the cat
     */
    select?: catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: catInclude | null
    /**
     * Filter, which cat to fetch.
     */
    where?: catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cats to fetch.
     */
    orderBy?: Enumerable<catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cats.
     */
    cursor?: catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cats.
     */
    distinct?: Enumerable<CatScalarFieldEnum>
  }

  /**
   * cat findFirst
   */
  export interface catFindFirstArgs extends catFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * cat findFirstOrThrow
   */
  export type catFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the cat
     */
    select?: catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: catInclude | null
    /**
     * Filter, which cat to fetch.
     */
    where?: catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cats to fetch.
     */
    orderBy?: Enumerable<catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cats.
     */
    cursor?: catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cats.
     */
    distinct?: Enumerable<CatScalarFieldEnum>
  }

  /**
   * cat findMany
   */
  export type catFindManyArgs = {
    /**
     * Select specific fields to fetch from the cat
     */
    select?: catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: catInclude | null
    /**
     * Filter, which cats to fetch.
     */
    where?: catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cats to fetch.
     */
    orderBy?: Enumerable<catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cats.
     */
    cursor?: catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cats.
     */
    skip?: number
    distinct?: Enumerable<CatScalarFieldEnum>
  }

  /**
   * cat create
   */
  export type catCreateArgs = {
    /**
     * Select specific fields to fetch from the cat
     */
    select?: catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: catInclude | null
    /**
     * The data needed to create a cat.
     */
    data: XOR<catCreateInput, catUncheckedCreateInput>
  }

  /**
   * cat createMany
   */
  export type catCreateManyArgs = {
    /**
     * The data used to create many cats.
     */
    data: Enumerable<catCreateManyInput>
    skipDuplicates?: boolean
  }

  /**
   * cat update
   */
  export type catUpdateArgs = {
    /**
     * Select specific fields to fetch from the cat
     */
    select?: catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: catInclude | null
    /**
     * The data needed to update a cat.
     */
    data: XOR<catUpdateInput, catUncheckedUpdateInput>
    /**
     * Choose, which cat to update.
     */
    where: catWhereUniqueInput
  }

  /**
   * cat updateMany
   */
  export type catUpdateManyArgs = {
    /**
     * The data used to update cats.
     */
    data: XOR<catUpdateManyMutationInput, catUncheckedUpdateManyInput>
    /**
     * Filter which cats to update
     */
    where?: catWhereInput
  }

  /**
   * cat upsert
   */
  export type catUpsertArgs = {
    /**
     * Select specific fields to fetch from the cat
     */
    select?: catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: catInclude | null
    /**
     * The filter to search for the cat to update in case it exists.
     */
    where: catWhereUniqueInput
    /**
     * In case the cat found by the `where` argument doesn't exist, create a new cat with this data.
     */
    create: XOR<catCreateInput, catUncheckedCreateInput>
    /**
     * In case the cat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<catUpdateInput, catUncheckedUpdateInput>
  }

  /**
   * cat delete
   */
  export type catDeleteArgs = {
    /**
     * Select specific fields to fetch from the cat
     */
    select?: catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: catInclude | null
    /**
     * Filter which cat to delete.
     */
    where: catWhereUniqueInput
  }

  /**
   * cat deleteMany
   */
  export type catDeleteManyArgs = {
    /**
     * Filter which cats to delete
     */
    where?: catWhereInput
  }

  /**
   * cat.house_cat
   */
  export type cat$house_catArgs = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
    where?: house_catWhereInput
    orderBy?: Enumerable<house_catOrderByWithRelationInput>
    cursor?: house_catWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<House_catScalarFieldEnum>
  }

  /**
   * cat without action
   */
  export type catArgs = {
    /**
     * Select specific fields to fetch from the cat
     */
    select?: catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: catInclude | null
  }

  /**
   * Model cat_color
   */

  export type AggregateCat_color = {
    _count: Cat_colorCountAggregateOutputType | null
    _avg: Cat_colorAvgAggregateOutputType | null
    _sum: Cat_colorSumAggregateOutputType | null
    _min: Cat_colorMinAggregateOutputType | null
    _max: Cat_colorMaxAggregateOutputType | null
  }

  export type Cat_colorAvgAggregateOutputType = {
    id: number | null
  }

  export type Cat_colorSumAggregateOutputType = {
    id: number | null
  }

  export type Cat_colorMinAggregateOutputType = {
    id: number | null
    color_name: string | null
  }

  export type Cat_colorMaxAggregateOutputType = {
    id: number | null
    color_name: string | null
  }

  export type Cat_colorCountAggregateOutputType = {
    id: number
    color_name: number
    _all: number
  }

  export type Cat_colorAvgAggregateInputType = {
    id?: true
  }

  export type Cat_colorSumAggregateInputType = {
    id?: true
  }

  export type Cat_colorMinAggregateInputType = {
    id?: true
    color_name?: true
  }

  export type Cat_colorMaxAggregateInputType = {
    id?: true
    color_name?: true
  }

  export type Cat_colorCountAggregateInputType = {
    id?: true
    color_name?: true
    _all?: true
  }

  export type Cat_colorAggregateArgs = {
    /**
     * Filter which cat_color to aggregate.
     */
    where?: cat_colorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cat_colors to fetch.
     */
    orderBy?: Enumerable<cat_colorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: cat_colorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cat_colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cat_colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cat_colors
     **/
    _count?: true | Cat_colorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Cat_colorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Cat_colorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Cat_colorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Cat_colorMaxAggregateInputType
  }

  export type GetCat_colorAggregateType<T extends Cat_colorAggregateArgs> = {
    [P in keyof T & keyof AggregateCat_color]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCat_color[P]>
      : GetScalarType<T[P], AggregateCat_color[P]>
  }

  export type Cat_colorGroupByArgs = {
    where?: cat_colorWhereInput
    orderBy?: Enumerable<cat_colorOrderByWithAggregationInput>
    by: Cat_colorScalarFieldEnum[]
    having?: cat_colorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cat_colorCountAggregateInputType | true
    _avg?: Cat_colorAvgAggregateInputType
    _sum?: Cat_colorSumAggregateInputType
    _min?: Cat_colorMinAggregateInputType
    _max?: Cat_colorMaxAggregateInputType
  }

  export type Cat_colorGroupByOutputType = {
    id: number
    color_name: string
    _count: Cat_colorCountAggregateOutputType | null
    _avg: Cat_colorAvgAggregateOutputType | null
    _sum: Cat_colorSumAggregateOutputType | null
    _min: Cat_colorMinAggregateOutputType | null
    _max: Cat_colorMaxAggregateOutputType | null
  }

  type GetCat_colorGroupByPayload<T extends Cat_colorGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<Cat_colorGroupByOutputType, T['by']> & {
          [P in keyof T & keyof Cat_colorGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cat_colorGroupByOutputType[P]>
            : GetScalarType<T[P], Cat_colorGroupByOutputType[P]>
        }
      >
    >

  export type cat_colorSelect = {
    id?: boolean
    color_name?: boolean
    cat?: boolean | cat_color$catArgs
    color_hex?: boolean | color_hexArgs
    _count?: boolean | Cat_colorCountOutputTypeArgs
  }

  export type cat_colorInclude = {
    cat?: boolean | cat_color$catArgs
    color_hex?: boolean | color_hexArgs
    _count?: boolean | Cat_colorCountOutputTypeArgs
  }

  export type cat_colorGetPayload<
    S extends boolean | null | undefined | cat_colorArgs
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? cat_color
    : S extends undefined
    ? never
    : S extends { include: any } & (cat_colorArgs | cat_colorFindManyArgs)
    ? cat_color & {
        [P in TruthyKeys<S['include']>]: P extends 'cat'
          ? Array<catGetPayload<S['include'][P]>>
          : P extends 'color_hex'
          ? color_hexGetPayload<S['include'][P]> | null
          : P extends '_count'
          ? Cat_colorCountOutputTypeGetPayload<S['include'][P]>
          : never
      }
    : S extends { select: any } & (cat_colorArgs | cat_colorFindManyArgs)
    ? {
        [P in TruthyKeys<S['select']>]: P extends 'cat'
          ? Array<catGetPayload<S['select'][P]>>
          : P extends 'color_hex'
          ? color_hexGetPayload<S['select'][P]> | null
          : P extends '_count'
          ? Cat_colorCountOutputTypeGetPayload<S['select'][P]>
          : P extends keyof cat_color
          ? cat_color[P]
          : never
      }
    : cat_color

  type cat_colorCountArgs = Omit<
    cat_colorFindManyArgs,
    'select' | 'include'
  > & {
    select?: Cat_colorCountAggregateInputType | true
  }

  export interface cat_colorDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one Cat_color that matches the filter.
     * @param {cat_colorFindUniqueArgs} args - Arguments to find a Cat_color
     * @example
     * // Get one Cat_color
     * const cat_color = await prisma.cat_color.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends cat_colorFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args: SelectSubset<T, cat_colorFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'cat_color'
    > extends True
      ? Prisma__cat_colorClient<cat_colorGetPayload<T>>
      : Prisma__cat_colorClient<cat_colorGetPayload<T> | null, null>

    /**
     * Find one Cat_color that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {cat_colorFindUniqueOrThrowArgs} args - Arguments to find a Cat_color
     * @example
     * // Get one Cat_color
     * const cat_color = await prisma.cat_color.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends cat_colorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, cat_colorFindUniqueOrThrowArgs>
    ): Prisma__cat_colorClient<cat_colorGetPayload<T>>

    /**
     * Find the first Cat_color that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_colorFindFirstArgs} args - Arguments to find a Cat_color
     * @example
     * // Get one Cat_color
     * const cat_color = await prisma.cat_color.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends cat_colorFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args?: SelectSubset<T, cat_colorFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'cat_color'
    > extends True
      ? Prisma__cat_colorClient<cat_colorGetPayload<T>>
      : Prisma__cat_colorClient<cat_colorGetPayload<T> | null, null>

    /**
     * Find the first Cat_color that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_colorFindFirstOrThrowArgs} args - Arguments to find a Cat_color
     * @example
     * // Get one Cat_color
     * const cat_color = await prisma.cat_color.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends cat_colorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, cat_colorFindFirstOrThrowArgs>
    ): Prisma__cat_colorClient<cat_colorGetPayload<T>>

    /**
     * Find zero or more Cat_colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_colorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cat_colors
     * const cat_colors = await prisma.cat_color.findMany()
     *
     * // Get first 10 Cat_colors
     * const cat_colors = await prisma.cat_color.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cat_colorWithIdOnly = await prisma.cat_color.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends cat_colorFindManyArgs>(
      args?: SelectSubset<T, cat_colorFindManyArgs>
    ): Prisma.PrismaPromise<Array<cat_colorGetPayload<T>>>

    /**
     * Create a Cat_color.
     * @param {cat_colorCreateArgs} args - Arguments to create a Cat_color.
     * @example
     * // Create one Cat_color
     * const Cat_color = await prisma.cat_color.create({
     *   data: {
     *     // ... data to create a Cat_color
     *   }
     * })
     *
     **/
    create<T extends cat_colorCreateArgs>(
      args: SelectSubset<T, cat_colorCreateArgs>
    ): Prisma__cat_colorClient<cat_colorGetPayload<T>>

    /**
     * Create many Cat_colors.
     *     @param {cat_colorCreateManyArgs} args - Arguments to create many Cat_colors.
     *     @example
     *     // Create many Cat_colors
     *     const cat_color = await prisma.cat_color.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends cat_colorCreateManyArgs>(
      args?: SelectSubset<T, cat_colorCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cat_color.
     * @param {cat_colorDeleteArgs} args - Arguments to delete one Cat_color.
     * @example
     * // Delete one Cat_color
     * const Cat_color = await prisma.cat_color.delete({
     *   where: {
     *     // ... filter to delete one Cat_color
     *   }
     * })
     *
     **/
    delete<T extends cat_colorDeleteArgs>(
      args: SelectSubset<T, cat_colorDeleteArgs>
    ): Prisma__cat_colorClient<cat_colorGetPayload<T>>

    /**
     * Update one Cat_color.
     * @param {cat_colorUpdateArgs} args - Arguments to update one Cat_color.
     * @example
     * // Update one Cat_color
     * const cat_color = await prisma.cat_color.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends cat_colorUpdateArgs>(
      args: SelectSubset<T, cat_colorUpdateArgs>
    ): Prisma__cat_colorClient<cat_colorGetPayload<T>>

    /**
     * Delete zero or more Cat_colors.
     * @param {cat_colorDeleteManyArgs} args - Arguments to filter Cat_colors to delete.
     * @example
     * // Delete a few Cat_colors
     * const { count } = await prisma.cat_color.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends cat_colorDeleteManyArgs>(
      args?: SelectSubset<T, cat_colorDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cat_colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_colorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cat_colors
     * const cat_color = await prisma.cat_color.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends cat_colorUpdateManyArgs>(
      args: SelectSubset<T, cat_colorUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cat_color.
     * @param {cat_colorUpsertArgs} args - Arguments to update or create a Cat_color.
     * @example
     * // Update or create a Cat_color
     * const cat_color = await prisma.cat_color.upsert({
     *   create: {
     *     // ... data to create a Cat_color
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cat_color we want to update
     *   }
     * })
     **/
    upsert<T extends cat_colorUpsertArgs>(
      args: SelectSubset<T, cat_colorUpsertArgs>
    ): Prisma__cat_colorClient<cat_colorGetPayload<T>>

    /**
     * Count the number of Cat_colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cat_colorCountArgs} args - Arguments to filter Cat_colors to count.
     * @example
     * // Count the number of Cat_colors
     * const count = await prisma.cat_color.count({
     *   where: {
     *     // ... the filter for the Cat_colors we want to count
     *   }
     * })
     **/
    count<T extends cat_colorCountArgs>(
      args?: Subset<T, cat_colorCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cat_colorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cat_color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cat_colorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Cat_colorAggregateArgs>(
      args: Subset<T, Cat_colorAggregateArgs>
    ): Prisma.PrismaPromise<GetCat_colorAggregateType<T>>

    /**
     * Group by Cat_color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cat_colorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends Cat_colorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Cat_colorGroupByArgs['orderBy'] }
        : { orderBy?: Cat_colorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in "having" needs to be provided in "by"`
                ]
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
    >(
      args: SubsetIntersection<T, Cat_colorGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetCat_colorGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for cat_color.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cat_colorClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    )

    cat<T extends cat_color$catArgs = {}>(
      args?: Subset<T, cat_color$catArgs>
    ): Prisma.PrismaPromise<Array<catGetPayload<T>> | Null>

    color_hex<T extends color_hexArgs = {}>(
      args?: Subset<T, color_hexArgs>
    ): Prisma__color_hexClient<color_hexGetPayload<T> | Null>

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * cat_color base type for findUnique actions
   */
  export type cat_colorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the cat_color
     */
    select?: cat_colorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_colorInclude | null
    /**
     * Filter, which cat_color to fetch.
     */
    where: cat_colorWhereUniqueInput
  }

  /**
   * cat_color findUnique
   */
  export interface cat_colorFindUniqueArgs extends cat_colorFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * cat_color findUniqueOrThrow
   */
  export type cat_colorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the cat_color
     */
    select?: cat_colorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_colorInclude | null
    /**
     * Filter, which cat_color to fetch.
     */
    where: cat_colorWhereUniqueInput
  }

  /**
   * cat_color base type for findFirst actions
   */
  export type cat_colorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the cat_color
     */
    select?: cat_colorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_colorInclude | null
    /**
     * Filter, which cat_color to fetch.
     */
    where?: cat_colorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cat_colors to fetch.
     */
    orderBy?: Enumerable<cat_colorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cat_colors.
     */
    cursor?: cat_colorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cat_colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cat_colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cat_colors.
     */
    distinct?: Enumerable<Cat_colorScalarFieldEnum>
  }

  /**
   * cat_color findFirst
   */
  export interface cat_colorFindFirstArgs extends cat_colorFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * cat_color findFirstOrThrow
   */
  export type cat_colorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the cat_color
     */
    select?: cat_colorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_colorInclude | null
    /**
     * Filter, which cat_color to fetch.
     */
    where?: cat_colorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cat_colors to fetch.
     */
    orderBy?: Enumerable<cat_colorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cat_colors.
     */
    cursor?: cat_colorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cat_colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cat_colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cat_colors.
     */
    distinct?: Enumerable<Cat_colorScalarFieldEnum>
  }

  /**
   * cat_color findMany
   */
  export type cat_colorFindManyArgs = {
    /**
     * Select specific fields to fetch from the cat_color
     */
    select?: cat_colorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_colorInclude | null
    /**
     * Filter, which cat_colors to fetch.
     */
    where?: cat_colorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cat_colors to fetch.
     */
    orderBy?: Enumerable<cat_colorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cat_colors.
     */
    cursor?: cat_colorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cat_colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cat_colors.
     */
    skip?: number
    distinct?: Enumerable<Cat_colorScalarFieldEnum>
  }

  /**
   * cat_color create
   */
  export type cat_colorCreateArgs = {
    /**
     * Select specific fields to fetch from the cat_color
     */
    select?: cat_colorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_colorInclude | null
    /**
     * The data needed to create a cat_color.
     */
    data: XOR<cat_colorCreateInput, cat_colorUncheckedCreateInput>
  }

  /**
   * cat_color createMany
   */
  export type cat_colorCreateManyArgs = {
    /**
     * The data used to create many cat_colors.
     */
    data: Enumerable<cat_colorCreateManyInput>
    skipDuplicates?: boolean
  }

  /**
   * cat_color update
   */
  export type cat_colorUpdateArgs = {
    /**
     * Select specific fields to fetch from the cat_color
     */
    select?: cat_colorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_colorInclude | null
    /**
     * The data needed to update a cat_color.
     */
    data: XOR<cat_colorUpdateInput, cat_colorUncheckedUpdateInput>
    /**
     * Choose, which cat_color to update.
     */
    where: cat_colorWhereUniqueInput
  }

  /**
   * cat_color updateMany
   */
  export type cat_colorUpdateManyArgs = {
    /**
     * The data used to update cat_colors.
     */
    data: XOR<
      cat_colorUpdateManyMutationInput,
      cat_colorUncheckedUpdateManyInput
    >
    /**
     * Filter which cat_colors to update
     */
    where?: cat_colorWhereInput
  }

  /**
   * cat_color upsert
   */
  export type cat_colorUpsertArgs = {
    /**
     * Select specific fields to fetch from the cat_color
     */
    select?: cat_colorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_colorInclude | null
    /**
     * The filter to search for the cat_color to update in case it exists.
     */
    where: cat_colorWhereUniqueInput
    /**
     * In case the cat_color found by the `where` argument doesn't exist, create a new cat_color with this data.
     */
    create: XOR<cat_colorCreateInput, cat_colorUncheckedCreateInput>
    /**
     * In case the cat_color was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cat_colorUpdateInput, cat_colorUncheckedUpdateInput>
  }

  /**
   * cat_color delete
   */
  export type cat_colorDeleteArgs = {
    /**
     * Select specific fields to fetch from the cat_color
     */
    select?: cat_colorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_colorInclude | null
    /**
     * Filter which cat_color to delete.
     */
    where: cat_colorWhereUniqueInput
  }

  /**
   * cat_color deleteMany
   */
  export type cat_colorDeleteManyArgs = {
    /**
     * Filter which cat_colors to delete
     */
    where?: cat_colorWhereInput
  }

  /**
   * cat_color.cat
   */
  export type cat_color$catArgs = {
    /**
     * Select specific fields to fetch from the cat
     */
    select?: catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: catInclude | null
    where?: catWhereInput
    orderBy?: Enumerable<catOrderByWithRelationInput>
    cursor?: catWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CatScalarFieldEnum>
  }

  /**
   * cat_color without action
   */
  export type cat_colorArgs = {
    /**
     * Select specific fields to fetch from the cat_color
     */
    select?: cat_colorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cat_colorInclude | null
  }

  /**
   * Model color_hex
   */

  export type AggregateColor_hex = {
    _count: Color_hexCountAggregateOutputType | null
    _avg: Color_hexAvgAggregateOutputType | null
    _sum: Color_hexSumAggregateOutputType | null
    _min: Color_hexMinAggregateOutputType | null
    _max: Color_hexMaxAggregateOutputType | null
  }

  export type Color_hexAvgAggregateOutputType = {
    id: number | null
  }

  export type Color_hexSumAggregateOutputType = {
    id: number | null
  }

  export type Color_hexMinAggregateOutputType = {
    id: number | null
    hex_code: string | null
  }

  export type Color_hexMaxAggregateOutputType = {
    id: number | null
    hex_code: string | null
  }

  export type Color_hexCountAggregateOutputType = {
    id: number
    hex_code: number
    _all: number
  }

  export type Color_hexAvgAggregateInputType = {
    id?: true
  }

  export type Color_hexSumAggregateInputType = {
    id?: true
  }

  export type Color_hexMinAggregateInputType = {
    id?: true
    hex_code?: true
  }

  export type Color_hexMaxAggregateInputType = {
    id?: true
    hex_code?: true
  }

  export type Color_hexCountAggregateInputType = {
    id?: true
    hex_code?: true
    _all?: true
  }

  export type Color_hexAggregateArgs = {
    /**
     * Filter which color_hex to aggregate.
     */
    where?: color_hexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of color_hexes to fetch.
     */
    orderBy?: Enumerable<color_hexOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: color_hexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` color_hexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` color_hexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned color_hexes
     **/
    _count?: true | Color_hexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Color_hexAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Color_hexSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Color_hexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Color_hexMaxAggregateInputType
  }

  export type GetColor_hexAggregateType<T extends Color_hexAggregateArgs> = {
    [P in keyof T & keyof AggregateColor_hex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColor_hex[P]>
      : GetScalarType<T[P], AggregateColor_hex[P]>
  }

  export type Color_hexGroupByArgs = {
    where?: color_hexWhereInput
    orderBy?: Enumerable<color_hexOrderByWithAggregationInput>
    by: Color_hexScalarFieldEnum[]
    having?: color_hexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Color_hexCountAggregateInputType | true
    _avg?: Color_hexAvgAggregateInputType
    _sum?: Color_hexSumAggregateInputType
    _min?: Color_hexMinAggregateInputType
    _max?: Color_hexMaxAggregateInputType
  }

  export type Color_hexGroupByOutputType = {
    id: number
    hex_code: string
    _count: Color_hexCountAggregateOutputType | null
    _avg: Color_hexAvgAggregateOutputType | null
    _sum: Color_hexSumAggregateOutputType | null
    _min: Color_hexMinAggregateOutputType | null
    _max: Color_hexMaxAggregateOutputType | null
  }

  type GetColor_hexGroupByPayload<T extends Color_hexGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<Color_hexGroupByOutputType, T['by']> & {
          [P in keyof T & keyof Color_hexGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Color_hexGroupByOutputType[P]>
            : GetScalarType<T[P], Color_hexGroupByOutputType[P]>
        }
      >
    >

  export type color_hexSelect = {
    id?: boolean
    hex_code?: boolean
    cat_color?: boolean | cat_colorArgs
  }

  export type color_hexInclude = {
    cat_color?: boolean | cat_colorArgs
  }

  export type color_hexGetPayload<
    S extends boolean | null | undefined | color_hexArgs
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? color_hex
    : S extends undefined
    ? never
    : S extends { include: any } & (color_hexArgs | color_hexFindManyArgs)
    ? color_hex & {
        [P in TruthyKeys<S['include']>]: P extends 'cat_color'
          ? cat_colorGetPayload<S['include'][P]>
          : never
      }
    : S extends { select: any } & (color_hexArgs | color_hexFindManyArgs)
    ? {
        [P in TruthyKeys<S['select']>]: P extends 'cat_color'
          ? cat_colorGetPayload<S['select'][P]>
          : P extends keyof color_hex
          ? color_hex[P]
          : never
      }
    : color_hex

  type color_hexCountArgs = Omit<
    color_hexFindManyArgs,
    'select' | 'include'
  > & {
    select?: Color_hexCountAggregateInputType | true
  }

  export interface color_hexDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one Color_hex that matches the filter.
     * @param {color_hexFindUniqueArgs} args - Arguments to find a Color_hex
     * @example
     * // Get one Color_hex
     * const color_hex = await prisma.color_hex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends color_hexFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args: SelectSubset<T, color_hexFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'color_hex'
    > extends True
      ? Prisma__color_hexClient<color_hexGetPayload<T>>
      : Prisma__color_hexClient<color_hexGetPayload<T> | null, null>

    /**
     * Find one Color_hex that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {color_hexFindUniqueOrThrowArgs} args - Arguments to find a Color_hex
     * @example
     * // Get one Color_hex
     * const color_hex = await prisma.color_hex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends color_hexFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, color_hexFindUniqueOrThrowArgs>
    ): Prisma__color_hexClient<color_hexGetPayload<T>>

    /**
     * Find the first Color_hex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {color_hexFindFirstArgs} args - Arguments to find a Color_hex
     * @example
     * // Get one Color_hex
     * const color_hex = await prisma.color_hex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends color_hexFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args?: SelectSubset<T, color_hexFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'color_hex'
    > extends True
      ? Prisma__color_hexClient<color_hexGetPayload<T>>
      : Prisma__color_hexClient<color_hexGetPayload<T> | null, null>

    /**
     * Find the first Color_hex that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {color_hexFindFirstOrThrowArgs} args - Arguments to find a Color_hex
     * @example
     * // Get one Color_hex
     * const color_hex = await prisma.color_hex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends color_hexFindFirstOrThrowArgs>(
      args?: SelectSubset<T, color_hexFindFirstOrThrowArgs>
    ): Prisma__color_hexClient<color_hexGetPayload<T>>

    /**
     * Find zero or more Color_hexes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {color_hexFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Color_hexes
     * const color_hexes = await prisma.color_hex.findMany()
     *
     * // Get first 10 Color_hexes
     * const color_hexes = await prisma.color_hex.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const color_hexWithIdOnly = await prisma.color_hex.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends color_hexFindManyArgs>(
      args?: SelectSubset<T, color_hexFindManyArgs>
    ): Prisma.PrismaPromise<Array<color_hexGetPayload<T>>>

    /**
     * Create a Color_hex.
     * @param {color_hexCreateArgs} args - Arguments to create a Color_hex.
     * @example
     * // Create one Color_hex
     * const Color_hex = await prisma.color_hex.create({
     *   data: {
     *     // ... data to create a Color_hex
     *   }
     * })
     *
     **/
    create<T extends color_hexCreateArgs>(
      args: SelectSubset<T, color_hexCreateArgs>
    ): Prisma__color_hexClient<color_hexGetPayload<T>>

    /**
     * Create many Color_hexes.
     *     @param {color_hexCreateManyArgs} args - Arguments to create many Color_hexes.
     *     @example
     *     // Create many Color_hexes
     *     const color_hex = await prisma.color_hex.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends color_hexCreateManyArgs>(
      args?: SelectSubset<T, color_hexCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Color_hex.
     * @param {color_hexDeleteArgs} args - Arguments to delete one Color_hex.
     * @example
     * // Delete one Color_hex
     * const Color_hex = await prisma.color_hex.delete({
     *   where: {
     *     // ... filter to delete one Color_hex
     *   }
     * })
     *
     **/
    delete<T extends color_hexDeleteArgs>(
      args: SelectSubset<T, color_hexDeleteArgs>
    ): Prisma__color_hexClient<color_hexGetPayload<T>>

    /**
     * Update one Color_hex.
     * @param {color_hexUpdateArgs} args - Arguments to update one Color_hex.
     * @example
     * // Update one Color_hex
     * const color_hex = await prisma.color_hex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends color_hexUpdateArgs>(
      args: SelectSubset<T, color_hexUpdateArgs>
    ): Prisma__color_hexClient<color_hexGetPayload<T>>

    /**
     * Delete zero or more Color_hexes.
     * @param {color_hexDeleteManyArgs} args - Arguments to filter Color_hexes to delete.
     * @example
     * // Delete a few Color_hexes
     * const { count } = await prisma.color_hex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends color_hexDeleteManyArgs>(
      args?: SelectSubset<T, color_hexDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Color_hexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {color_hexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Color_hexes
     * const color_hex = await prisma.color_hex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends color_hexUpdateManyArgs>(
      args: SelectSubset<T, color_hexUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Color_hex.
     * @param {color_hexUpsertArgs} args - Arguments to update or create a Color_hex.
     * @example
     * // Update or create a Color_hex
     * const color_hex = await prisma.color_hex.upsert({
     *   create: {
     *     // ... data to create a Color_hex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Color_hex we want to update
     *   }
     * })
     **/
    upsert<T extends color_hexUpsertArgs>(
      args: SelectSubset<T, color_hexUpsertArgs>
    ): Prisma__color_hexClient<color_hexGetPayload<T>>

    /**
     * Count the number of Color_hexes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {color_hexCountArgs} args - Arguments to filter Color_hexes to count.
     * @example
     * // Count the number of Color_hexes
     * const count = await prisma.color_hex.count({
     *   where: {
     *     // ... the filter for the Color_hexes we want to count
     *   }
     * })
     **/
    count<T extends color_hexCountArgs>(
      args?: Subset<T, color_hexCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Color_hexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Color_hex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Color_hexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Color_hexAggregateArgs>(
      args: Subset<T, Color_hexAggregateArgs>
    ): Prisma.PrismaPromise<GetColor_hexAggregateType<T>>

    /**
     * Group by Color_hex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Color_hexGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends Color_hexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Color_hexGroupByArgs['orderBy'] }
        : { orderBy?: Color_hexGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in "having" needs to be provided in "by"`
                ]
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
    >(
      args: SubsetIntersection<T, Color_hexGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetColor_hexGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for color_hex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__color_hexClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    )

    cat_color<T extends cat_colorArgs = {}>(
      args?: Subset<T, cat_colorArgs>
    ): Prisma__cat_colorClient<cat_colorGetPayload<T> | Null>

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * color_hex base type for findUnique actions
   */
  export type color_hexFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the color_hex
     */
    select?: color_hexSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: color_hexInclude | null
    /**
     * Filter, which color_hex to fetch.
     */
    where: color_hexWhereUniqueInput
  }

  /**
   * color_hex findUnique
   */
  export interface color_hexFindUniqueArgs extends color_hexFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * color_hex findUniqueOrThrow
   */
  export type color_hexFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the color_hex
     */
    select?: color_hexSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: color_hexInclude | null
    /**
     * Filter, which color_hex to fetch.
     */
    where: color_hexWhereUniqueInput
  }

  /**
   * color_hex base type for findFirst actions
   */
  export type color_hexFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the color_hex
     */
    select?: color_hexSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: color_hexInclude | null
    /**
     * Filter, which color_hex to fetch.
     */
    where?: color_hexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of color_hexes to fetch.
     */
    orderBy?: Enumerable<color_hexOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for color_hexes.
     */
    cursor?: color_hexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` color_hexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` color_hexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of color_hexes.
     */
    distinct?: Enumerable<Color_hexScalarFieldEnum>
  }

  /**
   * color_hex findFirst
   */
  export interface color_hexFindFirstArgs extends color_hexFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * color_hex findFirstOrThrow
   */
  export type color_hexFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the color_hex
     */
    select?: color_hexSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: color_hexInclude | null
    /**
     * Filter, which color_hex to fetch.
     */
    where?: color_hexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of color_hexes to fetch.
     */
    orderBy?: Enumerable<color_hexOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for color_hexes.
     */
    cursor?: color_hexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` color_hexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` color_hexes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of color_hexes.
     */
    distinct?: Enumerable<Color_hexScalarFieldEnum>
  }

  /**
   * color_hex findMany
   */
  export type color_hexFindManyArgs = {
    /**
     * Select specific fields to fetch from the color_hex
     */
    select?: color_hexSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: color_hexInclude | null
    /**
     * Filter, which color_hexes to fetch.
     */
    where?: color_hexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of color_hexes to fetch.
     */
    orderBy?: Enumerable<color_hexOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing color_hexes.
     */
    cursor?: color_hexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` color_hexes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` color_hexes.
     */
    skip?: number
    distinct?: Enumerable<Color_hexScalarFieldEnum>
  }

  /**
   * color_hex create
   */
  export type color_hexCreateArgs = {
    /**
     * Select specific fields to fetch from the color_hex
     */
    select?: color_hexSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: color_hexInclude | null
    /**
     * The data needed to create a color_hex.
     */
    data: XOR<color_hexCreateInput, color_hexUncheckedCreateInput>
  }

  /**
   * color_hex createMany
   */
  export type color_hexCreateManyArgs = {
    /**
     * The data used to create many color_hexes.
     */
    data: Enumerable<color_hexCreateManyInput>
    skipDuplicates?: boolean
  }

  /**
   * color_hex update
   */
  export type color_hexUpdateArgs = {
    /**
     * Select specific fields to fetch from the color_hex
     */
    select?: color_hexSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: color_hexInclude | null
    /**
     * The data needed to update a color_hex.
     */
    data: XOR<color_hexUpdateInput, color_hexUncheckedUpdateInput>
    /**
     * Choose, which color_hex to update.
     */
    where: color_hexWhereUniqueInput
  }

  /**
   * color_hex updateMany
   */
  export type color_hexUpdateManyArgs = {
    /**
     * The data used to update color_hexes.
     */
    data: XOR<
      color_hexUpdateManyMutationInput,
      color_hexUncheckedUpdateManyInput
    >
    /**
     * Filter which color_hexes to update
     */
    where?: color_hexWhereInput
  }

  /**
   * color_hex upsert
   */
  export type color_hexUpsertArgs = {
    /**
     * Select specific fields to fetch from the color_hex
     */
    select?: color_hexSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: color_hexInclude | null
    /**
     * The filter to search for the color_hex to update in case it exists.
     */
    where: color_hexWhereUniqueInput
    /**
     * In case the color_hex found by the `where` argument doesn't exist, create a new color_hex with this data.
     */
    create: XOR<color_hexCreateInput, color_hexUncheckedCreateInput>
    /**
     * In case the color_hex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<color_hexUpdateInput, color_hexUncheckedUpdateInput>
  }

  /**
   * color_hex delete
   */
  export type color_hexDeleteArgs = {
    /**
     * Select specific fields to fetch from the color_hex
     */
    select?: color_hexSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: color_hexInclude | null
    /**
     * Filter which color_hex to delete.
     */
    where: color_hexWhereUniqueInput
  }

  /**
   * color_hex deleteMany
   */
  export type color_hexDeleteManyArgs = {
    /**
     * Filter which color_hexes to delete
     */
    where?: color_hexWhereInput
  }

  /**
   * color_hex without action
   */
  export type color_hexArgs = {
    /**
     * Select specific fields to fetch from the color_hex
     */
    select?: color_hexSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: color_hexInclude | null
  }

  /**
   * Model house
   */

  export type AggregateHouse = {
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  export type HouseAvgAggregateOutputType = {
    id: number | null
  }

  export type HouseSumAggregateOutputType = {
    id: number | null
  }

  export type HouseMinAggregateOutputType = {
    id: number | null
    house_address: string | null
    has_dog: boolean | null
  }

  export type HouseMaxAggregateOutputType = {
    id: number | null
    house_address: string | null
    has_dog: boolean | null
  }

  export type HouseCountAggregateOutputType = {
    id: number
    house_address: number
    has_dog: number
    _all: number
  }

  export type HouseAvgAggregateInputType = {
    id?: true
  }

  export type HouseSumAggregateInputType = {
    id?: true
  }

  export type HouseMinAggregateInputType = {
    id?: true
    house_address?: true
    has_dog?: true
  }

  export type HouseMaxAggregateInputType = {
    id?: true
    house_address?: true
    has_dog?: true
  }

  export type HouseCountAggregateInputType = {
    id?: true
    house_address?: true
    has_dog?: true
    _all?: true
  }

  export type HouseAggregateArgs = {
    /**
     * Filter which house to aggregate.
     */
    where?: houseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of houses to fetch.
     */
    orderBy?: Enumerable<houseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: houseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned houses
     **/
    _count?: true | HouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: HouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: HouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: HouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: HouseMaxAggregateInputType
  }

  export type GetHouseAggregateType<T extends HouseAggregateArgs> = {
    [P in keyof T & keyof AggregateHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouse[P]>
      : GetScalarType<T[P], AggregateHouse[P]>
  }

  export type HouseGroupByArgs = {
    where?: houseWhereInput
    orderBy?: Enumerable<houseOrderByWithAggregationInput>
    by: HouseScalarFieldEnum[]
    having?: houseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseCountAggregateInputType | true
    _avg?: HouseAvgAggregateInputType
    _sum?: HouseSumAggregateInputType
    _min?: HouseMinAggregateInputType
    _max?: HouseMaxAggregateInputType
  }

  export type HouseGroupByOutputType = {
    id: number
    house_address: string | null
    has_dog: boolean | null
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  type GetHouseGroupByPayload<T extends HouseGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<HouseGroupByOutputType, T['by']> & {
          [P in keyof T & keyof HouseGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseGroupByOutputType[P]>
            : GetScalarType<T[P], HouseGroupByOutputType[P]>
        }
      >
    >

  export type houseSelect = {
    id?: boolean
    house_address?: boolean
    has_dog?: boolean
    house_cat?: boolean | house$house_catArgs
    toy_house?: boolean | house$toy_houseArgs
    _count?: boolean | HouseCountOutputTypeArgs
  }

  export type houseInclude = {
    house_cat?: boolean | house$house_catArgs
    toy_house?: boolean | house$toy_houseArgs
    _count?: boolean | HouseCountOutputTypeArgs
  }

  export type houseGetPayload<
    S extends boolean | null | undefined | houseArgs
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? house
    : S extends undefined
    ? never
    : S extends { include: any } & (houseArgs | houseFindManyArgs)
    ? house & {
        [P in TruthyKeys<S['include']>]: P extends 'house_cat'
          ? Array<house_catGetPayload<S['include'][P]>>
          : P extends 'toy_house'
          ? Array<toy_houseGetPayload<S['include'][P]>>
          : P extends '_count'
          ? HouseCountOutputTypeGetPayload<S['include'][P]>
          : never
      }
    : S extends { select: any } & (houseArgs | houseFindManyArgs)
    ? {
        [P in TruthyKeys<S['select']>]: P extends 'house_cat'
          ? Array<house_catGetPayload<S['select'][P]>>
          : P extends 'toy_house'
          ? Array<toy_houseGetPayload<S['select'][P]>>
          : P extends '_count'
          ? HouseCountOutputTypeGetPayload<S['select'][P]>
          : P extends keyof house
          ? house[P]
          : never
      }
    : house

  type houseCountArgs = Omit<houseFindManyArgs, 'select' | 'include'> & {
    select?: HouseCountAggregateInputType | true
  }

  export interface houseDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one House that matches the filter.
     * @param {houseFindUniqueArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends houseFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args: SelectSubset<T, houseFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'house'
    > extends True
      ? Prisma__houseClient<houseGetPayload<T>>
      : Prisma__houseClient<houseGetPayload<T> | null, null>

    /**
     * Find one House that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {houseFindUniqueOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends houseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, houseFindUniqueOrThrowArgs>
    ): Prisma__houseClient<houseGetPayload<T>>

    /**
     * Find the first House that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {houseFindFirstArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends houseFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args?: SelectSubset<T, houseFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'house'
    > extends True
      ? Prisma__houseClient<houseGetPayload<T>>
      : Prisma__houseClient<houseGetPayload<T> | null, null>

    /**
     * Find the first House that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {houseFindFirstOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends houseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, houseFindFirstOrThrowArgs>
    ): Prisma__houseClient<houseGetPayload<T>>

    /**
     * Find zero or more Houses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {houseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Houses
     * const houses = await prisma.house.findMany()
     *
     * // Get first 10 Houses
     * const houses = await prisma.house.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const houseWithIdOnly = await prisma.house.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends houseFindManyArgs>(
      args?: SelectSubset<T, houseFindManyArgs>
    ): Prisma.PrismaPromise<Array<houseGetPayload<T>>>

    /**
     * Create a House.
     * @param {houseCreateArgs} args - Arguments to create a House.
     * @example
     * // Create one House
     * const House = await prisma.house.create({
     *   data: {
     *     // ... data to create a House
     *   }
     * })
     *
     **/
    create<T extends houseCreateArgs>(
      args: SelectSubset<T, houseCreateArgs>
    ): Prisma__houseClient<houseGetPayload<T>>

    /**
     * Create many Houses.
     *     @param {houseCreateManyArgs} args - Arguments to create many Houses.
     *     @example
     *     // Create many Houses
     *     const house = await prisma.house.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends houseCreateManyArgs>(
      args?: SelectSubset<T, houseCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a House.
     * @param {houseDeleteArgs} args - Arguments to delete one House.
     * @example
     * // Delete one House
     * const House = await prisma.house.delete({
     *   where: {
     *     // ... filter to delete one House
     *   }
     * })
     *
     **/
    delete<T extends houseDeleteArgs>(
      args: SelectSubset<T, houseDeleteArgs>
    ): Prisma__houseClient<houseGetPayload<T>>

    /**
     * Update one House.
     * @param {houseUpdateArgs} args - Arguments to update one House.
     * @example
     * // Update one House
     * const house = await prisma.house.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends houseUpdateArgs>(
      args: SelectSubset<T, houseUpdateArgs>
    ): Prisma__houseClient<houseGetPayload<T>>

    /**
     * Delete zero or more Houses.
     * @param {houseDeleteManyArgs} args - Arguments to filter Houses to delete.
     * @example
     * // Delete a few Houses
     * const { count } = await prisma.house.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends houseDeleteManyArgs>(
      args?: SelectSubset<T, houseDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {houseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Houses
     * const house = await prisma.house.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends houseUpdateManyArgs>(
      args: SelectSubset<T, houseUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one House.
     * @param {houseUpsertArgs} args - Arguments to update or create a House.
     * @example
     * // Update or create a House
     * const house = await prisma.house.upsert({
     *   create: {
     *     // ... data to create a House
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the House we want to update
     *   }
     * })
     **/
    upsert<T extends houseUpsertArgs>(
      args: SelectSubset<T, houseUpsertArgs>
    ): Prisma__houseClient<houseGetPayload<T>>

    /**
     * Count the number of Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {houseCountArgs} args - Arguments to filter Houses to count.
     * @example
     * // Count the number of Houses
     * const count = await prisma.house.count({
     *   where: {
     *     // ... the filter for the Houses we want to count
     *   }
     * })
     **/
    count<T extends houseCountArgs>(
      args?: Subset<T, houseCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends HouseAggregateArgs>(
      args: Subset<T, HouseAggregateArgs>
    ): Prisma.PrismaPromise<GetHouseAggregateType<T>>

    /**
     * Group by House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends HouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseGroupByArgs['orderBy'] }
        : { orderBy?: HouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in "having" needs to be provided in "by"`
                ]
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
    >(
      args: SubsetIntersection<T, HouseGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetHouseGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for house.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__houseClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    )

    house_cat<T extends house$house_catArgs = {}>(
      args?: Subset<T, house$house_catArgs>
    ): Prisma.PrismaPromise<Array<house_catGetPayload<T>> | Null>

    toy_house<T extends house$toy_houseArgs = {}>(
      args?: Subset<T, house$toy_houseArgs>
    ): Prisma.PrismaPromise<Array<toy_houseGetPayload<T>> | Null>

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * house base type for findUnique actions
   */
  export type houseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the house
     */
    select?: houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: houseInclude | null
    /**
     * Filter, which house to fetch.
     */
    where: houseWhereUniqueInput
  }

  /**
   * house findUnique
   */
  export interface houseFindUniqueArgs extends houseFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * house findUniqueOrThrow
   */
  export type houseFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the house
     */
    select?: houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: houseInclude | null
    /**
     * Filter, which house to fetch.
     */
    where: houseWhereUniqueInput
  }

  /**
   * house base type for findFirst actions
   */
  export type houseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the house
     */
    select?: houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: houseInclude | null
    /**
     * Filter, which house to fetch.
     */
    where?: houseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of houses to fetch.
     */
    orderBy?: Enumerable<houseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for houses.
     */
    cursor?: houseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of houses.
     */
    distinct?: Enumerable<HouseScalarFieldEnum>
  }

  /**
   * house findFirst
   */
  export interface houseFindFirstArgs extends houseFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * house findFirstOrThrow
   */
  export type houseFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the house
     */
    select?: houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: houseInclude | null
    /**
     * Filter, which house to fetch.
     */
    where?: houseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of houses to fetch.
     */
    orderBy?: Enumerable<houseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for houses.
     */
    cursor?: houseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of houses.
     */
    distinct?: Enumerable<HouseScalarFieldEnum>
  }

  /**
   * house findMany
   */
  export type houseFindManyArgs = {
    /**
     * Select specific fields to fetch from the house
     */
    select?: houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: houseInclude | null
    /**
     * Filter, which houses to fetch.
     */
    where?: houseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of houses to fetch.
     */
    orderBy?: Enumerable<houseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing houses.
     */
    cursor?: houseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` houses.
     */
    skip?: number
    distinct?: Enumerable<HouseScalarFieldEnum>
  }

  /**
   * house create
   */
  export type houseCreateArgs = {
    /**
     * Select specific fields to fetch from the house
     */
    select?: houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: houseInclude | null
    /**
     * The data needed to create a house.
     */
    data: XOR<houseCreateInput, houseUncheckedCreateInput>
  }

  /**
   * house createMany
   */
  export type houseCreateManyArgs = {
    /**
     * The data used to create many houses.
     */
    data: Enumerable<houseCreateManyInput>
    skipDuplicates?: boolean
  }

  /**
   * house update
   */
  export type houseUpdateArgs = {
    /**
     * Select specific fields to fetch from the house
     */
    select?: houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: houseInclude | null
    /**
     * The data needed to update a house.
     */
    data: XOR<houseUpdateInput, houseUncheckedUpdateInput>
    /**
     * Choose, which house to update.
     */
    where: houseWhereUniqueInput
  }

  /**
   * house updateMany
   */
  export type houseUpdateManyArgs = {
    /**
     * The data used to update houses.
     */
    data: XOR<houseUpdateManyMutationInput, houseUncheckedUpdateManyInput>
    /**
     * Filter which houses to update
     */
    where?: houseWhereInput
  }

  /**
   * house upsert
   */
  export type houseUpsertArgs = {
    /**
     * Select specific fields to fetch from the house
     */
    select?: houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: houseInclude | null
    /**
     * The filter to search for the house to update in case it exists.
     */
    where: houseWhereUniqueInput
    /**
     * In case the house found by the `where` argument doesn't exist, create a new house with this data.
     */
    create: XOR<houseCreateInput, houseUncheckedCreateInput>
    /**
     * In case the house was found with the provided `where` argument, update it with this data.
     */
    update: XOR<houseUpdateInput, houseUncheckedUpdateInput>
  }

  /**
   * house delete
   */
  export type houseDeleteArgs = {
    /**
     * Select specific fields to fetch from the house
     */
    select?: houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: houseInclude | null
    /**
     * Filter which house to delete.
     */
    where: houseWhereUniqueInput
  }

  /**
   * house deleteMany
   */
  export type houseDeleteManyArgs = {
    /**
     * Filter which houses to delete
     */
    where?: houseWhereInput
  }

  /**
   * house.house_cat
   */
  export type house$house_catArgs = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
    where?: house_catWhereInput
    orderBy?: Enumerable<house_catOrderByWithRelationInput>
    cursor?: house_catWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<House_catScalarFieldEnum>
  }

  /**
   * house.toy_house
   */
  export type house$toy_houseArgs = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
    where?: toy_houseWhereInput
    orderBy?: Enumerable<toy_houseOrderByWithRelationInput>
    cursor?: toy_houseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Toy_houseScalarFieldEnum>
  }

  /**
   * house without action
   */
  export type houseArgs = {
    /**
     * Select specific fields to fetch from the house
     */
    select?: houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: houseInclude | null
  }

  /**
   * Model house_cat
   */

  export type AggregateHouse_cat = {
    _count: House_catCountAggregateOutputType | null
    _avg: House_catAvgAggregateOutputType | null
    _sum: House_catSumAggregateOutputType | null
    _min: House_catMinAggregateOutputType | null
    _max: House_catMaxAggregateOutputType | null
  }

  export type House_catAvgAggregateOutputType = {
    house_id: number | null
    cat_id: number | null
  }

  export type House_catSumAggregateOutputType = {
    house_id: number | null
    cat_id: bigint | null
  }

  export type House_catMinAggregateOutputType = {
    house_id: number | null
    cat_id: bigint | null
  }

  export type House_catMaxAggregateOutputType = {
    house_id: number | null
    cat_id: bigint | null
  }

  export type House_catCountAggregateOutputType = {
    house_id: number
    cat_id: number
    _all: number
  }

  export type House_catAvgAggregateInputType = {
    house_id?: true
    cat_id?: true
  }

  export type House_catSumAggregateInputType = {
    house_id?: true
    cat_id?: true
  }

  export type House_catMinAggregateInputType = {
    house_id?: true
    cat_id?: true
  }

  export type House_catMaxAggregateInputType = {
    house_id?: true
    cat_id?: true
  }

  export type House_catCountAggregateInputType = {
    house_id?: true
    cat_id?: true
    _all?: true
  }

  export type House_catAggregateArgs = {
    /**
     * Filter which house_cat to aggregate.
     */
    where?: house_catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of house_cats to fetch.
     */
    orderBy?: Enumerable<house_catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: house_catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` house_cats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` house_cats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned house_cats
     **/
    _count?: true | House_catCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: House_catAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: House_catSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: House_catMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: House_catMaxAggregateInputType
  }

  export type GetHouse_catAggregateType<T extends House_catAggregateArgs> = {
    [P in keyof T & keyof AggregateHouse_cat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouse_cat[P]>
      : GetScalarType<T[P], AggregateHouse_cat[P]>
  }

  export type House_catGroupByArgs = {
    where?: house_catWhereInput
    orderBy?: Enumerable<house_catOrderByWithAggregationInput>
    by: House_catScalarFieldEnum[]
    having?: house_catScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: House_catCountAggregateInputType | true
    _avg?: House_catAvgAggregateInputType
    _sum?: House_catSumAggregateInputType
    _min?: House_catMinAggregateInputType
    _max?: House_catMaxAggregateInputType
  }

  export type House_catGroupByOutputType = {
    house_id: number
    cat_id: bigint
    _count: House_catCountAggregateOutputType | null
    _avg: House_catAvgAggregateOutputType | null
    _sum: House_catSumAggregateOutputType | null
    _min: House_catMinAggregateOutputType | null
    _max: House_catMaxAggregateOutputType | null
  }

  type GetHouse_catGroupByPayload<T extends House_catGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<House_catGroupByOutputType, T['by']> & {
          [P in keyof T & keyof House_catGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], House_catGroupByOutputType[P]>
            : GetScalarType<T[P], House_catGroupByOutputType[P]>
        }
      >
    >

  export type house_catSelect = {
    house_id?: boolean
    cat_id?: boolean
    cat?: boolean | catArgs
    house?: boolean | houseArgs
  }

  export type house_catInclude = {
    cat?: boolean | catArgs
    house?: boolean | houseArgs
  }

  export type house_catGetPayload<
    S extends boolean | null | undefined | house_catArgs
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? house_cat
    : S extends undefined
    ? never
    : S extends { include: any } & (house_catArgs | house_catFindManyArgs)
    ? house_cat & {
        [P in TruthyKeys<S['include']>]: P extends 'cat'
          ? catGetPayload<S['include'][P]>
          : P extends 'house'
          ? houseGetPayload<S['include'][P]>
          : never
      }
    : S extends { select: any } & (house_catArgs | house_catFindManyArgs)
    ? {
        [P in TruthyKeys<S['select']>]: P extends 'cat'
          ? catGetPayload<S['select'][P]>
          : P extends 'house'
          ? houseGetPayload<S['select'][P]>
          : P extends keyof house_cat
          ? house_cat[P]
          : never
      }
    : house_cat

  type house_catCountArgs = Omit<
    house_catFindManyArgs,
    'select' | 'include'
  > & {
    select?: House_catCountAggregateInputType | true
  }

  export interface house_catDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one House_cat that matches the filter.
     * @param {house_catFindUniqueArgs} args - Arguments to find a House_cat
     * @example
     * // Get one House_cat
     * const house_cat = await prisma.house_cat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends house_catFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args: SelectSubset<T, house_catFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'house_cat'
    > extends True
      ? Prisma__house_catClient<house_catGetPayload<T>>
      : Prisma__house_catClient<house_catGetPayload<T> | null, null>

    /**
     * Find one House_cat that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {house_catFindUniqueOrThrowArgs} args - Arguments to find a House_cat
     * @example
     * // Get one House_cat
     * const house_cat = await prisma.house_cat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends house_catFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, house_catFindUniqueOrThrowArgs>
    ): Prisma__house_catClient<house_catGetPayload<T>>

    /**
     * Find the first House_cat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {house_catFindFirstArgs} args - Arguments to find a House_cat
     * @example
     * // Get one House_cat
     * const house_cat = await prisma.house_cat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends house_catFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args?: SelectSubset<T, house_catFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'house_cat'
    > extends True
      ? Prisma__house_catClient<house_catGetPayload<T>>
      : Prisma__house_catClient<house_catGetPayload<T> | null, null>

    /**
     * Find the first House_cat that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {house_catFindFirstOrThrowArgs} args - Arguments to find a House_cat
     * @example
     * // Get one House_cat
     * const house_cat = await prisma.house_cat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends house_catFindFirstOrThrowArgs>(
      args?: SelectSubset<T, house_catFindFirstOrThrowArgs>
    ): Prisma__house_catClient<house_catGetPayload<T>>

    /**
     * Find zero or more House_cats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {house_catFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all House_cats
     * const house_cats = await prisma.house_cat.findMany()
     *
     * // Get first 10 House_cats
     * const house_cats = await prisma.house_cat.findMany({ take: 10 })
     *
     * // Only select the `house_id`
     * const house_catWithHouse_idOnly = await prisma.house_cat.findMany({ select: { house_id: true } })
     *
     **/
    findMany<T extends house_catFindManyArgs>(
      args?: SelectSubset<T, house_catFindManyArgs>
    ): Prisma.PrismaPromise<Array<house_catGetPayload<T>>>

    /**
     * Create a House_cat.
     * @param {house_catCreateArgs} args - Arguments to create a House_cat.
     * @example
     * // Create one House_cat
     * const House_cat = await prisma.house_cat.create({
     *   data: {
     *     // ... data to create a House_cat
     *   }
     * })
     *
     **/
    create<T extends house_catCreateArgs>(
      args: SelectSubset<T, house_catCreateArgs>
    ): Prisma__house_catClient<house_catGetPayload<T>>

    /**
     * Create many House_cats.
     *     @param {house_catCreateManyArgs} args - Arguments to create many House_cats.
     *     @example
     *     // Create many House_cats
     *     const house_cat = await prisma.house_cat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends house_catCreateManyArgs>(
      args?: SelectSubset<T, house_catCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a House_cat.
     * @param {house_catDeleteArgs} args - Arguments to delete one House_cat.
     * @example
     * // Delete one House_cat
     * const House_cat = await prisma.house_cat.delete({
     *   where: {
     *     // ... filter to delete one House_cat
     *   }
     * })
     *
     **/
    delete<T extends house_catDeleteArgs>(
      args: SelectSubset<T, house_catDeleteArgs>
    ): Prisma__house_catClient<house_catGetPayload<T>>

    /**
     * Update one House_cat.
     * @param {house_catUpdateArgs} args - Arguments to update one House_cat.
     * @example
     * // Update one House_cat
     * const house_cat = await prisma.house_cat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends house_catUpdateArgs>(
      args: SelectSubset<T, house_catUpdateArgs>
    ): Prisma__house_catClient<house_catGetPayload<T>>

    /**
     * Delete zero or more House_cats.
     * @param {house_catDeleteManyArgs} args - Arguments to filter House_cats to delete.
     * @example
     * // Delete a few House_cats
     * const { count } = await prisma.house_cat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends house_catDeleteManyArgs>(
      args?: SelectSubset<T, house_catDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more House_cats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {house_catUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many House_cats
     * const house_cat = await prisma.house_cat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends house_catUpdateManyArgs>(
      args: SelectSubset<T, house_catUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one House_cat.
     * @param {house_catUpsertArgs} args - Arguments to update or create a House_cat.
     * @example
     * // Update or create a House_cat
     * const house_cat = await prisma.house_cat.upsert({
     *   create: {
     *     // ... data to create a House_cat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the House_cat we want to update
     *   }
     * })
     **/
    upsert<T extends house_catUpsertArgs>(
      args: SelectSubset<T, house_catUpsertArgs>
    ): Prisma__house_catClient<house_catGetPayload<T>>

    /**
     * Count the number of House_cats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {house_catCountArgs} args - Arguments to filter House_cats to count.
     * @example
     * // Count the number of House_cats
     * const count = await prisma.house_cat.count({
     *   where: {
     *     // ... the filter for the House_cats we want to count
     *   }
     * })
     **/
    count<T extends house_catCountArgs>(
      args?: Subset<T, house_catCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], House_catCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a House_cat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {House_catAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends House_catAggregateArgs>(
      args: Subset<T, House_catAggregateArgs>
    ): Prisma.PrismaPromise<GetHouse_catAggregateType<T>>

    /**
     * Group by House_cat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {House_catGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends House_catGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: House_catGroupByArgs['orderBy'] }
        : { orderBy?: House_catGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in "having" needs to be provided in "by"`
                ]
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
    >(
      args: SubsetIntersection<T, House_catGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetHouse_catGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for house_cat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__house_catClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    )

    cat<T extends catArgs = {}>(
      args?: Subset<T, catArgs>
    ): Prisma__catClient<catGetPayload<T> | Null>

    house<T extends houseArgs = {}>(
      args?: Subset<T, houseArgs>
    ): Prisma__houseClient<houseGetPayload<T> | Null>

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * house_cat base type for findUnique actions
   */
  export type house_catFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
    /**
     * Filter, which house_cat to fetch.
     */
    where: house_catWhereUniqueInput
  }

  /**
   * house_cat findUnique
   */
  export interface house_catFindUniqueArgs extends house_catFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * house_cat findUniqueOrThrow
   */
  export type house_catFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
    /**
     * Filter, which house_cat to fetch.
     */
    where: house_catWhereUniqueInput
  }

  /**
   * house_cat base type for findFirst actions
   */
  export type house_catFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
    /**
     * Filter, which house_cat to fetch.
     */
    where?: house_catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of house_cats to fetch.
     */
    orderBy?: Enumerable<house_catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for house_cats.
     */
    cursor?: house_catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` house_cats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` house_cats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of house_cats.
     */
    distinct?: Enumerable<House_catScalarFieldEnum>
  }

  /**
   * house_cat findFirst
   */
  export interface house_catFindFirstArgs extends house_catFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * house_cat findFirstOrThrow
   */
  export type house_catFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
    /**
     * Filter, which house_cat to fetch.
     */
    where?: house_catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of house_cats to fetch.
     */
    orderBy?: Enumerable<house_catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for house_cats.
     */
    cursor?: house_catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` house_cats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` house_cats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of house_cats.
     */
    distinct?: Enumerable<House_catScalarFieldEnum>
  }

  /**
   * house_cat findMany
   */
  export type house_catFindManyArgs = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
    /**
     * Filter, which house_cats to fetch.
     */
    where?: house_catWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of house_cats to fetch.
     */
    orderBy?: Enumerable<house_catOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing house_cats.
     */
    cursor?: house_catWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` house_cats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` house_cats.
     */
    skip?: number
    distinct?: Enumerable<House_catScalarFieldEnum>
  }

  /**
   * house_cat create
   */
  export type house_catCreateArgs = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
    /**
     * The data needed to create a house_cat.
     */
    data: XOR<house_catCreateInput, house_catUncheckedCreateInput>
  }

  /**
   * house_cat createMany
   */
  export type house_catCreateManyArgs = {
    /**
     * The data used to create many house_cats.
     */
    data: Enumerable<house_catCreateManyInput>
    skipDuplicates?: boolean
  }

  /**
   * house_cat update
   */
  export type house_catUpdateArgs = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
    /**
     * The data needed to update a house_cat.
     */
    data: XOR<house_catUpdateInput, house_catUncheckedUpdateInput>
    /**
     * Choose, which house_cat to update.
     */
    where: house_catWhereUniqueInput
  }

  /**
   * house_cat updateMany
   */
  export type house_catUpdateManyArgs = {
    /**
     * The data used to update house_cats.
     */
    data: XOR<
      house_catUpdateManyMutationInput,
      house_catUncheckedUpdateManyInput
    >
    /**
     * Filter which house_cats to update
     */
    where?: house_catWhereInput
  }

  /**
   * house_cat upsert
   */
  export type house_catUpsertArgs = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
    /**
     * The filter to search for the house_cat to update in case it exists.
     */
    where: house_catWhereUniqueInput
    /**
     * In case the house_cat found by the `where` argument doesn't exist, create a new house_cat with this data.
     */
    create: XOR<house_catCreateInput, house_catUncheckedCreateInput>
    /**
     * In case the house_cat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<house_catUpdateInput, house_catUncheckedUpdateInput>
  }

  /**
   * house_cat delete
   */
  export type house_catDeleteArgs = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
    /**
     * Filter which house_cat to delete.
     */
    where: house_catWhereUniqueInput
  }

  /**
   * house_cat deleteMany
   */
  export type house_catDeleteManyArgs = {
    /**
     * Filter which house_cats to delete
     */
    where?: house_catWhereInput
  }

  /**
   * house_cat without action
   */
  export type house_catArgs = {
    /**
     * Select specific fields to fetch from the house_cat
     */
    select?: house_catSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: house_catInclude | null
  }

  /**
   * Model toy
   */

  export type AggregateToy = {
    _count: ToyCountAggregateOutputType | null
    _avg: ToyAvgAggregateOutputType | null
    _sum: ToySumAggregateOutputType | null
    _min: ToyMinAggregateOutputType | null
    _max: ToyMaxAggregateOutputType | null
  }

  export type ToyAvgAggregateOutputType = {
    id: number | null
    toys_producer_id: number | null
    price: Decimal | null
  }

  export type ToySumAggregateOutputType = {
    id: number | null
    toys_producer_id: number | null
    price: Decimal | null
  }

  export type ToyMinAggregateOutputType = {
    id: number | null
    toys_producer_id: number | null
    toy_name: string | null
    barcode: string | null
    price: Decimal | null
    currency: string | null
    naughty: string | null
    date_introduced: Date | null
  }

  export type ToyMaxAggregateOutputType = {
    id: number | null
    toys_producer_id: number | null
    toy_name: string | null
    barcode: string | null
    price: Decimal | null
    currency: string | null
    naughty: string | null
    date_introduced: Date | null
  }

  export type ToyCountAggregateOutputType = {
    id: number
    toys_producer_id: number
    toy_name: number
    barcode: number
    price: number
    currency: number
    naughty: number
    date_introduced: number
    _all: number
  }

  export type ToyAvgAggregateInputType = {
    id?: true
    toys_producer_id?: true
    price?: true
  }

  export type ToySumAggregateInputType = {
    id?: true
    toys_producer_id?: true
    price?: true
  }

  export type ToyMinAggregateInputType = {
    id?: true
    toys_producer_id?: true
    toy_name?: true
    barcode?: true
    price?: true
    currency?: true
    naughty?: true
    date_introduced?: true
  }

  export type ToyMaxAggregateInputType = {
    id?: true
    toys_producer_id?: true
    toy_name?: true
    barcode?: true
    price?: true
    currency?: true
    naughty?: true
    date_introduced?: true
  }

  export type ToyCountAggregateInputType = {
    id?: true
    toys_producer_id?: true
    toy_name?: true
    barcode?: true
    price?: true
    currency?: true
    naughty?: true
    date_introduced?: true
    _all?: true
  }

  export type ToyAggregateArgs = {
    /**
     * Filter which toy to aggregate.
     */
    where?: toyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toys to fetch.
     */
    orderBy?: Enumerable<toyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: toyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned toys
     **/
    _count?: true | ToyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ToyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ToySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ToyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ToyMaxAggregateInputType
  }

  export type GetToyAggregateType<T extends ToyAggregateArgs> = {
    [P in keyof T & keyof AggregateToy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToy[P]>
      : GetScalarType<T[P], AggregateToy[P]>
  }

  export type ToyGroupByArgs = {
    where?: toyWhereInput
    orderBy?: Enumerable<toyOrderByWithAggregationInput>
    by: ToyScalarFieldEnum[]
    having?: toyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToyCountAggregateInputType | true
    _avg?: ToyAvgAggregateInputType
    _sum?: ToySumAggregateInputType
    _min?: ToyMinAggregateInputType
    _max?: ToyMaxAggregateInputType
  }

  export type ToyGroupByOutputType = {
    id: number
    toys_producer_id: number | null
    toy_name: string
    barcode: string
    price: Decimal
    currency: string
    naughty: string | null
    date_introduced: Date
    _count: ToyCountAggregateOutputType | null
    _avg: ToyAvgAggregateOutputType | null
    _sum: ToySumAggregateOutputType | null
    _min: ToyMinAggregateOutputType | null
    _max: ToyMaxAggregateOutputType | null
  }

  type GetToyGroupByPayload<T extends ToyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ToyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ToyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ToyGroupByOutputType[P]>
          : GetScalarType<T[P], ToyGroupByOutputType[P]>
      }
    >
  >

  export type toySelect = {
    id?: boolean
    toys_producer_id?: boolean
    toy_name?: boolean
    barcode?: boolean
    price?: boolean
    currency?: boolean
    naughty?: boolean
    date_introduced?: boolean
    toys_producer?: boolean | toys_producerArgs
    toy_house?: boolean | toy$toy_houseArgs
    _count?: boolean | ToyCountOutputTypeArgs
  }

  export type toyInclude = {
    toys_producer?: boolean | toys_producerArgs
    toy_house?: boolean | toy$toy_houseArgs
    _count?: boolean | ToyCountOutputTypeArgs
  }

  export type toyGetPayload<S extends boolean | null | undefined | toyArgs> =
    S extends { select: any; include: any }
      ? 'Please either choose `select` or `include`'
      : S extends true
      ? toy
      : S extends undefined
      ? never
      : S extends { include: any } & (toyArgs | toyFindManyArgs)
      ? toy & {
          [P in TruthyKeys<S['include']>]: P extends 'toys_producer'
            ? toys_producerGetPayload<S['include'][P]> | null
            : P extends 'toy_house'
            ? Array<toy_houseGetPayload<S['include'][P]>>
            : P extends '_count'
            ? ToyCountOutputTypeGetPayload<S['include'][P]>
            : never
        }
      : S extends { select: any } & (toyArgs | toyFindManyArgs)
      ? {
          [P in TruthyKeys<S['select']>]: P extends 'toys_producer'
            ? toys_producerGetPayload<S['select'][P]> | null
            : P extends 'toy_house'
            ? Array<toy_houseGetPayload<S['select'][P]>>
            : P extends '_count'
            ? ToyCountOutputTypeGetPayload<S['select'][P]>
            : P extends keyof toy
            ? toy[P]
            : never
        }
      : toy

  type toyCountArgs = Omit<toyFindManyArgs, 'select' | 'include'> & {
    select?: ToyCountAggregateInputType | true
  }

  export interface toyDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one Toy that matches the filter.
     * @param {toyFindUniqueArgs} args - Arguments to find a Toy
     * @example
     * // Get one Toy
     * const toy = await prisma.toy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends toyFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args: SelectSubset<T, toyFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'toy'
    > extends True
      ? Prisma__toyClient<toyGetPayload<T>>
      : Prisma__toyClient<toyGetPayload<T> | null, null>

    /**
     * Find one Toy that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {toyFindUniqueOrThrowArgs} args - Arguments to find a Toy
     * @example
     * // Get one Toy
     * const toy = await prisma.toy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends toyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, toyFindUniqueOrThrowArgs>
    ): Prisma__toyClient<toyGetPayload<T>>

    /**
     * Find the first Toy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toyFindFirstArgs} args - Arguments to find a Toy
     * @example
     * // Get one Toy
     * const toy = await prisma.toy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends toyFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args?: SelectSubset<T, toyFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'toy'
    > extends True
      ? Prisma__toyClient<toyGetPayload<T>>
      : Prisma__toyClient<toyGetPayload<T> | null, null>

    /**
     * Find the first Toy that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toyFindFirstOrThrowArgs} args - Arguments to find a Toy
     * @example
     * // Get one Toy
     * const toy = await prisma.toy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends toyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, toyFindFirstOrThrowArgs>
    ): Prisma__toyClient<toyGetPayload<T>>

    /**
     * Find zero or more Toys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Toys
     * const toys = await prisma.toy.findMany()
     *
     * // Get first 10 Toys
     * const toys = await prisma.toy.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const toyWithIdOnly = await prisma.toy.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends toyFindManyArgs>(
      args?: SelectSubset<T, toyFindManyArgs>
    ): Prisma.PrismaPromise<Array<toyGetPayload<T>>>

    /**
     * Create a Toy.
     * @param {toyCreateArgs} args - Arguments to create a Toy.
     * @example
     * // Create one Toy
     * const Toy = await prisma.toy.create({
     *   data: {
     *     // ... data to create a Toy
     *   }
     * })
     *
     **/
    create<T extends toyCreateArgs>(
      args: SelectSubset<T, toyCreateArgs>
    ): Prisma__toyClient<toyGetPayload<T>>

    /**
     * Create many Toys.
     *     @param {toyCreateManyArgs} args - Arguments to create many Toys.
     *     @example
     *     // Create many Toys
     *     const toy = await prisma.toy.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends toyCreateManyArgs>(
      args?: SelectSubset<T, toyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Toy.
     * @param {toyDeleteArgs} args - Arguments to delete one Toy.
     * @example
     * // Delete one Toy
     * const Toy = await prisma.toy.delete({
     *   where: {
     *     // ... filter to delete one Toy
     *   }
     * })
     *
     **/
    delete<T extends toyDeleteArgs>(
      args: SelectSubset<T, toyDeleteArgs>
    ): Prisma__toyClient<toyGetPayload<T>>

    /**
     * Update one Toy.
     * @param {toyUpdateArgs} args - Arguments to update one Toy.
     * @example
     * // Update one Toy
     * const toy = await prisma.toy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends toyUpdateArgs>(
      args: SelectSubset<T, toyUpdateArgs>
    ): Prisma__toyClient<toyGetPayload<T>>

    /**
     * Delete zero or more Toys.
     * @param {toyDeleteManyArgs} args - Arguments to filter Toys to delete.
     * @example
     * // Delete a few Toys
     * const { count } = await prisma.toy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends toyDeleteManyArgs>(
      args?: SelectSubset<T, toyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Toys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Toys
     * const toy = await prisma.toy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends toyUpdateManyArgs>(
      args: SelectSubset<T, toyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Toy.
     * @param {toyUpsertArgs} args - Arguments to update or create a Toy.
     * @example
     * // Update or create a Toy
     * const toy = await prisma.toy.upsert({
     *   create: {
     *     // ... data to create a Toy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Toy we want to update
     *   }
     * })
     **/
    upsert<T extends toyUpsertArgs>(
      args: SelectSubset<T, toyUpsertArgs>
    ): Prisma__toyClient<toyGetPayload<T>>

    /**
     * Count the number of Toys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toyCountArgs} args - Arguments to filter Toys to count.
     * @example
     * // Count the number of Toys
     * const count = await prisma.toy.count({
     *   where: {
     *     // ... the filter for the Toys we want to count
     *   }
     * })
     **/
    count<T extends toyCountArgs>(
      args?: Subset<T, toyCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Toy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ToyAggregateArgs>(
      args: Subset<T, ToyAggregateArgs>
    ): Prisma.PrismaPromise<GetToyAggregateType<T>>

    /**
     * Group by Toy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ToyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToyGroupByArgs['orderBy'] }
        : { orderBy?: ToyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in "having" needs to be provided in "by"`
                ]
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
    >(
      args: SubsetIntersection<T, ToyGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetToyGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for toy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__toyClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    )

    toys_producer<T extends toys_producerArgs = {}>(
      args?: Subset<T, toys_producerArgs>
    ): Prisma__toys_producerClient<toys_producerGetPayload<T> | Null>

    toy_house<T extends toy$toy_houseArgs = {}>(
      args?: Subset<T, toy$toy_houseArgs>
    ): Prisma.PrismaPromise<Array<toy_houseGetPayload<T>> | Null>

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * toy base type for findUnique actions
   */
  export type toyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the toy
     */
    select?: toySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toyInclude | null
    /**
     * Filter, which toy to fetch.
     */
    where: toyWhereUniqueInput
  }

  /**
   * toy findUnique
   */
  export interface toyFindUniqueArgs extends toyFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * toy findUniqueOrThrow
   */
  export type toyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the toy
     */
    select?: toySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toyInclude | null
    /**
     * Filter, which toy to fetch.
     */
    where: toyWhereUniqueInput
  }

  /**
   * toy base type for findFirst actions
   */
  export type toyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the toy
     */
    select?: toySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toyInclude | null
    /**
     * Filter, which toy to fetch.
     */
    where?: toyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toys to fetch.
     */
    orderBy?: Enumerable<toyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for toys.
     */
    cursor?: toyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of toys.
     */
    distinct?: Enumerable<ToyScalarFieldEnum>
  }

  /**
   * toy findFirst
   */
  export interface toyFindFirstArgs extends toyFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * toy findFirstOrThrow
   */
  export type toyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the toy
     */
    select?: toySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toyInclude | null
    /**
     * Filter, which toy to fetch.
     */
    where?: toyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toys to fetch.
     */
    orderBy?: Enumerable<toyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for toys.
     */
    cursor?: toyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of toys.
     */
    distinct?: Enumerable<ToyScalarFieldEnum>
  }

  /**
   * toy findMany
   */
  export type toyFindManyArgs = {
    /**
     * Select specific fields to fetch from the toy
     */
    select?: toySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toyInclude | null
    /**
     * Filter, which toys to fetch.
     */
    where?: toyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toys to fetch.
     */
    orderBy?: Enumerable<toyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing toys.
     */
    cursor?: toyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toys.
     */
    skip?: number
    distinct?: Enumerable<ToyScalarFieldEnum>
  }

  /**
   * toy create
   */
  export type toyCreateArgs = {
    /**
     * Select specific fields to fetch from the toy
     */
    select?: toySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toyInclude | null
    /**
     * The data needed to create a toy.
     */
    data: XOR<toyCreateInput, toyUncheckedCreateInput>
  }

  /**
   * toy createMany
   */
  export type toyCreateManyArgs = {
    /**
     * The data used to create many toys.
     */
    data: Enumerable<toyCreateManyInput>
    skipDuplicates?: boolean
  }

  /**
   * toy update
   */
  export type toyUpdateArgs = {
    /**
     * Select specific fields to fetch from the toy
     */
    select?: toySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toyInclude | null
    /**
     * The data needed to update a toy.
     */
    data: XOR<toyUpdateInput, toyUncheckedUpdateInput>
    /**
     * Choose, which toy to update.
     */
    where: toyWhereUniqueInput
  }

  /**
   * toy updateMany
   */
  export type toyUpdateManyArgs = {
    /**
     * The data used to update toys.
     */
    data: XOR<toyUpdateManyMutationInput, toyUncheckedUpdateManyInput>
    /**
     * Filter which toys to update
     */
    where?: toyWhereInput
  }

  /**
   * toy upsert
   */
  export type toyUpsertArgs = {
    /**
     * Select specific fields to fetch from the toy
     */
    select?: toySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toyInclude | null
    /**
     * The filter to search for the toy to update in case it exists.
     */
    where: toyWhereUniqueInput
    /**
     * In case the toy found by the `where` argument doesn't exist, create a new toy with this data.
     */
    create: XOR<toyCreateInput, toyUncheckedCreateInput>
    /**
     * In case the toy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<toyUpdateInput, toyUncheckedUpdateInput>
  }

  /**
   * toy delete
   */
  export type toyDeleteArgs = {
    /**
     * Select specific fields to fetch from the toy
     */
    select?: toySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toyInclude | null
    /**
     * Filter which toy to delete.
     */
    where: toyWhereUniqueInput
  }

  /**
   * toy deleteMany
   */
  export type toyDeleteManyArgs = {
    /**
     * Filter which toys to delete
     */
    where?: toyWhereInput
  }

  /**
   * toy.toy_house
   */
  export type toy$toy_houseArgs = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
    where?: toy_houseWhereInput
    orderBy?: Enumerable<toy_houseOrderByWithRelationInput>
    cursor?: toy_houseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Toy_houseScalarFieldEnum>
  }

  /**
   * toy without action
   */
  export type toyArgs = {
    /**
     * Select specific fields to fetch from the toy
     */
    select?: toySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toyInclude | null
  }

  /**
   * Model toy_house
   */

  export type AggregateToy_house = {
    _count: Toy_houseCountAggregateOutputType | null
    _avg: Toy_houseAvgAggregateOutputType | null
    _sum: Toy_houseSumAggregateOutputType | null
    _min: Toy_houseMinAggregateOutputType | null
    _max: Toy_houseMaxAggregateOutputType | null
  }

  export type Toy_houseAvgAggregateOutputType = {
    toy_id: number | null
    house_id: number | null
    amount: number | null
  }

  export type Toy_houseSumAggregateOutputType = {
    toy_id: number | null
    house_id: number | null
    amount: number | null
  }

  export type Toy_houseMinAggregateOutputType = {
    toy_id: number | null
    house_id: number | null
    amount: number | null
  }

  export type Toy_houseMaxAggregateOutputType = {
    toy_id: number | null
    house_id: number | null
    amount: number | null
  }

  export type Toy_houseCountAggregateOutputType = {
    toy_id: number
    house_id: number
    amount: number
    _all: number
  }

  export type Toy_houseAvgAggregateInputType = {
    toy_id?: true
    house_id?: true
    amount?: true
  }

  export type Toy_houseSumAggregateInputType = {
    toy_id?: true
    house_id?: true
    amount?: true
  }

  export type Toy_houseMinAggregateInputType = {
    toy_id?: true
    house_id?: true
    amount?: true
  }

  export type Toy_houseMaxAggregateInputType = {
    toy_id?: true
    house_id?: true
    amount?: true
  }

  export type Toy_houseCountAggregateInputType = {
    toy_id?: true
    house_id?: true
    amount?: true
    _all?: true
  }

  export type Toy_houseAggregateArgs = {
    /**
     * Filter which toy_house to aggregate.
     */
    where?: toy_houseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toy_houses to fetch.
     */
    orderBy?: Enumerable<toy_houseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: toy_houseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toy_houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toy_houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned toy_houses
     **/
    _count?: true | Toy_houseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Toy_houseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Toy_houseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Toy_houseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Toy_houseMaxAggregateInputType
  }

  export type GetToy_houseAggregateType<T extends Toy_houseAggregateArgs> = {
    [P in keyof T & keyof AggregateToy_house]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToy_house[P]>
      : GetScalarType<T[P], AggregateToy_house[P]>
  }

  export type Toy_houseGroupByArgs = {
    where?: toy_houseWhereInput
    orderBy?: Enumerable<toy_houseOrderByWithAggregationInput>
    by: Toy_houseScalarFieldEnum[]
    having?: toy_houseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Toy_houseCountAggregateInputType | true
    _avg?: Toy_houseAvgAggregateInputType
    _sum?: Toy_houseSumAggregateInputType
    _min?: Toy_houseMinAggregateInputType
    _max?: Toy_houseMaxAggregateInputType
  }

  export type Toy_houseGroupByOutputType = {
    toy_id: number
    house_id: number
    amount: number
    _count: Toy_houseCountAggregateOutputType | null
    _avg: Toy_houseAvgAggregateOutputType | null
    _sum: Toy_houseSumAggregateOutputType | null
    _min: Toy_houseMinAggregateOutputType | null
    _max: Toy_houseMaxAggregateOutputType | null
  }

  type GetToy_houseGroupByPayload<T extends Toy_houseGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<Toy_houseGroupByOutputType, T['by']> & {
          [P in keyof T & keyof Toy_houseGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Toy_houseGroupByOutputType[P]>
            : GetScalarType<T[P], Toy_houseGroupByOutputType[P]>
        }
      >
    >

  export type toy_houseSelect = {
    toy_id?: boolean
    house_id?: boolean
    amount?: boolean
    house?: boolean | houseArgs
    toy?: boolean | toyArgs
  }

  export type toy_houseInclude = {
    house?: boolean | houseArgs
    toy?: boolean | toyArgs
  }

  export type toy_houseGetPayload<
    S extends boolean | null | undefined | toy_houseArgs
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? toy_house
    : S extends undefined
    ? never
    : S extends { include: any } & (toy_houseArgs | toy_houseFindManyArgs)
    ? toy_house & {
        [P in TruthyKeys<S['include']>]: P extends 'house'
          ? houseGetPayload<S['include'][P]>
          : P extends 'toy'
          ? toyGetPayload<S['include'][P]>
          : never
      }
    : S extends { select: any } & (toy_houseArgs | toy_houseFindManyArgs)
    ? {
        [P in TruthyKeys<S['select']>]: P extends 'house'
          ? houseGetPayload<S['select'][P]>
          : P extends 'toy'
          ? toyGetPayload<S['select'][P]>
          : P extends keyof toy_house
          ? toy_house[P]
          : never
      }
    : toy_house

  type toy_houseCountArgs = Omit<
    toy_houseFindManyArgs,
    'select' | 'include'
  > & {
    select?: Toy_houseCountAggregateInputType | true
  }

  export interface toy_houseDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one Toy_house that matches the filter.
     * @param {toy_houseFindUniqueArgs} args - Arguments to find a Toy_house
     * @example
     * // Get one Toy_house
     * const toy_house = await prisma.toy_house.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends toy_houseFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args: SelectSubset<T, toy_houseFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'toy_house'
    > extends True
      ? Prisma__toy_houseClient<toy_houseGetPayload<T>>
      : Prisma__toy_houseClient<toy_houseGetPayload<T> | null, null>

    /**
     * Find one Toy_house that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {toy_houseFindUniqueOrThrowArgs} args - Arguments to find a Toy_house
     * @example
     * // Get one Toy_house
     * const toy_house = await prisma.toy_house.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends toy_houseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, toy_houseFindUniqueOrThrowArgs>
    ): Prisma__toy_houseClient<toy_houseGetPayload<T>>

    /**
     * Find the first Toy_house that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toy_houseFindFirstArgs} args - Arguments to find a Toy_house
     * @example
     * // Get one Toy_house
     * const toy_house = await prisma.toy_house.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends toy_houseFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args?: SelectSubset<T, toy_houseFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'toy_house'
    > extends True
      ? Prisma__toy_houseClient<toy_houseGetPayload<T>>
      : Prisma__toy_houseClient<toy_houseGetPayload<T> | null, null>

    /**
     * Find the first Toy_house that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toy_houseFindFirstOrThrowArgs} args - Arguments to find a Toy_house
     * @example
     * // Get one Toy_house
     * const toy_house = await prisma.toy_house.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends toy_houseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, toy_houseFindFirstOrThrowArgs>
    ): Prisma__toy_houseClient<toy_houseGetPayload<T>>

    /**
     * Find zero or more Toy_houses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toy_houseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Toy_houses
     * const toy_houses = await prisma.toy_house.findMany()
     *
     * // Get first 10 Toy_houses
     * const toy_houses = await prisma.toy_house.findMany({ take: 10 })
     *
     * // Only select the `toy_id`
     * const toy_houseWithToy_idOnly = await prisma.toy_house.findMany({ select: { toy_id: true } })
     *
     **/
    findMany<T extends toy_houseFindManyArgs>(
      args?: SelectSubset<T, toy_houseFindManyArgs>
    ): Prisma.PrismaPromise<Array<toy_houseGetPayload<T>>>

    /**
     * Create a Toy_house.
     * @param {toy_houseCreateArgs} args - Arguments to create a Toy_house.
     * @example
     * // Create one Toy_house
     * const Toy_house = await prisma.toy_house.create({
     *   data: {
     *     // ... data to create a Toy_house
     *   }
     * })
     *
     **/
    create<T extends toy_houseCreateArgs>(
      args: SelectSubset<T, toy_houseCreateArgs>
    ): Prisma__toy_houseClient<toy_houseGetPayload<T>>

    /**
     * Create many Toy_houses.
     *     @param {toy_houseCreateManyArgs} args - Arguments to create many Toy_houses.
     *     @example
     *     // Create many Toy_houses
     *     const toy_house = await prisma.toy_house.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends toy_houseCreateManyArgs>(
      args?: SelectSubset<T, toy_houseCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Toy_house.
     * @param {toy_houseDeleteArgs} args - Arguments to delete one Toy_house.
     * @example
     * // Delete one Toy_house
     * const Toy_house = await prisma.toy_house.delete({
     *   where: {
     *     // ... filter to delete one Toy_house
     *   }
     * })
     *
     **/
    delete<T extends toy_houseDeleteArgs>(
      args: SelectSubset<T, toy_houseDeleteArgs>
    ): Prisma__toy_houseClient<toy_houseGetPayload<T>>

    /**
     * Update one Toy_house.
     * @param {toy_houseUpdateArgs} args - Arguments to update one Toy_house.
     * @example
     * // Update one Toy_house
     * const toy_house = await prisma.toy_house.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends toy_houseUpdateArgs>(
      args: SelectSubset<T, toy_houseUpdateArgs>
    ): Prisma__toy_houseClient<toy_houseGetPayload<T>>

    /**
     * Delete zero or more Toy_houses.
     * @param {toy_houseDeleteManyArgs} args - Arguments to filter Toy_houses to delete.
     * @example
     * // Delete a few Toy_houses
     * const { count } = await prisma.toy_house.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends toy_houseDeleteManyArgs>(
      args?: SelectSubset<T, toy_houseDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Toy_houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toy_houseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Toy_houses
     * const toy_house = await prisma.toy_house.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends toy_houseUpdateManyArgs>(
      args: SelectSubset<T, toy_houseUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Toy_house.
     * @param {toy_houseUpsertArgs} args - Arguments to update or create a Toy_house.
     * @example
     * // Update or create a Toy_house
     * const toy_house = await prisma.toy_house.upsert({
     *   create: {
     *     // ... data to create a Toy_house
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Toy_house we want to update
     *   }
     * })
     **/
    upsert<T extends toy_houseUpsertArgs>(
      args: SelectSubset<T, toy_houseUpsertArgs>
    ): Prisma__toy_houseClient<toy_houseGetPayload<T>>

    /**
     * Count the number of Toy_houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toy_houseCountArgs} args - Arguments to filter Toy_houses to count.
     * @example
     * // Count the number of Toy_houses
     * const count = await prisma.toy_house.count({
     *   where: {
     *     // ... the filter for the Toy_houses we want to count
     *   }
     * })
     **/
    count<T extends toy_houseCountArgs>(
      args?: Subset<T, toy_houseCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Toy_houseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Toy_house.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Toy_houseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Toy_houseAggregateArgs>(
      args: Subset<T, Toy_houseAggregateArgs>
    ): Prisma.PrismaPromise<GetToy_houseAggregateType<T>>

    /**
     * Group by Toy_house.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Toy_houseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends Toy_houseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Toy_houseGroupByArgs['orderBy'] }
        : { orderBy?: Toy_houseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in "having" needs to be provided in "by"`
                ]
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
    >(
      args: SubsetIntersection<T, Toy_houseGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetToy_houseGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for toy_house.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__toy_houseClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    )

    house<T extends houseArgs = {}>(
      args?: Subset<T, houseArgs>
    ): Prisma__houseClient<houseGetPayload<T> | Null>

    toy<T extends toyArgs = {}>(
      args?: Subset<T, toyArgs>
    ): Prisma__toyClient<toyGetPayload<T> | Null>

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * toy_house base type for findUnique actions
   */
  export type toy_houseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
    /**
     * Filter, which toy_house to fetch.
     */
    where: toy_houseWhereUniqueInput
  }

  /**
   * toy_house findUnique
   */
  export interface toy_houseFindUniqueArgs extends toy_houseFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * toy_house findUniqueOrThrow
   */
  export type toy_houseFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
    /**
     * Filter, which toy_house to fetch.
     */
    where: toy_houseWhereUniqueInput
  }

  /**
   * toy_house base type for findFirst actions
   */
  export type toy_houseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
    /**
     * Filter, which toy_house to fetch.
     */
    where?: toy_houseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toy_houses to fetch.
     */
    orderBy?: Enumerable<toy_houseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for toy_houses.
     */
    cursor?: toy_houseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toy_houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toy_houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of toy_houses.
     */
    distinct?: Enumerable<Toy_houseScalarFieldEnum>
  }

  /**
   * toy_house findFirst
   */
  export interface toy_houseFindFirstArgs extends toy_houseFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * toy_house findFirstOrThrow
   */
  export type toy_houseFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
    /**
     * Filter, which toy_house to fetch.
     */
    where?: toy_houseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toy_houses to fetch.
     */
    orderBy?: Enumerable<toy_houseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for toy_houses.
     */
    cursor?: toy_houseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toy_houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toy_houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of toy_houses.
     */
    distinct?: Enumerable<Toy_houseScalarFieldEnum>
  }

  /**
   * toy_house findMany
   */
  export type toy_houseFindManyArgs = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
    /**
     * Filter, which toy_houses to fetch.
     */
    where?: toy_houseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toy_houses to fetch.
     */
    orderBy?: Enumerable<toy_houseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing toy_houses.
     */
    cursor?: toy_houseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toy_houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toy_houses.
     */
    skip?: number
    distinct?: Enumerable<Toy_houseScalarFieldEnum>
  }

  /**
   * toy_house create
   */
  export type toy_houseCreateArgs = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
    /**
     * The data needed to create a toy_house.
     */
    data: XOR<toy_houseCreateInput, toy_houseUncheckedCreateInput>
  }

  /**
   * toy_house createMany
   */
  export type toy_houseCreateManyArgs = {
    /**
     * The data used to create many toy_houses.
     */
    data: Enumerable<toy_houseCreateManyInput>
    skipDuplicates?: boolean
  }

  /**
   * toy_house update
   */
  export type toy_houseUpdateArgs = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
    /**
     * The data needed to update a toy_house.
     */
    data: XOR<toy_houseUpdateInput, toy_houseUncheckedUpdateInput>
    /**
     * Choose, which toy_house to update.
     */
    where: toy_houseWhereUniqueInput
  }

  /**
   * toy_house updateMany
   */
  export type toy_houseUpdateManyArgs = {
    /**
     * The data used to update toy_houses.
     */
    data: XOR<
      toy_houseUpdateManyMutationInput,
      toy_houseUncheckedUpdateManyInput
    >
    /**
     * Filter which toy_houses to update
     */
    where?: toy_houseWhereInput
  }

  /**
   * toy_house upsert
   */
  export type toy_houseUpsertArgs = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
    /**
     * The filter to search for the toy_house to update in case it exists.
     */
    where: toy_houseWhereUniqueInput
    /**
     * In case the toy_house found by the `where` argument doesn't exist, create a new toy_house with this data.
     */
    create: XOR<toy_houseCreateInput, toy_houseUncheckedCreateInput>
    /**
     * In case the toy_house was found with the provided `where` argument, update it with this data.
     */
    update: XOR<toy_houseUpdateInput, toy_houseUncheckedUpdateInput>
  }

  /**
   * toy_house delete
   */
  export type toy_houseDeleteArgs = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
    /**
     * Filter which toy_house to delete.
     */
    where: toy_houseWhereUniqueInput
  }

  /**
   * toy_house deleteMany
   */
  export type toy_houseDeleteManyArgs = {
    /**
     * Filter which toy_houses to delete
     */
    where?: toy_houseWhereInput
  }

  /**
   * toy_house without action
   */
  export type toy_houseArgs = {
    /**
     * Select specific fields to fetch from the toy_house
     */
    select?: toy_houseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toy_houseInclude | null
  }

  /**
   * Model toys_producer
   */

  export type AggregateToys_producer = {
    _count: Toys_producerCountAggregateOutputType | null
    _avg: Toys_producerAvgAggregateOutputType | null
    _sum: Toys_producerSumAggregateOutputType | null
    _min: Toys_producerMinAggregateOutputType | null
    _max: Toys_producerMaxAggregateOutputType | null
  }

  export type Toys_producerAvgAggregateOutputType = {
    id: number | null
  }

  export type Toys_producerSumAggregateOutputType = {
    id: number | null
  }

  export type Toys_producerMinAggregateOutputType = {
    id: number | null
  }

  export type Toys_producerMaxAggregateOutputType = {
    id: number | null
  }

  export type Toys_producerCountAggregateOutputType = {
    id: number
    stock_info: number
    hq_location: number
    _all: number
  }

  export type Toys_producerAvgAggregateInputType = {
    id?: true
  }

  export type Toys_producerSumAggregateInputType = {
    id?: true
  }

  export type Toys_producerMinAggregateInputType = {
    id?: true
  }

  export type Toys_producerMaxAggregateInputType = {
    id?: true
  }

  export type Toys_producerCountAggregateInputType = {
    id?: true
    stock_info?: true
    hq_location?: true
    _all?: true
  }

  export type Toys_producerAggregateArgs = {
    /**
     * Filter which toys_producer to aggregate.
     */
    where?: toys_producerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toys_producers to fetch.
     */
    orderBy?: Enumerable<toys_producerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: toys_producerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toys_producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toys_producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned toys_producers
     **/
    _count?: true | Toys_producerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Toys_producerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Toys_producerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Toys_producerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Toys_producerMaxAggregateInputType
  }

  export type GetToys_producerAggregateType<
    T extends Toys_producerAggregateArgs
  > = {
    [P in keyof T & keyof AggregateToys_producer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToys_producer[P]>
      : GetScalarType<T[P], AggregateToys_producer[P]>
  }

  export type Toys_producerGroupByArgs = {
    where?: toys_producerWhereInput
    orderBy?: Enumerable<toys_producerOrderByWithAggregationInput>
    by: Toys_producerScalarFieldEnum[]
    having?: toys_producerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Toys_producerCountAggregateInputType | true
    _avg?: Toys_producerAvgAggregateInputType
    _sum?: Toys_producerSumAggregateInputType
    _min?: Toys_producerMinAggregateInputType
    _max?: Toys_producerMaxAggregateInputType
  }

  export type Toys_producerGroupByOutputType = {
    id: number
    stock_info: JsonValue
    hq_location: JsonValue
    _count: Toys_producerCountAggregateOutputType | null
    _avg: Toys_producerAvgAggregateOutputType | null
    _sum: Toys_producerSumAggregateOutputType | null
    _min: Toys_producerMinAggregateOutputType | null
    _max: Toys_producerMaxAggregateOutputType | null
  }

  type GetToys_producerGroupByPayload<T extends Toys_producerGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<Toys_producerGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof Toys_producerGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Toys_producerGroupByOutputType[P]>
            : GetScalarType<T[P], Toys_producerGroupByOutputType[P]>
        }
      >
    >

  export type toys_producerSelect = {
    id?: boolean
    stock_info?: boolean
    hq_location?: boolean
    toy?: boolean | toys_producer$toyArgs
    _count?: boolean | Toys_producerCountOutputTypeArgs
  }

  export type toys_producerInclude = {
    toy?: boolean | toys_producer$toyArgs
    _count?: boolean | Toys_producerCountOutputTypeArgs
  }

  export type toys_producerGetPayload<
    S extends boolean | null | undefined | toys_producerArgs
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? toys_producer
    : S extends undefined
    ? never
    : S extends { include: any } & (
        | toys_producerArgs
        | toys_producerFindManyArgs
      )
    ? toys_producer & {
        [P in TruthyKeys<S['include']>]: P extends 'toy'
          ? Array<toyGetPayload<S['include'][P]>>
          : P extends '_count'
          ? Toys_producerCountOutputTypeGetPayload<S['include'][P]>
          : never
      }
    : S extends { select: any } & (
        | toys_producerArgs
        | toys_producerFindManyArgs
      )
    ? {
        [P in TruthyKeys<S['select']>]: P extends 'toy'
          ? Array<toyGetPayload<S['select'][P]>>
          : P extends '_count'
          ? Toys_producerCountOutputTypeGetPayload<S['select'][P]>
          : P extends keyof toys_producer
          ? toys_producer[P]
          : never
      }
    : toys_producer

  type toys_producerCountArgs = Omit<
    toys_producerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Toys_producerCountAggregateInputType | true
  }

  export interface toys_producerDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one Toys_producer that matches the filter.
     * @param {toys_producerFindUniqueArgs} args - Arguments to find a Toys_producer
     * @example
     * // Get one Toys_producer
     * const toys_producer = await prisma.toys_producer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends toys_producerFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args: SelectSubset<T, toys_producerFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findUnique',
      'toys_producer'
    > extends True
      ? Prisma__toys_producerClient<toys_producerGetPayload<T>>
      : Prisma__toys_producerClient<toys_producerGetPayload<T> | null, null>

    /**
     * Find one Toys_producer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {toys_producerFindUniqueOrThrowArgs} args - Arguments to find a Toys_producer
     * @example
     * // Get one Toys_producer
     * const toys_producer = await prisma.toys_producer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends toys_producerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, toys_producerFindUniqueOrThrowArgs>
    ): Prisma__toys_producerClient<toys_producerGetPayload<T>>

    /**
     * Find the first Toys_producer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toys_producerFindFirstArgs} args - Arguments to find a Toys_producer
     * @example
     * // Get one Toys_producer
     * const toys_producer = await prisma.toys_producer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends toys_producerFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound
        ? T['rejectOnNotFound']
        : undefined
    >(
      args?: SelectSubset<T, toys_producerFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      'findFirst',
      'toys_producer'
    > extends True
      ? Prisma__toys_producerClient<toys_producerGetPayload<T>>
      : Prisma__toys_producerClient<toys_producerGetPayload<T> | null, null>

    /**
     * Find the first Toys_producer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toys_producerFindFirstOrThrowArgs} args - Arguments to find a Toys_producer
     * @example
     * // Get one Toys_producer
     * const toys_producer = await prisma.toys_producer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends toys_producerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, toys_producerFindFirstOrThrowArgs>
    ): Prisma__toys_producerClient<toys_producerGetPayload<T>>

    /**
     * Find zero or more Toys_producers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toys_producerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Toys_producers
     * const toys_producers = await prisma.toys_producer.findMany()
     *
     * // Get first 10 Toys_producers
     * const toys_producers = await prisma.toys_producer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const toys_producerWithIdOnly = await prisma.toys_producer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends toys_producerFindManyArgs>(
      args?: SelectSubset<T, toys_producerFindManyArgs>
    ): Prisma.PrismaPromise<Array<toys_producerGetPayload<T>>>

    /**
     * Create a Toys_producer.
     * @param {toys_producerCreateArgs} args - Arguments to create a Toys_producer.
     * @example
     * // Create one Toys_producer
     * const Toys_producer = await prisma.toys_producer.create({
     *   data: {
     *     // ... data to create a Toys_producer
     *   }
     * })
     *
     **/
    create<T extends toys_producerCreateArgs>(
      args: SelectSubset<T, toys_producerCreateArgs>
    ): Prisma__toys_producerClient<toys_producerGetPayload<T>>

    /**
     * Create many Toys_producers.
     *     @param {toys_producerCreateManyArgs} args - Arguments to create many Toys_producers.
     *     @example
     *     // Create many Toys_producers
     *     const toys_producer = await prisma.toys_producer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends toys_producerCreateManyArgs>(
      args?: SelectSubset<T, toys_producerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Toys_producer.
     * @param {toys_producerDeleteArgs} args - Arguments to delete one Toys_producer.
     * @example
     * // Delete one Toys_producer
     * const Toys_producer = await prisma.toys_producer.delete({
     *   where: {
     *     // ... filter to delete one Toys_producer
     *   }
     * })
     *
     **/
    delete<T extends toys_producerDeleteArgs>(
      args: SelectSubset<T, toys_producerDeleteArgs>
    ): Prisma__toys_producerClient<toys_producerGetPayload<T>>

    /**
     * Update one Toys_producer.
     * @param {toys_producerUpdateArgs} args - Arguments to update one Toys_producer.
     * @example
     * // Update one Toys_producer
     * const toys_producer = await prisma.toys_producer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends toys_producerUpdateArgs>(
      args: SelectSubset<T, toys_producerUpdateArgs>
    ): Prisma__toys_producerClient<toys_producerGetPayload<T>>

    /**
     * Delete zero or more Toys_producers.
     * @param {toys_producerDeleteManyArgs} args - Arguments to filter Toys_producers to delete.
     * @example
     * // Delete a few Toys_producers
     * const { count } = await prisma.toys_producer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends toys_producerDeleteManyArgs>(
      args?: SelectSubset<T, toys_producerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Toys_producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toys_producerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Toys_producers
     * const toys_producer = await prisma.toys_producer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends toys_producerUpdateManyArgs>(
      args: SelectSubset<T, toys_producerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Toys_producer.
     * @param {toys_producerUpsertArgs} args - Arguments to update or create a Toys_producer.
     * @example
     * // Update or create a Toys_producer
     * const toys_producer = await prisma.toys_producer.upsert({
     *   create: {
     *     // ... data to create a Toys_producer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Toys_producer we want to update
     *   }
     * })
     **/
    upsert<T extends toys_producerUpsertArgs>(
      args: SelectSubset<T, toys_producerUpsertArgs>
    ): Prisma__toys_producerClient<toys_producerGetPayload<T>>

    /**
     * Count the number of Toys_producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toys_producerCountArgs} args - Arguments to filter Toys_producers to count.
     * @example
     * // Count the number of Toys_producers
     * const count = await prisma.toys_producer.count({
     *   where: {
     *     // ... the filter for the Toys_producers we want to count
     *   }
     * })
     **/
    count<T extends toys_producerCountArgs>(
      args?: Subset<T, toys_producerCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Toys_producerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Toys_producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Toys_producerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Toys_producerAggregateArgs>(
      args: Subset<T, Toys_producerAggregateArgs>
    ): Prisma.PrismaPromise<GetToys_producerAggregateType<T>>

    /**
     * Group by Toys_producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Toys_producerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends Toys_producerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Toys_producerGroupByArgs['orderBy'] }
        : { orderBy?: Toys_producerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in "having" needs to be provided in "by"`
                ]
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
    >(
      args: SubsetIntersection<T, Toys_producerGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetToys_producerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for toys_producer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__toys_producerClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    )

    toy<T extends toys_producer$toyArgs = {}>(
      args?: Subset<T, toys_producer$toyArgs>
    ): Prisma.PrismaPromise<Array<toyGetPayload<T>> | Null>

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * toys_producer base type for findUnique actions
   */
  export type toys_producerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the toys_producer
     */
    select?: toys_producerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toys_producerInclude | null
    /**
     * Filter, which toys_producer to fetch.
     */
    where: toys_producerWhereUniqueInput
  }

  /**
   * toys_producer findUnique
   */
  export interface toys_producerFindUniqueArgs
    extends toys_producerFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * toys_producer findUniqueOrThrow
   */
  export type toys_producerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the toys_producer
     */
    select?: toys_producerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toys_producerInclude | null
    /**
     * Filter, which toys_producer to fetch.
     */
    where: toys_producerWhereUniqueInput
  }

  /**
   * toys_producer base type for findFirst actions
   */
  export type toys_producerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the toys_producer
     */
    select?: toys_producerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toys_producerInclude | null
    /**
     * Filter, which toys_producer to fetch.
     */
    where?: toys_producerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toys_producers to fetch.
     */
    orderBy?: Enumerable<toys_producerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for toys_producers.
     */
    cursor?: toys_producerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toys_producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toys_producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of toys_producers.
     */
    distinct?: Enumerable<Toys_producerScalarFieldEnum>
  }

  /**
   * toys_producer findFirst
   */
  export interface toys_producerFindFirstArgs
    extends toys_producerFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * toys_producer findFirstOrThrow
   */
  export type toys_producerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the toys_producer
     */
    select?: toys_producerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toys_producerInclude | null
    /**
     * Filter, which toys_producer to fetch.
     */
    where?: toys_producerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toys_producers to fetch.
     */
    orderBy?: Enumerable<toys_producerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for toys_producers.
     */
    cursor?: toys_producerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toys_producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toys_producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of toys_producers.
     */
    distinct?: Enumerable<Toys_producerScalarFieldEnum>
  }

  /**
   * toys_producer findMany
   */
  export type toys_producerFindManyArgs = {
    /**
     * Select specific fields to fetch from the toys_producer
     */
    select?: toys_producerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toys_producerInclude | null
    /**
     * Filter, which toys_producers to fetch.
     */
    where?: toys_producerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of toys_producers to fetch.
     */
    orderBy?: Enumerable<toys_producerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing toys_producers.
     */
    cursor?: toys_producerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` toys_producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` toys_producers.
     */
    skip?: number
    distinct?: Enumerable<Toys_producerScalarFieldEnum>
  }

  /**
   * toys_producer create
   */
  export type toys_producerCreateArgs = {
    /**
     * Select specific fields to fetch from the toys_producer
     */
    select?: toys_producerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toys_producerInclude | null
    /**
     * The data needed to create a toys_producer.
     */
    data: XOR<toys_producerCreateInput, toys_producerUncheckedCreateInput>
  }

  /**
   * toys_producer createMany
   */
  export type toys_producerCreateManyArgs = {
    /**
     * The data used to create many toys_producers.
     */
    data: Enumerable<toys_producerCreateManyInput>
    skipDuplicates?: boolean
  }

  /**
   * toys_producer update
   */
  export type toys_producerUpdateArgs = {
    /**
     * Select specific fields to fetch from the toys_producer
     */
    select?: toys_producerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toys_producerInclude | null
    /**
     * The data needed to update a toys_producer.
     */
    data: XOR<toys_producerUpdateInput, toys_producerUncheckedUpdateInput>
    /**
     * Choose, which toys_producer to update.
     */
    where: toys_producerWhereUniqueInput
  }

  /**
   * toys_producer updateMany
   */
  export type toys_producerUpdateManyArgs = {
    /**
     * The data used to update toys_producers.
     */
    data: XOR<
      toys_producerUpdateManyMutationInput,
      toys_producerUncheckedUpdateManyInput
    >
    /**
     * Filter which toys_producers to update
     */
    where?: toys_producerWhereInput
  }

  /**
   * toys_producer upsert
   */
  export type toys_producerUpsertArgs = {
    /**
     * Select specific fields to fetch from the toys_producer
     */
    select?: toys_producerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toys_producerInclude | null
    /**
     * The filter to search for the toys_producer to update in case it exists.
     */
    where: toys_producerWhereUniqueInput
    /**
     * In case the toys_producer found by the `where` argument doesn't exist, create a new toys_producer with this data.
     */
    create: XOR<toys_producerCreateInput, toys_producerUncheckedCreateInput>
    /**
     * In case the toys_producer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<toys_producerUpdateInput, toys_producerUncheckedUpdateInput>
  }

  /**
   * toys_producer delete
   */
  export type toys_producerDeleteArgs = {
    /**
     * Select specific fields to fetch from the toys_producer
     */
    select?: toys_producerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toys_producerInclude | null
    /**
     * Filter which toys_producer to delete.
     */
    where: toys_producerWhereUniqueInput
  }

  /**
   * toys_producer deleteMany
   */
  export type toys_producerDeleteManyArgs = {
    /**
     * Filter which toys_producers to delete
     */
    where?: toys_producerWhereInput
  }

  /**
   * toys_producer.toy
   */
  export type toys_producer$toyArgs = {
    /**
     * Select specific fields to fetch from the toy
     */
    select?: toySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toyInclude | null
    where?: toyWhereInput
    orderBy?: Enumerable<toyOrderByWithRelationInput>
    cursor?: toyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ToyScalarFieldEnum>
  }

  /**
   * toys_producer without action
   */
  export type toys_producerArgs = {
    /**
     * Select specific fields to fetch from the toys_producer
     */
    select?: toys_producerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toys_producerInclude | null
  }

  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CatScalarFieldEnum: {
    id: 'id'
    cat_color_id: 'cat_color_id'
    cat_name: 'cat_name'
    date_of_birth: 'date_of_birth'
  }

  export type CatScalarFieldEnum =
    (typeof CatScalarFieldEnum)[keyof typeof CatScalarFieldEnum]

  export const Cat_colorScalarFieldEnum: {
    id: 'id'
    color_name: 'color_name'
  }

  export type Cat_colorScalarFieldEnum =
    (typeof Cat_colorScalarFieldEnum)[keyof typeof Cat_colorScalarFieldEnum]

  export const Color_hexScalarFieldEnum: {
    id: 'id'
    hex_code: 'hex_code'
  }

  export type Color_hexScalarFieldEnum =
    (typeof Color_hexScalarFieldEnum)[keyof typeof Color_hexScalarFieldEnum]

  export const HouseScalarFieldEnum: {
    id: 'id'
    house_address: 'house_address'
    has_dog: 'has_dog'
  }

  export type HouseScalarFieldEnum =
    (typeof HouseScalarFieldEnum)[keyof typeof HouseScalarFieldEnum]

  export const House_catScalarFieldEnum: {
    house_id: 'house_id'
    cat_id: 'cat_id'
  }

  export type House_catScalarFieldEnum =
    (typeof House_catScalarFieldEnum)[keyof typeof House_catScalarFieldEnum]

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull
    JsonNull: typeof JsonNull
    AnyNull: typeof AnyNull
  }

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  }

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]

  export const QueryMode: {
    default: 'default'
    insensitive: 'insensitive'
  }

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const ToyScalarFieldEnum: {
    id: 'id'
    toys_producer_id: 'toys_producer_id'
    toy_name: 'toy_name'
    barcode: 'barcode'
    price: 'price'
    currency: 'currency'
    naughty: 'naughty'
    date_introduced: 'date_introduced'
  }

  export type ToyScalarFieldEnum =
    (typeof ToyScalarFieldEnum)[keyof typeof ToyScalarFieldEnum]

  export const Toy_houseScalarFieldEnum: {
    toy_id: 'toy_id'
    house_id: 'house_id'
    amount: 'amount'
  }

  export type Toy_houseScalarFieldEnum =
    (typeof Toy_houseScalarFieldEnum)[keyof typeof Toy_houseScalarFieldEnum]

  export const Toys_producerScalarFieldEnum: {
    id: 'id'
    stock_info: 'stock_info'
    hq_location: 'hq_location'
  }

  export type Toys_producerScalarFieldEnum =
    (typeof Toys_producerScalarFieldEnum)[keyof typeof Toys_producerScalarFieldEnum]

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted'
    ReadCommitted: 'ReadCommitted'
    RepeatableRead: 'RepeatableRead'
    Serializable: 'Serializable'
  }

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  /**
   * Deep Input Types
   */

  export type catWhereInput = {
    AND?: Enumerable<catWhereInput>
    OR?: Enumerable<catWhereInput>
    NOT?: Enumerable<catWhereInput>
    id?: BigIntFilter | bigint | number
    cat_color_id?: IntNullableFilter | number | null
    cat_name?: StringNullableFilter | string | null
    date_of_birth?: DateTimeNullableFilter | Date | string | null
    cat_color?: XOR<Cat_colorRelationFilter, cat_colorWhereInput> | null
    house_cat?: House_catListRelationFilter
  }

  export type catOrderByWithRelationInput = {
    id?: SortOrder
    cat_color_id?: SortOrder
    cat_name?: SortOrder
    date_of_birth?: SortOrder
    cat_color?: cat_colorOrderByWithRelationInput
    house_cat?: house_catOrderByRelationAggregateInput
  }

  export type catWhereUniqueInput = {
    id?: bigint | number
  }

  export type catOrderByWithAggregationInput = {
    id?: SortOrder
    cat_color_id?: SortOrder
    cat_name?: SortOrder
    date_of_birth?: SortOrder
    _count?: catCountOrderByAggregateInput
    _avg?: catAvgOrderByAggregateInput
    _max?: catMaxOrderByAggregateInput
    _min?: catMinOrderByAggregateInput
    _sum?: catSumOrderByAggregateInput
  }

  export type catScalarWhereWithAggregatesInput = {
    AND?: Enumerable<catScalarWhereWithAggregatesInput>
    OR?: Enumerable<catScalarWhereWithAggregatesInput>
    NOT?: Enumerable<catScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    cat_color_id?: IntNullableWithAggregatesFilter | number | null
    cat_name?: StringNullableWithAggregatesFilter | string | null
    date_of_birth?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type cat_colorWhereInput = {
    AND?: Enumerable<cat_colorWhereInput>
    OR?: Enumerable<cat_colorWhereInput>
    NOT?: Enumerable<cat_colorWhereInput>
    id?: IntFilter | number
    color_name?: StringFilter | string
    cat?: CatListRelationFilter
    color_hex?: XOR<Color_hexRelationFilter, color_hexWhereInput> | null
  }

  export type cat_colorOrderByWithRelationInput = {
    id?: SortOrder
    color_name?: SortOrder
    cat?: catOrderByRelationAggregateInput
    color_hex?: color_hexOrderByWithRelationInput
  }

  export type cat_colorWhereUniqueInput = {
    id?: number
  }

  export type cat_colorOrderByWithAggregationInput = {
    id?: SortOrder
    color_name?: SortOrder
    _count?: cat_colorCountOrderByAggregateInput
    _avg?: cat_colorAvgOrderByAggregateInput
    _max?: cat_colorMaxOrderByAggregateInput
    _min?: cat_colorMinOrderByAggregateInput
    _sum?: cat_colorSumOrderByAggregateInput
  }

  export type cat_colorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<cat_colorScalarWhereWithAggregatesInput>
    OR?: Enumerable<cat_colorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<cat_colorScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    color_name?: StringWithAggregatesFilter | string
  }

  export type color_hexWhereInput = {
    AND?: Enumerable<color_hexWhereInput>
    OR?: Enumerable<color_hexWhereInput>
    NOT?: Enumerable<color_hexWhereInput>
    id?: IntFilter | number
    hex_code?: StringFilter | string
    cat_color?: XOR<Cat_colorRelationFilter, cat_colorWhereInput>
  }

  export type color_hexOrderByWithRelationInput = {
    id?: SortOrder
    hex_code?: SortOrder
    cat_color?: cat_colorOrderByWithRelationInput
  }

  export type color_hexWhereUniqueInput = {
    id?: number
  }

  export type color_hexOrderByWithAggregationInput = {
    id?: SortOrder
    hex_code?: SortOrder
    _count?: color_hexCountOrderByAggregateInput
    _avg?: color_hexAvgOrderByAggregateInput
    _max?: color_hexMaxOrderByAggregateInput
    _min?: color_hexMinOrderByAggregateInput
    _sum?: color_hexSumOrderByAggregateInput
  }

  export type color_hexScalarWhereWithAggregatesInput = {
    AND?: Enumerable<color_hexScalarWhereWithAggregatesInput>
    OR?: Enumerable<color_hexScalarWhereWithAggregatesInput>
    NOT?: Enumerable<color_hexScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    hex_code?: StringWithAggregatesFilter | string
  }

  export type houseWhereInput = {
    AND?: Enumerable<houseWhereInput>
    OR?: Enumerable<houseWhereInput>
    NOT?: Enumerable<houseWhereInput>
    id?: IntFilter | number
    house_address?: StringNullableFilter | string | null
    has_dog?: BoolNullableFilter | boolean | null
    house_cat?: House_catListRelationFilter
    toy_house?: Toy_houseListRelationFilter
  }

  export type houseOrderByWithRelationInput = {
    id?: SortOrder
    house_address?: SortOrder
    has_dog?: SortOrder
    house_cat?: house_catOrderByRelationAggregateInput
    toy_house?: toy_houseOrderByRelationAggregateInput
  }

  export type houseWhereUniqueInput = {
    id?: number
  }

  export type houseOrderByWithAggregationInput = {
    id?: SortOrder
    house_address?: SortOrder
    has_dog?: SortOrder
    _count?: houseCountOrderByAggregateInput
    _avg?: houseAvgOrderByAggregateInput
    _max?: houseMaxOrderByAggregateInput
    _min?: houseMinOrderByAggregateInput
    _sum?: houseSumOrderByAggregateInput
  }

  export type houseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<houseScalarWhereWithAggregatesInput>
    OR?: Enumerable<houseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<houseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    house_address?: StringNullableWithAggregatesFilter | string | null
    has_dog?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type house_catWhereInput = {
    AND?: Enumerable<house_catWhereInput>
    OR?: Enumerable<house_catWhereInput>
    NOT?: Enumerable<house_catWhereInput>
    house_id?: IntFilter | number
    cat_id?: BigIntFilter | bigint | number
    cat?: XOR<CatRelationFilter, catWhereInput>
    house?: XOR<HouseRelationFilter, houseWhereInput>
  }

  export type house_catOrderByWithRelationInput = {
    house_id?: SortOrder
    cat_id?: SortOrder
    cat?: catOrderByWithRelationInput
    house?: houseOrderByWithRelationInput
  }

  export type house_catWhereUniqueInput = {
    house_id_cat_id?: house_catHouse_idCat_idCompoundUniqueInput
  }

  export type house_catOrderByWithAggregationInput = {
    house_id?: SortOrder
    cat_id?: SortOrder
    _count?: house_catCountOrderByAggregateInput
    _avg?: house_catAvgOrderByAggregateInput
    _max?: house_catMaxOrderByAggregateInput
    _min?: house_catMinOrderByAggregateInput
    _sum?: house_catSumOrderByAggregateInput
  }

  export type house_catScalarWhereWithAggregatesInput = {
    AND?: Enumerable<house_catScalarWhereWithAggregatesInput>
    OR?: Enumerable<house_catScalarWhereWithAggregatesInput>
    NOT?: Enumerable<house_catScalarWhereWithAggregatesInput>
    house_id?: IntWithAggregatesFilter | number
    cat_id?: BigIntWithAggregatesFilter | bigint | number
  }

  export type toyWhereInput = {
    AND?: Enumerable<toyWhereInput>
    OR?: Enumerable<toyWhereInput>
    NOT?: Enumerable<toyWhereInput>
    id?: IntFilter | number
    toys_producer_id?: IntNullableFilter | number | null
    toy_name?: StringFilter | string
    barcode?: StringFilter | string
    price?: DecimalFilter | Decimal | DecimalJsLike | number | string
    currency?: StringFilter | string
    naughty?: StringNullableFilter | string | null
    date_introduced?: DateTimeFilter | Date | string
    toys_producer?: XOR<
      Toys_producerRelationFilter,
      toys_producerWhereInput
    > | null
    toy_house?: Toy_houseListRelationFilter
  }

  export type toyOrderByWithRelationInput = {
    id?: SortOrder
    toys_producer_id?: SortOrder
    toy_name?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    naughty?: SortOrder
    date_introduced?: SortOrder
    toys_producer?: toys_producerOrderByWithRelationInput
    toy_house?: toy_houseOrderByRelationAggregateInput
  }

  export type toyWhereUniqueInput = {
    id?: number
    barcode?: string
  }

  export type toyOrderByWithAggregationInput = {
    id?: SortOrder
    toys_producer_id?: SortOrder
    toy_name?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    naughty?: SortOrder
    date_introduced?: SortOrder
    _count?: toyCountOrderByAggregateInput
    _avg?: toyAvgOrderByAggregateInput
    _max?: toyMaxOrderByAggregateInput
    _min?: toyMinOrderByAggregateInput
    _sum?: toySumOrderByAggregateInput
  }

  export type toyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<toyScalarWhereWithAggregatesInput>
    OR?: Enumerable<toyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<toyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    toys_producer_id?: IntNullableWithAggregatesFilter | number | null
    toy_name?: StringWithAggregatesFilter | string
    barcode?: StringWithAggregatesFilter | string
    price?:
      | DecimalWithAggregatesFilter
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringWithAggregatesFilter | string
    naughty?: StringNullableWithAggregatesFilter | string | null
    date_introduced?: DateTimeWithAggregatesFilter | Date | string
  }

  export type toy_houseWhereInput = {
    AND?: Enumerable<toy_houseWhereInput>
    OR?: Enumerable<toy_houseWhereInput>
    NOT?: Enumerable<toy_houseWhereInput>
    toy_id?: IntFilter | number
    house_id?: IntFilter | number
    amount?: IntFilter | number
    house?: XOR<HouseRelationFilter, houseWhereInput>
    toy?: XOR<ToyRelationFilter, toyWhereInput>
  }

  export type toy_houseOrderByWithRelationInput = {
    toy_id?: SortOrder
    house_id?: SortOrder
    amount?: SortOrder
    house?: houseOrderByWithRelationInput
    toy?: toyOrderByWithRelationInput
  }

  export type toy_houseWhereUniqueInput = {
    toy_id_house_id?: toy_houseToy_idHouse_idCompoundUniqueInput
  }

  export type toy_houseOrderByWithAggregationInput = {
    toy_id?: SortOrder
    house_id?: SortOrder
    amount?: SortOrder
    _count?: toy_houseCountOrderByAggregateInput
    _avg?: toy_houseAvgOrderByAggregateInput
    _max?: toy_houseMaxOrderByAggregateInput
    _min?: toy_houseMinOrderByAggregateInput
    _sum?: toy_houseSumOrderByAggregateInput
  }

  export type toy_houseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<toy_houseScalarWhereWithAggregatesInput>
    OR?: Enumerable<toy_houseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<toy_houseScalarWhereWithAggregatesInput>
    toy_id?: IntWithAggregatesFilter | number
    house_id?: IntWithAggregatesFilter | number
    amount?: IntWithAggregatesFilter | number
  }

  export type toys_producerWhereInput = {
    AND?: Enumerable<toys_producerWhereInput>
    OR?: Enumerable<toys_producerWhereInput>
    NOT?: Enumerable<toys_producerWhereInput>
    id?: IntFilter | number
    stock_info?: JsonFilter
    hq_location?: JsonFilter
    toy?: ToyListRelationFilter
  }

  export type toys_producerOrderByWithRelationInput = {
    id?: SortOrder
    stock_info?: SortOrder
    hq_location?: SortOrder
    toy?: toyOrderByRelationAggregateInput
  }

  export type toys_producerWhereUniqueInput = {
    id?: number
  }

  export type toys_producerOrderByWithAggregationInput = {
    id?: SortOrder
    stock_info?: SortOrder
    hq_location?: SortOrder
    _count?: toys_producerCountOrderByAggregateInput
    _avg?: toys_producerAvgOrderByAggregateInput
    _max?: toys_producerMaxOrderByAggregateInput
    _min?: toys_producerMinOrderByAggregateInput
    _sum?: toys_producerSumOrderByAggregateInput
  }

  export type toys_producerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<toys_producerScalarWhereWithAggregatesInput>
    OR?: Enumerable<toys_producerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<toys_producerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    stock_info?: JsonWithAggregatesFilter
    hq_location?: JsonWithAggregatesFilter
  }

  export type catCreateInput = {
    id?: bigint | number
    cat_name?: string | null
    date_of_birth?: Date | string | null
    cat_color?: cat_colorCreateNestedOneWithoutCatInput
    house_cat?: house_catCreateNestedManyWithoutCatInput
  }

  export type catUncheckedCreateInput = {
    id?: bigint | number
    cat_color_id?: number | null
    cat_name?: string | null
    date_of_birth?: Date | string | null
    house_cat?: house_catUncheckedCreateNestedManyWithoutCatInput
  }

  export type catUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cat_name?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cat_color?: cat_colorUpdateOneWithoutCatNestedInput
    house_cat?: house_catUpdateManyWithoutCatNestedInput
  }

  export type catUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cat_color_id?: NullableIntFieldUpdateOperationsInput | number | null
    cat_name?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    house_cat?: house_catUncheckedUpdateManyWithoutCatNestedInput
  }

  export type catCreateManyInput = {
    id?: bigint | number
    cat_color_id?: number | null
    cat_name?: string | null
    date_of_birth?: Date | string | null
  }

  export type catUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cat_name?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type catUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cat_color_id?: NullableIntFieldUpdateOperationsInput | number | null
    cat_name?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type cat_colorCreateInput = {
    color_name: string
    cat?: catCreateNestedManyWithoutCat_colorInput
    color_hex?: color_hexCreateNestedOneWithoutCat_colorInput
  }

  export type cat_colorUncheckedCreateInput = {
    id?: number
    color_name: string
    cat?: catUncheckedCreateNestedManyWithoutCat_colorInput
    color_hex?: color_hexUncheckedCreateNestedOneWithoutCat_colorInput
  }

  export type cat_colorUpdateInput = {
    color_name?: StringFieldUpdateOperationsInput | string
    cat?: catUpdateManyWithoutCat_colorNestedInput
    color_hex?: color_hexUpdateOneWithoutCat_colorNestedInput
  }

  export type cat_colorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    color_name?: StringFieldUpdateOperationsInput | string
    cat?: catUncheckedUpdateManyWithoutCat_colorNestedInput
    color_hex?: color_hexUncheckedUpdateOneWithoutCat_colorNestedInput
  }

  export type cat_colorCreateManyInput = {
    id?: number
    color_name: string
  }

  export type cat_colorUpdateManyMutationInput = {
    color_name?: StringFieldUpdateOperationsInput | string
  }

  export type cat_colorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    color_name?: StringFieldUpdateOperationsInput | string
  }

  export type color_hexCreateInput = {
    hex_code: string
    cat_color: cat_colorCreateNestedOneWithoutColor_hexInput
  }

  export type color_hexUncheckedCreateInput = {
    id: number
    hex_code: string
  }

  export type color_hexUpdateInput = {
    hex_code?: StringFieldUpdateOperationsInput | string
    cat_color?: cat_colorUpdateOneRequiredWithoutColor_hexNestedInput
  }

  export type color_hexUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hex_code?: StringFieldUpdateOperationsInput | string
  }

  export type color_hexCreateManyInput = {
    id: number
    hex_code: string
  }

  export type color_hexUpdateManyMutationInput = {
    hex_code?: StringFieldUpdateOperationsInput | string
  }

  export type color_hexUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hex_code?: StringFieldUpdateOperationsInput | string
  }

  export type houseCreateInput = {
    house_address?: string | null
    has_dog?: boolean | null
    house_cat?: house_catCreateNestedManyWithoutHouseInput
    toy_house?: toy_houseCreateNestedManyWithoutHouseInput
  }

  export type houseUncheckedCreateInput = {
    id?: number
    house_address?: string | null
    has_dog?: boolean | null
    house_cat?: house_catUncheckedCreateNestedManyWithoutHouseInput
    toy_house?: toy_houseUncheckedCreateNestedManyWithoutHouseInput
  }

  export type houseUpdateInput = {
    house_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_dog?: NullableBoolFieldUpdateOperationsInput | boolean | null
    house_cat?: house_catUpdateManyWithoutHouseNestedInput
    toy_house?: toy_houseUpdateManyWithoutHouseNestedInput
  }

  export type houseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    house_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_dog?: NullableBoolFieldUpdateOperationsInput | boolean | null
    house_cat?: house_catUncheckedUpdateManyWithoutHouseNestedInput
    toy_house?: toy_houseUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type houseCreateManyInput = {
    id?: number
    house_address?: string | null
    has_dog?: boolean | null
  }

  export type houseUpdateManyMutationInput = {
    house_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_dog?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type houseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    house_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_dog?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type house_catCreateInput = {
    cat: catCreateNestedOneWithoutHouse_catInput
    house: houseCreateNestedOneWithoutHouse_catInput
  }

  export type house_catUncheckedCreateInput = {
    house_id: number
    cat_id: bigint | number
  }

  export type house_catUpdateInput = {
    cat?: catUpdateOneRequiredWithoutHouse_catNestedInput
    house?: houseUpdateOneRequiredWithoutHouse_catNestedInput
  }

  export type house_catUncheckedUpdateInput = {
    house_id?: IntFieldUpdateOperationsInput | number
    cat_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type house_catCreateManyInput = {
    house_id: number
    cat_id: bigint | number
  }

  export type house_catUpdateManyMutationInput = {}

  export type house_catUncheckedUpdateManyInput = {
    house_id?: IntFieldUpdateOperationsInput | number
    cat_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type toyCreateInput = {
    toy_name: string
    barcode: string
    price: Decimal | DecimalJsLike | number | string
    currency: string
    naughty?: string | null
    date_introduced: Date | string
    toys_producer?: toys_producerCreateNestedOneWithoutToyInput
    toy_house?: toy_houseCreateNestedManyWithoutToyInput
  }

  export type toyUncheckedCreateInput = {
    id?: number
    toys_producer_id?: number | null
    toy_name: string
    barcode: string
    price: Decimal | DecimalJsLike | number | string
    currency: string
    naughty?: string | null
    date_introduced: Date | string
    toy_house?: toy_houseUncheckedCreateNestedManyWithoutToyInput
  }

  export type toyUpdateInput = {
    toy_name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    naughty?: NullableStringFieldUpdateOperationsInput | string | null
    date_introduced?: DateTimeFieldUpdateOperationsInput | Date | string
    toys_producer?: toys_producerUpdateOneWithoutToyNestedInput
    toy_house?: toy_houseUpdateManyWithoutToyNestedInput
  }

  export type toyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    toys_producer_id?: NullableIntFieldUpdateOperationsInput | number | null
    toy_name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    naughty?: NullableStringFieldUpdateOperationsInput | string | null
    date_introduced?: DateTimeFieldUpdateOperationsInput | Date | string
    toy_house?: toy_houseUncheckedUpdateManyWithoutToyNestedInput
  }

  export type toyCreateManyInput = {
    id?: number
    toys_producer_id?: number | null
    toy_name: string
    barcode: string
    price: Decimal | DecimalJsLike | number | string
    currency: string
    naughty?: string | null
    date_introduced: Date | string
  }

  export type toyUpdateManyMutationInput = {
    toy_name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    naughty?: NullableStringFieldUpdateOperationsInput | string | null
    date_introduced?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type toyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    toys_producer_id?: NullableIntFieldUpdateOperationsInput | number | null
    toy_name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    naughty?: NullableStringFieldUpdateOperationsInput | string | null
    date_introduced?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type toy_houseCreateInput = {
    amount?: number
    house: houseCreateNestedOneWithoutToy_houseInput
    toy: toyCreateNestedOneWithoutToy_houseInput
  }

  export type toy_houseUncheckedCreateInput = {
    toy_id: number
    house_id: number
    amount?: number
  }

  export type toy_houseUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    house?: houseUpdateOneRequiredWithoutToy_houseNestedInput
    toy?: toyUpdateOneRequiredWithoutToy_houseNestedInput
  }

  export type toy_houseUncheckedUpdateInput = {
    toy_id?: IntFieldUpdateOperationsInput | number
    house_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type toy_houseCreateManyInput = {
    toy_id: number
    house_id: number
    amount?: number
  }

  export type toy_houseUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type toy_houseUncheckedUpdateManyInput = {
    toy_id?: IntFieldUpdateOperationsInput | number
    house_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type toys_producerCreateInput = {
    stock_info: JsonNullValueInput | InputJsonValue
    hq_location: JsonNullValueInput | InputJsonValue
    toy?: toyCreateNestedManyWithoutToys_producerInput
  }

  export type toys_producerUncheckedCreateInput = {
    id?: number
    stock_info: JsonNullValueInput | InputJsonValue
    hq_location: JsonNullValueInput | InputJsonValue
    toy?: toyUncheckedCreateNestedManyWithoutToys_producerInput
  }

  export type toys_producerUpdateInput = {
    stock_info?: JsonNullValueInput | InputJsonValue
    hq_location?: JsonNullValueInput | InputJsonValue
    toy?: toyUpdateManyWithoutToys_producerNestedInput
  }

  export type toys_producerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock_info?: JsonNullValueInput | InputJsonValue
    hq_location?: JsonNullValueInput | InputJsonValue
    toy?: toyUncheckedUpdateManyWithoutToys_producerNestedInput
  }

  export type toys_producerCreateManyInput = {
    id?: number
    stock_info: JsonNullValueInput | InputJsonValue
    hq_location: JsonNullValueInput | InputJsonValue
  }

  export type toys_producerUpdateManyMutationInput = {
    stock_info?: JsonNullValueInput | InputJsonValue
    hq_location?: JsonNullValueInput | InputJsonValue
  }

  export type toys_producerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock_info?: JsonNullValueInput | InputJsonValue
    hq_location?: JsonNullValueInput | InputJsonValue
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type Cat_colorRelationFilter = {
    is?: cat_colorWhereInput
    isNot?: cat_colorWhereInput
  }

  export type House_catListRelationFilter = {
    every?: house_catWhereInput
    some?: house_catWhereInput
    none?: house_catWhereInput
  }

  export type house_catOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type catCountOrderByAggregateInput = {
    id?: SortOrder
    cat_color_id?: SortOrder
    cat_name?: SortOrder
    date_of_birth?: SortOrder
  }

  export type catAvgOrderByAggregateInput = {
    id?: SortOrder
    cat_color_id?: SortOrder
  }

  export type catMaxOrderByAggregateInput = {
    id?: SortOrder
    cat_color_id?: SortOrder
    cat_name?: SortOrder
    date_of_birth?: SortOrder
  }

  export type catMinOrderByAggregateInput = {
    id?: SortOrder
    cat_color_id?: SortOrder
    cat_name?: SortOrder
    date_of_birth?: SortOrder
  }

  export type catSumOrderByAggregateInput = {
    id?: SortOrder
    cat_color_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type CatListRelationFilter = {
    every?: catWhereInput
    some?: catWhereInput
    none?: catWhereInput
  }

  export type Color_hexRelationFilter = {
    is?: color_hexWhereInput | null
    isNot?: color_hexWhereInput | null
  }

  export type catOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cat_colorCountOrderByAggregateInput = {
    id?: SortOrder
    color_name?: SortOrder
  }

  export type cat_colorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cat_colorMaxOrderByAggregateInput = {
    id?: SortOrder
    color_name?: SortOrder
  }

  export type cat_colorMinOrderByAggregateInput = {
    id?: SortOrder
    color_name?: SortOrder
  }

  export type cat_colorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type color_hexCountOrderByAggregateInput = {
    id?: SortOrder
    hex_code?: SortOrder
  }

  export type color_hexAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type color_hexMaxOrderByAggregateInput = {
    id?: SortOrder
    hex_code?: SortOrder
  }

  export type color_hexMinOrderByAggregateInput = {
    id?: SortOrder
    hex_code?: SortOrder
  }

  export type color_hexSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type Toy_houseListRelationFilter = {
    every?: toy_houseWhereInput
    some?: toy_houseWhereInput
    none?: toy_houseWhereInput
  }

  export type toy_houseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type houseCountOrderByAggregateInput = {
    id?: SortOrder
    house_address?: SortOrder
    has_dog?: SortOrder
  }

  export type houseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type houseMaxOrderByAggregateInput = {
    id?: SortOrder
    house_address?: SortOrder
    has_dog?: SortOrder
  }

  export type houseMinOrderByAggregateInput = {
    id?: SortOrder
    house_address?: SortOrder
    has_dog?: SortOrder
  }

  export type houseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type CatRelationFilter = {
    is?: catWhereInput
    isNot?: catWhereInput
  }

  export type HouseRelationFilter = {
    is?: houseWhereInput
    isNot?: houseWhereInput
  }

  export type house_catHouse_idCat_idCompoundUniqueInput = {
    house_id: number
    cat_id: bigint | number
  }

  export type house_catCountOrderByAggregateInput = {
    house_id?: SortOrder
    cat_id?: SortOrder
  }

  export type house_catAvgOrderByAggregateInput = {
    house_id?: SortOrder
    cat_id?: SortOrder
  }

  export type house_catMaxOrderByAggregateInput = {
    house_id?: SortOrder
    cat_id?: SortOrder
  }

  export type house_catMinOrderByAggregateInput = {
    house_id?: SortOrder
    cat_id?: SortOrder
  }

  export type house_catSumOrderByAggregateInput = {
    house_id?: SortOrder
    cat_id?: SortOrder
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?:
      | Enumerable<Decimal>
      | Enumerable<DecimalJsLike>
      | Enumerable<number>
      | Enumerable<string>
    notIn?:
      | Enumerable<Decimal>
      | Enumerable<DecimalJsLike>
      | Enumerable<number>
      | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type Toys_producerRelationFilter = {
    is?: toys_producerWhereInput | null
    isNot?: toys_producerWhereInput | null
  }

  export type toyCountOrderByAggregateInput = {
    id?: SortOrder
    toys_producer_id?: SortOrder
    toy_name?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    naughty?: SortOrder
    date_introduced?: SortOrder
  }

  export type toyAvgOrderByAggregateInput = {
    id?: SortOrder
    toys_producer_id?: SortOrder
    price?: SortOrder
  }

  export type toyMaxOrderByAggregateInput = {
    id?: SortOrder
    toys_producer_id?: SortOrder
    toy_name?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    naughty?: SortOrder
    date_introduced?: SortOrder
  }

  export type toyMinOrderByAggregateInput = {
    id?: SortOrder
    toys_producer_id?: SortOrder
    toy_name?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    naughty?: SortOrder
    date_introduced?: SortOrder
  }

  export type toySumOrderByAggregateInput = {
    id?: SortOrder
    toys_producer_id?: SortOrder
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?:
      | Enumerable<Decimal>
      | Enumerable<DecimalJsLike>
      | Enumerable<number>
      | Enumerable<string>
    notIn?:
      | Enumerable<Decimal>
      | Enumerable<DecimalJsLike>
      | Enumerable<number>
      | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?:
      | NestedDecimalWithAggregatesFilter
      | Decimal
      | DecimalJsLike
      | number
      | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ToyRelationFilter = {
    is?: toyWhereInput
    isNot?: toyWhereInput
  }

  export type toy_houseToy_idHouse_idCompoundUniqueInput = {
    toy_id: number
    house_id: number
  }

  export type toy_houseCountOrderByAggregateInput = {
    toy_id?: SortOrder
    house_id?: SortOrder
    amount?: SortOrder
  }

  export type toy_houseAvgOrderByAggregateInput = {
    toy_id?: SortOrder
    house_id?: SortOrder
    amount?: SortOrder
  }

  export type toy_houseMaxOrderByAggregateInput = {
    toy_id?: SortOrder
    house_id?: SortOrder
    amount?: SortOrder
  }

  export type toy_houseMinOrderByAggregateInput = {
    toy_id?: SortOrder
    house_id?: SortOrder
    amount?: SortOrder
  }

  export type toy_houseSumOrderByAggregateInput = {
    toy_id?: SortOrder
    house_id?: SortOrder
    amount?: SortOrder
  }
  export type JsonFilter =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase>,
          Exclude<keyof Required<JsonFilterBase>, 'path'>
        >,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type ToyListRelationFilter = {
    every?: toyWhereInput
    some?: toyWhereInput
    none?: toyWhereInput
  }

  export type toyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type toys_producerCountOrderByAggregateInput = {
    id?: SortOrder
    stock_info?: SortOrder
    hq_location?: SortOrder
  }

  export type toys_producerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type toys_producerMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type toys_producerMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type toys_producerSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase>,
          Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>
        >,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type cat_colorCreateNestedOneWithoutCatInput = {
    create?: XOR<
      cat_colorCreateWithoutCatInput,
      cat_colorUncheckedCreateWithoutCatInput
    >
    connectOrCreate?: cat_colorCreateOrConnectWithoutCatInput
    connect?: cat_colorWhereUniqueInput
  }

  export type house_catCreateNestedManyWithoutCatInput = {
    create?: XOR<
      Enumerable<house_catCreateWithoutCatInput>,
      Enumerable<house_catUncheckedCreateWithoutCatInput>
    >
    connectOrCreate?: Enumerable<house_catCreateOrConnectWithoutCatInput>
    createMany?: house_catCreateManyCatInputEnvelope
    connect?: Enumerable<house_catWhereUniqueInput>
  }

  export type house_catUncheckedCreateNestedManyWithoutCatInput = {
    create?: XOR<
      Enumerable<house_catCreateWithoutCatInput>,
      Enumerable<house_catUncheckedCreateWithoutCatInput>
    >
    connectOrCreate?: Enumerable<house_catCreateOrConnectWithoutCatInput>
    createMany?: house_catCreateManyCatInputEnvelope
    connect?: Enumerable<house_catWhereUniqueInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type cat_colorUpdateOneWithoutCatNestedInput = {
    create?: XOR<
      cat_colorCreateWithoutCatInput,
      cat_colorUncheckedCreateWithoutCatInput
    >
    connectOrCreate?: cat_colorCreateOrConnectWithoutCatInput
    upsert?: cat_colorUpsertWithoutCatInput
    disconnect?: boolean
    delete?: boolean
    connect?: cat_colorWhereUniqueInput
    update?: XOR<
      cat_colorUpdateWithoutCatInput,
      cat_colorUncheckedUpdateWithoutCatInput
    >
  }

  export type house_catUpdateManyWithoutCatNestedInput = {
    create?: XOR<
      Enumerable<house_catCreateWithoutCatInput>,
      Enumerable<house_catUncheckedCreateWithoutCatInput>
    >
    connectOrCreate?: Enumerable<house_catCreateOrConnectWithoutCatInput>
    upsert?: Enumerable<house_catUpsertWithWhereUniqueWithoutCatInput>
    createMany?: house_catCreateManyCatInputEnvelope
    set?: Enumerable<house_catWhereUniqueInput>
    disconnect?: Enumerable<house_catWhereUniqueInput>
    delete?: Enumerable<house_catWhereUniqueInput>
    connect?: Enumerable<house_catWhereUniqueInput>
    update?: Enumerable<house_catUpdateWithWhereUniqueWithoutCatInput>
    updateMany?: Enumerable<house_catUpdateManyWithWhereWithoutCatInput>
    deleteMany?: Enumerable<house_catScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type house_catUncheckedUpdateManyWithoutCatNestedInput = {
    create?: XOR<
      Enumerable<house_catCreateWithoutCatInput>,
      Enumerable<house_catUncheckedCreateWithoutCatInput>
    >
    connectOrCreate?: Enumerable<house_catCreateOrConnectWithoutCatInput>
    upsert?: Enumerable<house_catUpsertWithWhereUniqueWithoutCatInput>
    createMany?: house_catCreateManyCatInputEnvelope
    set?: Enumerable<house_catWhereUniqueInput>
    disconnect?: Enumerable<house_catWhereUniqueInput>
    delete?: Enumerable<house_catWhereUniqueInput>
    connect?: Enumerable<house_catWhereUniqueInput>
    update?: Enumerable<house_catUpdateWithWhereUniqueWithoutCatInput>
    updateMany?: Enumerable<house_catUpdateManyWithWhereWithoutCatInput>
    deleteMany?: Enumerable<house_catScalarWhereInput>
  }

  export type catCreateNestedManyWithoutCat_colorInput = {
    create?: XOR<
      Enumerable<catCreateWithoutCat_colorInput>,
      Enumerable<catUncheckedCreateWithoutCat_colorInput>
    >
    connectOrCreate?: Enumerable<catCreateOrConnectWithoutCat_colorInput>
    createMany?: catCreateManyCat_colorInputEnvelope
    connect?: Enumerable<catWhereUniqueInput>
  }

  export type color_hexCreateNestedOneWithoutCat_colorInput = {
    create?: XOR<
      color_hexCreateWithoutCat_colorInput,
      color_hexUncheckedCreateWithoutCat_colorInput
    >
    connectOrCreate?: color_hexCreateOrConnectWithoutCat_colorInput
    connect?: color_hexWhereUniqueInput
  }

  export type catUncheckedCreateNestedManyWithoutCat_colorInput = {
    create?: XOR<
      Enumerable<catCreateWithoutCat_colorInput>,
      Enumerable<catUncheckedCreateWithoutCat_colorInput>
    >
    connectOrCreate?: Enumerable<catCreateOrConnectWithoutCat_colorInput>
    createMany?: catCreateManyCat_colorInputEnvelope
    connect?: Enumerable<catWhereUniqueInput>
  }

  export type color_hexUncheckedCreateNestedOneWithoutCat_colorInput = {
    create?: XOR<
      color_hexCreateWithoutCat_colorInput,
      color_hexUncheckedCreateWithoutCat_colorInput
    >
    connectOrCreate?: color_hexCreateOrConnectWithoutCat_colorInput
    connect?: color_hexWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type catUpdateManyWithoutCat_colorNestedInput = {
    create?: XOR<
      Enumerable<catCreateWithoutCat_colorInput>,
      Enumerable<catUncheckedCreateWithoutCat_colorInput>
    >
    connectOrCreate?: Enumerable<catCreateOrConnectWithoutCat_colorInput>
    upsert?: Enumerable<catUpsertWithWhereUniqueWithoutCat_colorInput>
    createMany?: catCreateManyCat_colorInputEnvelope
    set?: Enumerable<catWhereUniqueInput>
    disconnect?: Enumerable<catWhereUniqueInput>
    delete?: Enumerable<catWhereUniqueInput>
    connect?: Enumerable<catWhereUniqueInput>
    update?: Enumerable<catUpdateWithWhereUniqueWithoutCat_colorInput>
    updateMany?: Enumerable<catUpdateManyWithWhereWithoutCat_colorInput>
    deleteMany?: Enumerable<catScalarWhereInput>
  }

  export type color_hexUpdateOneWithoutCat_colorNestedInput = {
    create?: XOR<
      color_hexCreateWithoutCat_colorInput,
      color_hexUncheckedCreateWithoutCat_colorInput
    >
    connectOrCreate?: color_hexCreateOrConnectWithoutCat_colorInput
    upsert?: color_hexUpsertWithoutCat_colorInput
    disconnect?: boolean
    delete?: boolean
    connect?: color_hexWhereUniqueInput
    update?: XOR<
      color_hexUpdateWithoutCat_colorInput,
      color_hexUncheckedUpdateWithoutCat_colorInput
    >
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type catUncheckedUpdateManyWithoutCat_colorNestedInput = {
    create?: XOR<
      Enumerable<catCreateWithoutCat_colorInput>,
      Enumerable<catUncheckedCreateWithoutCat_colorInput>
    >
    connectOrCreate?: Enumerable<catCreateOrConnectWithoutCat_colorInput>
    upsert?: Enumerable<catUpsertWithWhereUniqueWithoutCat_colorInput>
    createMany?: catCreateManyCat_colorInputEnvelope
    set?: Enumerable<catWhereUniqueInput>
    disconnect?: Enumerable<catWhereUniqueInput>
    delete?: Enumerable<catWhereUniqueInput>
    connect?: Enumerable<catWhereUniqueInput>
    update?: Enumerable<catUpdateWithWhereUniqueWithoutCat_colorInput>
    updateMany?: Enumerable<catUpdateManyWithWhereWithoutCat_colorInput>
    deleteMany?: Enumerable<catScalarWhereInput>
  }

  export type color_hexUncheckedUpdateOneWithoutCat_colorNestedInput = {
    create?: XOR<
      color_hexCreateWithoutCat_colorInput,
      color_hexUncheckedCreateWithoutCat_colorInput
    >
    connectOrCreate?: color_hexCreateOrConnectWithoutCat_colorInput
    upsert?: color_hexUpsertWithoutCat_colorInput
    disconnect?: boolean
    delete?: boolean
    connect?: color_hexWhereUniqueInput
    update?: XOR<
      color_hexUpdateWithoutCat_colorInput,
      color_hexUncheckedUpdateWithoutCat_colorInput
    >
  }

  export type cat_colorCreateNestedOneWithoutColor_hexInput = {
    create?: XOR<
      cat_colorCreateWithoutColor_hexInput,
      cat_colorUncheckedCreateWithoutColor_hexInput
    >
    connectOrCreate?: cat_colorCreateOrConnectWithoutColor_hexInput
    connect?: cat_colorWhereUniqueInput
  }

  export type cat_colorUpdateOneRequiredWithoutColor_hexNestedInput = {
    create?: XOR<
      cat_colorCreateWithoutColor_hexInput,
      cat_colorUncheckedCreateWithoutColor_hexInput
    >
    connectOrCreate?: cat_colorCreateOrConnectWithoutColor_hexInput
    upsert?: cat_colorUpsertWithoutColor_hexInput
    connect?: cat_colorWhereUniqueInput
    update?: XOR<
      cat_colorUpdateWithoutColor_hexInput,
      cat_colorUncheckedUpdateWithoutColor_hexInput
    >
  }

  export type house_catCreateNestedManyWithoutHouseInput = {
    create?: XOR<
      Enumerable<house_catCreateWithoutHouseInput>,
      Enumerable<house_catUncheckedCreateWithoutHouseInput>
    >
    connectOrCreate?: Enumerable<house_catCreateOrConnectWithoutHouseInput>
    createMany?: house_catCreateManyHouseInputEnvelope
    connect?: Enumerable<house_catWhereUniqueInput>
  }

  export type toy_houseCreateNestedManyWithoutHouseInput = {
    create?: XOR<
      Enumerable<toy_houseCreateWithoutHouseInput>,
      Enumerable<toy_houseUncheckedCreateWithoutHouseInput>
    >
    connectOrCreate?: Enumerable<toy_houseCreateOrConnectWithoutHouseInput>
    createMany?: toy_houseCreateManyHouseInputEnvelope
    connect?: Enumerable<toy_houseWhereUniqueInput>
  }

  export type house_catUncheckedCreateNestedManyWithoutHouseInput = {
    create?: XOR<
      Enumerable<house_catCreateWithoutHouseInput>,
      Enumerable<house_catUncheckedCreateWithoutHouseInput>
    >
    connectOrCreate?: Enumerable<house_catCreateOrConnectWithoutHouseInput>
    createMany?: house_catCreateManyHouseInputEnvelope
    connect?: Enumerable<house_catWhereUniqueInput>
  }

  export type toy_houseUncheckedCreateNestedManyWithoutHouseInput = {
    create?: XOR<
      Enumerable<toy_houseCreateWithoutHouseInput>,
      Enumerable<toy_houseUncheckedCreateWithoutHouseInput>
    >
    connectOrCreate?: Enumerable<toy_houseCreateOrConnectWithoutHouseInput>
    createMany?: toy_houseCreateManyHouseInputEnvelope
    connect?: Enumerable<toy_houseWhereUniqueInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type house_catUpdateManyWithoutHouseNestedInput = {
    create?: XOR<
      Enumerable<house_catCreateWithoutHouseInput>,
      Enumerable<house_catUncheckedCreateWithoutHouseInput>
    >
    connectOrCreate?: Enumerable<house_catCreateOrConnectWithoutHouseInput>
    upsert?: Enumerable<house_catUpsertWithWhereUniqueWithoutHouseInput>
    createMany?: house_catCreateManyHouseInputEnvelope
    set?: Enumerable<house_catWhereUniqueInput>
    disconnect?: Enumerable<house_catWhereUniqueInput>
    delete?: Enumerable<house_catWhereUniqueInput>
    connect?: Enumerable<house_catWhereUniqueInput>
    update?: Enumerable<house_catUpdateWithWhereUniqueWithoutHouseInput>
    updateMany?: Enumerable<house_catUpdateManyWithWhereWithoutHouseInput>
    deleteMany?: Enumerable<house_catScalarWhereInput>
  }

  export type toy_houseUpdateManyWithoutHouseNestedInput = {
    create?: XOR<
      Enumerable<toy_houseCreateWithoutHouseInput>,
      Enumerable<toy_houseUncheckedCreateWithoutHouseInput>
    >
    connectOrCreate?: Enumerable<toy_houseCreateOrConnectWithoutHouseInput>
    upsert?: Enumerable<toy_houseUpsertWithWhereUniqueWithoutHouseInput>
    createMany?: toy_houseCreateManyHouseInputEnvelope
    set?: Enumerable<toy_houseWhereUniqueInput>
    disconnect?: Enumerable<toy_houseWhereUniqueInput>
    delete?: Enumerable<toy_houseWhereUniqueInput>
    connect?: Enumerable<toy_houseWhereUniqueInput>
    update?: Enumerable<toy_houseUpdateWithWhereUniqueWithoutHouseInput>
    updateMany?: Enumerable<toy_houseUpdateManyWithWhereWithoutHouseInput>
    deleteMany?: Enumerable<toy_houseScalarWhereInput>
  }

  export type house_catUncheckedUpdateManyWithoutHouseNestedInput = {
    create?: XOR<
      Enumerable<house_catCreateWithoutHouseInput>,
      Enumerable<house_catUncheckedCreateWithoutHouseInput>
    >
    connectOrCreate?: Enumerable<house_catCreateOrConnectWithoutHouseInput>
    upsert?: Enumerable<house_catUpsertWithWhereUniqueWithoutHouseInput>
    createMany?: house_catCreateManyHouseInputEnvelope
    set?: Enumerable<house_catWhereUniqueInput>
    disconnect?: Enumerable<house_catWhereUniqueInput>
    delete?: Enumerable<house_catWhereUniqueInput>
    connect?: Enumerable<house_catWhereUniqueInput>
    update?: Enumerable<house_catUpdateWithWhereUniqueWithoutHouseInput>
    updateMany?: Enumerable<house_catUpdateManyWithWhereWithoutHouseInput>
    deleteMany?: Enumerable<house_catScalarWhereInput>
  }

  export type toy_houseUncheckedUpdateManyWithoutHouseNestedInput = {
    create?: XOR<
      Enumerable<toy_houseCreateWithoutHouseInput>,
      Enumerable<toy_houseUncheckedCreateWithoutHouseInput>
    >
    connectOrCreate?: Enumerable<toy_houseCreateOrConnectWithoutHouseInput>
    upsert?: Enumerable<toy_houseUpsertWithWhereUniqueWithoutHouseInput>
    createMany?: toy_houseCreateManyHouseInputEnvelope
    set?: Enumerable<toy_houseWhereUniqueInput>
    disconnect?: Enumerable<toy_houseWhereUniqueInput>
    delete?: Enumerable<toy_houseWhereUniqueInput>
    connect?: Enumerable<toy_houseWhereUniqueInput>
    update?: Enumerable<toy_houseUpdateWithWhereUniqueWithoutHouseInput>
    updateMany?: Enumerable<toy_houseUpdateManyWithWhereWithoutHouseInput>
    deleteMany?: Enumerable<toy_houseScalarWhereInput>
  }

  export type catCreateNestedOneWithoutHouse_catInput = {
    create?: XOR<
      catCreateWithoutHouse_catInput,
      catUncheckedCreateWithoutHouse_catInput
    >
    connectOrCreate?: catCreateOrConnectWithoutHouse_catInput
    connect?: catWhereUniqueInput
  }

  export type houseCreateNestedOneWithoutHouse_catInput = {
    create?: XOR<
      houseCreateWithoutHouse_catInput,
      houseUncheckedCreateWithoutHouse_catInput
    >
    connectOrCreate?: houseCreateOrConnectWithoutHouse_catInput
    connect?: houseWhereUniqueInput
  }

  export type catUpdateOneRequiredWithoutHouse_catNestedInput = {
    create?: XOR<
      catCreateWithoutHouse_catInput,
      catUncheckedCreateWithoutHouse_catInput
    >
    connectOrCreate?: catCreateOrConnectWithoutHouse_catInput
    upsert?: catUpsertWithoutHouse_catInput
    connect?: catWhereUniqueInput
    update?: XOR<
      catUpdateWithoutHouse_catInput,
      catUncheckedUpdateWithoutHouse_catInput
    >
  }

  export type houseUpdateOneRequiredWithoutHouse_catNestedInput = {
    create?: XOR<
      houseCreateWithoutHouse_catInput,
      houseUncheckedCreateWithoutHouse_catInput
    >
    connectOrCreate?: houseCreateOrConnectWithoutHouse_catInput
    upsert?: houseUpsertWithoutHouse_catInput
    connect?: houseWhereUniqueInput
    update?: XOR<
      houseUpdateWithoutHouse_catInput,
      houseUncheckedUpdateWithoutHouse_catInput
    >
  }

  export type toys_producerCreateNestedOneWithoutToyInput = {
    create?: XOR<
      toys_producerCreateWithoutToyInput,
      toys_producerUncheckedCreateWithoutToyInput
    >
    connectOrCreate?: toys_producerCreateOrConnectWithoutToyInput
    connect?: toys_producerWhereUniqueInput
  }

  export type toy_houseCreateNestedManyWithoutToyInput = {
    create?: XOR<
      Enumerable<toy_houseCreateWithoutToyInput>,
      Enumerable<toy_houseUncheckedCreateWithoutToyInput>
    >
    connectOrCreate?: Enumerable<toy_houseCreateOrConnectWithoutToyInput>
    createMany?: toy_houseCreateManyToyInputEnvelope
    connect?: Enumerable<toy_houseWhereUniqueInput>
  }

  export type toy_houseUncheckedCreateNestedManyWithoutToyInput = {
    create?: XOR<
      Enumerable<toy_houseCreateWithoutToyInput>,
      Enumerable<toy_houseUncheckedCreateWithoutToyInput>
    >
    connectOrCreate?: Enumerable<toy_houseCreateOrConnectWithoutToyInput>
    createMany?: toy_houseCreateManyToyInputEnvelope
    connect?: Enumerable<toy_houseWhereUniqueInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type toys_producerUpdateOneWithoutToyNestedInput = {
    create?: XOR<
      toys_producerCreateWithoutToyInput,
      toys_producerUncheckedCreateWithoutToyInput
    >
    connectOrCreate?: toys_producerCreateOrConnectWithoutToyInput
    upsert?: toys_producerUpsertWithoutToyInput
    disconnect?: boolean
    delete?: boolean
    connect?: toys_producerWhereUniqueInput
    update?: XOR<
      toys_producerUpdateWithoutToyInput,
      toys_producerUncheckedUpdateWithoutToyInput
    >
  }

  export type toy_houseUpdateManyWithoutToyNestedInput = {
    create?: XOR<
      Enumerable<toy_houseCreateWithoutToyInput>,
      Enumerable<toy_houseUncheckedCreateWithoutToyInput>
    >
    connectOrCreate?: Enumerable<toy_houseCreateOrConnectWithoutToyInput>
    upsert?: Enumerable<toy_houseUpsertWithWhereUniqueWithoutToyInput>
    createMany?: toy_houseCreateManyToyInputEnvelope
    set?: Enumerable<toy_houseWhereUniqueInput>
    disconnect?: Enumerable<toy_houseWhereUniqueInput>
    delete?: Enumerable<toy_houseWhereUniqueInput>
    connect?: Enumerable<toy_houseWhereUniqueInput>
    update?: Enumerable<toy_houseUpdateWithWhereUniqueWithoutToyInput>
    updateMany?: Enumerable<toy_houseUpdateManyWithWhereWithoutToyInput>
    deleteMany?: Enumerable<toy_houseScalarWhereInput>
  }

  export type toy_houseUncheckedUpdateManyWithoutToyNestedInput = {
    create?: XOR<
      Enumerable<toy_houseCreateWithoutToyInput>,
      Enumerable<toy_houseUncheckedCreateWithoutToyInput>
    >
    connectOrCreate?: Enumerable<toy_houseCreateOrConnectWithoutToyInput>
    upsert?: Enumerable<toy_houseUpsertWithWhereUniqueWithoutToyInput>
    createMany?: toy_houseCreateManyToyInputEnvelope
    set?: Enumerable<toy_houseWhereUniqueInput>
    disconnect?: Enumerable<toy_houseWhereUniqueInput>
    delete?: Enumerable<toy_houseWhereUniqueInput>
    connect?: Enumerable<toy_houseWhereUniqueInput>
    update?: Enumerable<toy_houseUpdateWithWhereUniqueWithoutToyInput>
    updateMany?: Enumerable<toy_houseUpdateManyWithWhereWithoutToyInput>
    deleteMany?: Enumerable<toy_houseScalarWhereInput>
  }

  export type houseCreateNestedOneWithoutToy_houseInput = {
    create?: XOR<
      houseCreateWithoutToy_houseInput,
      houseUncheckedCreateWithoutToy_houseInput
    >
    connectOrCreate?: houseCreateOrConnectWithoutToy_houseInput
    connect?: houseWhereUniqueInput
  }

  export type toyCreateNestedOneWithoutToy_houseInput = {
    create?: XOR<
      toyCreateWithoutToy_houseInput,
      toyUncheckedCreateWithoutToy_houseInput
    >
    connectOrCreate?: toyCreateOrConnectWithoutToy_houseInput
    connect?: toyWhereUniqueInput
  }

  export type houseUpdateOneRequiredWithoutToy_houseNestedInput = {
    create?: XOR<
      houseCreateWithoutToy_houseInput,
      houseUncheckedCreateWithoutToy_houseInput
    >
    connectOrCreate?: houseCreateOrConnectWithoutToy_houseInput
    upsert?: houseUpsertWithoutToy_houseInput
    connect?: houseWhereUniqueInput
    update?: XOR<
      houseUpdateWithoutToy_houseInput,
      houseUncheckedUpdateWithoutToy_houseInput
    >
  }

  export type toyUpdateOneRequiredWithoutToy_houseNestedInput = {
    create?: XOR<
      toyCreateWithoutToy_houseInput,
      toyUncheckedCreateWithoutToy_houseInput
    >
    connectOrCreate?: toyCreateOrConnectWithoutToy_houseInput
    upsert?: toyUpsertWithoutToy_houseInput
    connect?: toyWhereUniqueInput
    update?: XOR<
      toyUpdateWithoutToy_houseInput,
      toyUncheckedUpdateWithoutToy_houseInput
    >
  }

  export type toyCreateNestedManyWithoutToys_producerInput = {
    create?: XOR<
      Enumerable<toyCreateWithoutToys_producerInput>,
      Enumerable<toyUncheckedCreateWithoutToys_producerInput>
    >
    connectOrCreate?: Enumerable<toyCreateOrConnectWithoutToys_producerInput>
    createMany?: toyCreateManyToys_producerInputEnvelope
    connect?: Enumerable<toyWhereUniqueInput>
  }

  export type toyUncheckedCreateNestedManyWithoutToys_producerInput = {
    create?: XOR<
      Enumerable<toyCreateWithoutToys_producerInput>,
      Enumerable<toyUncheckedCreateWithoutToys_producerInput>
    >
    connectOrCreate?: Enumerable<toyCreateOrConnectWithoutToys_producerInput>
    createMany?: toyCreateManyToys_producerInputEnvelope
    connect?: Enumerable<toyWhereUniqueInput>
  }

  export type toyUpdateManyWithoutToys_producerNestedInput = {
    create?: XOR<
      Enumerable<toyCreateWithoutToys_producerInput>,
      Enumerable<toyUncheckedCreateWithoutToys_producerInput>
    >
    connectOrCreate?: Enumerable<toyCreateOrConnectWithoutToys_producerInput>
    upsert?: Enumerable<toyUpsertWithWhereUniqueWithoutToys_producerInput>
    createMany?: toyCreateManyToys_producerInputEnvelope
    set?: Enumerable<toyWhereUniqueInput>
    disconnect?: Enumerable<toyWhereUniqueInput>
    delete?: Enumerable<toyWhereUniqueInput>
    connect?: Enumerable<toyWhereUniqueInput>
    update?: Enumerable<toyUpdateWithWhereUniqueWithoutToys_producerInput>
    updateMany?: Enumerable<toyUpdateManyWithWhereWithoutToys_producerInput>
    deleteMany?: Enumerable<toyScalarWhereInput>
  }

  export type toyUncheckedUpdateManyWithoutToys_producerNestedInput = {
    create?: XOR<
      Enumerable<toyCreateWithoutToys_producerInput>,
      Enumerable<toyUncheckedCreateWithoutToys_producerInput>
    >
    connectOrCreate?: Enumerable<toyCreateOrConnectWithoutToys_producerInput>
    upsert?: Enumerable<toyUpsertWithWhereUniqueWithoutToys_producerInput>
    createMany?: toyCreateManyToys_producerInputEnvelope
    set?: Enumerable<toyWhereUniqueInput>
    disconnect?: Enumerable<toyWhereUniqueInput>
    delete?: Enumerable<toyWhereUniqueInput>
    connect?: Enumerable<toyWhereUniqueInput>
    update?: Enumerable<toyUpdateWithWhereUniqueWithoutToys_producerInput>
    updateMany?: Enumerable<toyUpdateManyWithWhereWithoutToys_producerInput>
    deleteMany?: Enumerable<toyScalarWhereInput>
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?:
      | Enumerable<Decimal>
      | Enumerable<DecimalJsLike>
      | Enumerable<number>
      | Enumerable<string>
    notIn?:
      | Enumerable<Decimal>
      | Enumerable<DecimalJsLike>
      | Enumerable<number>
      | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?:
      | Enumerable<Decimal>
      | Enumerable<DecimalJsLike>
      | Enumerable<number>
      | Enumerable<string>
    notIn?:
      | Enumerable<Decimal>
      | Enumerable<DecimalJsLike>
      | Enumerable<number>
      | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?:
      | NestedDecimalWithAggregatesFilter
      | Decimal
      | DecimalJsLike
      | number
      | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type NestedJsonFilter =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase>,
          Exclude<keyof Required<NestedJsonFilterBase>, 'path'>
        >,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type cat_colorCreateWithoutCatInput = {
    color_name: string
    color_hex?: color_hexCreateNestedOneWithoutCat_colorInput
  }

  export type cat_colorUncheckedCreateWithoutCatInput = {
    id?: number
    color_name: string
    color_hex?: color_hexUncheckedCreateNestedOneWithoutCat_colorInput
  }

  export type cat_colorCreateOrConnectWithoutCatInput = {
    where: cat_colorWhereUniqueInput
    create: XOR<
      cat_colorCreateWithoutCatInput,
      cat_colorUncheckedCreateWithoutCatInput
    >
  }

  export type house_catCreateWithoutCatInput = {
    house: houseCreateNestedOneWithoutHouse_catInput
  }

  export type house_catUncheckedCreateWithoutCatInput = {
    house_id: number
  }

  export type house_catCreateOrConnectWithoutCatInput = {
    where: house_catWhereUniqueInput
    create: XOR<
      house_catCreateWithoutCatInput,
      house_catUncheckedCreateWithoutCatInput
    >
  }

  export type house_catCreateManyCatInputEnvelope = {
    data: Enumerable<house_catCreateManyCatInput>
    skipDuplicates?: boolean
  }

  export type cat_colorUpsertWithoutCatInput = {
    update: XOR<
      cat_colorUpdateWithoutCatInput,
      cat_colorUncheckedUpdateWithoutCatInput
    >
    create: XOR<
      cat_colorCreateWithoutCatInput,
      cat_colorUncheckedCreateWithoutCatInput
    >
  }

  export type cat_colorUpdateWithoutCatInput = {
    color_name?: StringFieldUpdateOperationsInput | string
    color_hex?: color_hexUpdateOneWithoutCat_colorNestedInput
  }

  export type cat_colorUncheckedUpdateWithoutCatInput = {
    id?: IntFieldUpdateOperationsInput | number
    color_name?: StringFieldUpdateOperationsInput | string
    color_hex?: color_hexUncheckedUpdateOneWithoutCat_colorNestedInput
  }

  export type house_catUpsertWithWhereUniqueWithoutCatInput = {
    where: house_catWhereUniqueInput
    update: XOR<
      house_catUpdateWithoutCatInput,
      house_catUncheckedUpdateWithoutCatInput
    >
    create: XOR<
      house_catCreateWithoutCatInput,
      house_catUncheckedCreateWithoutCatInput
    >
  }

  export type house_catUpdateWithWhereUniqueWithoutCatInput = {
    where: house_catWhereUniqueInput
    data: XOR<
      house_catUpdateWithoutCatInput,
      house_catUncheckedUpdateWithoutCatInput
    >
  }

  export type house_catUpdateManyWithWhereWithoutCatInput = {
    where: house_catScalarWhereInput
    data: XOR<
      house_catUpdateManyMutationInput,
      house_catUncheckedUpdateManyWithoutHouse_catInput
    >
  }

  export type house_catScalarWhereInput = {
    AND?: Enumerable<house_catScalarWhereInput>
    OR?: Enumerable<house_catScalarWhereInput>
    NOT?: Enumerable<house_catScalarWhereInput>
    house_id?: IntFilter | number
    cat_id?: BigIntFilter | bigint | number
  }

  export type catCreateWithoutCat_colorInput = {
    id?: bigint | number
    cat_name?: string | null
    date_of_birth?: Date | string | null
    house_cat?: house_catCreateNestedManyWithoutCatInput
  }

  export type catUncheckedCreateWithoutCat_colorInput = {
    id?: bigint | number
    cat_name?: string | null
    date_of_birth?: Date | string | null
    house_cat?: house_catUncheckedCreateNestedManyWithoutCatInput
  }

  export type catCreateOrConnectWithoutCat_colorInput = {
    where: catWhereUniqueInput
    create: XOR<
      catCreateWithoutCat_colorInput,
      catUncheckedCreateWithoutCat_colorInput
    >
  }

  export type catCreateManyCat_colorInputEnvelope = {
    data: Enumerable<catCreateManyCat_colorInput>
    skipDuplicates?: boolean
  }

  export type color_hexCreateWithoutCat_colorInput = {
    hex_code: string
  }

  export type color_hexUncheckedCreateWithoutCat_colorInput = {
    hex_code: string
  }

  export type color_hexCreateOrConnectWithoutCat_colorInput = {
    where: color_hexWhereUniqueInput
    create: XOR<
      color_hexCreateWithoutCat_colorInput,
      color_hexUncheckedCreateWithoutCat_colorInput
    >
  }

  export type catUpsertWithWhereUniqueWithoutCat_colorInput = {
    where: catWhereUniqueInput
    update: XOR<
      catUpdateWithoutCat_colorInput,
      catUncheckedUpdateWithoutCat_colorInput
    >
    create: XOR<
      catCreateWithoutCat_colorInput,
      catUncheckedCreateWithoutCat_colorInput
    >
  }

  export type catUpdateWithWhereUniqueWithoutCat_colorInput = {
    where: catWhereUniqueInput
    data: XOR<
      catUpdateWithoutCat_colorInput,
      catUncheckedUpdateWithoutCat_colorInput
    >
  }

  export type catUpdateManyWithWhereWithoutCat_colorInput = {
    where: catScalarWhereInput
    data: XOR<catUpdateManyMutationInput, catUncheckedUpdateManyWithoutCatInput>
  }

  export type catScalarWhereInput = {
    AND?: Enumerable<catScalarWhereInput>
    OR?: Enumerable<catScalarWhereInput>
    NOT?: Enumerable<catScalarWhereInput>
    id?: BigIntFilter | bigint | number
    cat_color_id?: IntNullableFilter | number | null
    cat_name?: StringNullableFilter | string | null
    date_of_birth?: DateTimeNullableFilter | Date | string | null
  }

  export type color_hexUpsertWithoutCat_colorInput = {
    update: XOR<
      color_hexUpdateWithoutCat_colorInput,
      color_hexUncheckedUpdateWithoutCat_colorInput
    >
    create: XOR<
      color_hexCreateWithoutCat_colorInput,
      color_hexUncheckedCreateWithoutCat_colorInput
    >
  }

  export type color_hexUpdateWithoutCat_colorInput = {
    hex_code?: StringFieldUpdateOperationsInput | string
  }

  export type color_hexUncheckedUpdateWithoutCat_colorInput = {
    hex_code?: StringFieldUpdateOperationsInput | string
  }

  export type cat_colorCreateWithoutColor_hexInput = {
    color_name: string
    cat?: catCreateNestedManyWithoutCat_colorInput
  }

  export type cat_colorUncheckedCreateWithoutColor_hexInput = {
    id?: number
    color_name: string
    cat?: catUncheckedCreateNestedManyWithoutCat_colorInput
  }

  export type cat_colorCreateOrConnectWithoutColor_hexInput = {
    where: cat_colorWhereUniqueInput
    create: XOR<
      cat_colorCreateWithoutColor_hexInput,
      cat_colorUncheckedCreateWithoutColor_hexInput
    >
  }

  export type cat_colorUpsertWithoutColor_hexInput = {
    update: XOR<
      cat_colorUpdateWithoutColor_hexInput,
      cat_colorUncheckedUpdateWithoutColor_hexInput
    >
    create: XOR<
      cat_colorCreateWithoutColor_hexInput,
      cat_colorUncheckedCreateWithoutColor_hexInput
    >
  }

  export type cat_colorUpdateWithoutColor_hexInput = {
    color_name?: StringFieldUpdateOperationsInput | string
    cat?: catUpdateManyWithoutCat_colorNestedInput
  }

  export type cat_colorUncheckedUpdateWithoutColor_hexInput = {
    id?: IntFieldUpdateOperationsInput | number
    color_name?: StringFieldUpdateOperationsInput | string
    cat?: catUncheckedUpdateManyWithoutCat_colorNestedInput
  }

  export type house_catCreateWithoutHouseInput = {
    cat: catCreateNestedOneWithoutHouse_catInput
  }

  export type house_catUncheckedCreateWithoutHouseInput = {
    cat_id: bigint | number
  }

  export type house_catCreateOrConnectWithoutHouseInput = {
    where: house_catWhereUniqueInput
    create: XOR<
      house_catCreateWithoutHouseInput,
      house_catUncheckedCreateWithoutHouseInput
    >
  }

  export type house_catCreateManyHouseInputEnvelope = {
    data: Enumerable<house_catCreateManyHouseInput>
    skipDuplicates?: boolean
  }

  export type toy_houseCreateWithoutHouseInput = {
    amount?: number
    toy: toyCreateNestedOneWithoutToy_houseInput
  }

  export type toy_houseUncheckedCreateWithoutHouseInput = {
    toy_id: number
    amount?: number
  }

  export type toy_houseCreateOrConnectWithoutHouseInput = {
    where: toy_houseWhereUniqueInput
    create: XOR<
      toy_houseCreateWithoutHouseInput,
      toy_houseUncheckedCreateWithoutHouseInput
    >
  }

  export type toy_houseCreateManyHouseInputEnvelope = {
    data: Enumerable<toy_houseCreateManyHouseInput>
    skipDuplicates?: boolean
  }

  export type house_catUpsertWithWhereUniqueWithoutHouseInput = {
    where: house_catWhereUniqueInput
    update: XOR<
      house_catUpdateWithoutHouseInput,
      house_catUncheckedUpdateWithoutHouseInput
    >
    create: XOR<
      house_catCreateWithoutHouseInput,
      house_catUncheckedCreateWithoutHouseInput
    >
  }

  export type house_catUpdateWithWhereUniqueWithoutHouseInput = {
    where: house_catWhereUniqueInput
    data: XOR<
      house_catUpdateWithoutHouseInput,
      house_catUncheckedUpdateWithoutHouseInput
    >
  }

  export type house_catUpdateManyWithWhereWithoutHouseInput = {
    where: house_catScalarWhereInput
    data: XOR<
      house_catUpdateManyMutationInput,
      house_catUncheckedUpdateManyWithoutHouse_catInput
    >
  }

  export type toy_houseUpsertWithWhereUniqueWithoutHouseInput = {
    where: toy_houseWhereUniqueInput
    update: XOR<
      toy_houseUpdateWithoutHouseInput,
      toy_houseUncheckedUpdateWithoutHouseInput
    >
    create: XOR<
      toy_houseCreateWithoutHouseInput,
      toy_houseUncheckedCreateWithoutHouseInput
    >
  }

  export type toy_houseUpdateWithWhereUniqueWithoutHouseInput = {
    where: toy_houseWhereUniqueInput
    data: XOR<
      toy_houseUpdateWithoutHouseInput,
      toy_houseUncheckedUpdateWithoutHouseInput
    >
  }

  export type toy_houseUpdateManyWithWhereWithoutHouseInput = {
    where: toy_houseScalarWhereInput
    data: XOR<
      toy_houseUpdateManyMutationInput,
      toy_houseUncheckedUpdateManyWithoutToy_houseInput
    >
  }

  export type toy_houseScalarWhereInput = {
    AND?: Enumerable<toy_houseScalarWhereInput>
    OR?: Enumerable<toy_houseScalarWhereInput>
    NOT?: Enumerable<toy_houseScalarWhereInput>
    toy_id?: IntFilter | number
    house_id?: IntFilter | number
    amount?: IntFilter | number
  }

  export type catCreateWithoutHouse_catInput = {
    id?: bigint | number
    cat_name?: string | null
    date_of_birth?: Date | string | null
    cat_color?: cat_colorCreateNestedOneWithoutCatInput
  }

  export type catUncheckedCreateWithoutHouse_catInput = {
    id?: bigint | number
    cat_color_id?: number | null
    cat_name?: string | null
    date_of_birth?: Date | string | null
  }

  export type catCreateOrConnectWithoutHouse_catInput = {
    where: catWhereUniqueInput
    create: XOR<
      catCreateWithoutHouse_catInput,
      catUncheckedCreateWithoutHouse_catInput
    >
  }

  export type houseCreateWithoutHouse_catInput = {
    house_address?: string | null
    has_dog?: boolean | null
    toy_house?: toy_houseCreateNestedManyWithoutHouseInput
  }

  export type houseUncheckedCreateWithoutHouse_catInput = {
    id?: number
    house_address?: string | null
    has_dog?: boolean | null
    toy_house?: toy_houseUncheckedCreateNestedManyWithoutHouseInput
  }

  export type houseCreateOrConnectWithoutHouse_catInput = {
    where: houseWhereUniqueInput
    create: XOR<
      houseCreateWithoutHouse_catInput,
      houseUncheckedCreateWithoutHouse_catInput
    >
  }

  export type catUpsertWithoutHouse_catInput = {
    update: XOR<
      catUpdateWithoutHouse_catInput,
      catUncheckedUpdateWithoutHouse_catInput
    >
    create: XOR<
      catCreateWithoutHouse_catInput,
      catUncheckedCreateWithoutHouse_catInput
    >
  }

  export type catUpdateWithoutHouse_catInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cat_name?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    cat_color?: cat_colorUpdateOneWithoutCatNestedInput
  }

  export type catUncheckedUpdateWithoutHouse_catInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cat_color_id?: NullableIntFieldUpdateOperationsInput | number | null
    cat_name?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type houseUpsertWithoutHouse_catInput = {
    update: XOR<
      houseUpdateWithoutHouse_catInput,
      houseUncheckedUpdateWithoutHouse_catInput
    >
    create: XOR<
      houseCreateWithoutHouse_catInput,
      houseUncheckedCreateWithoutHouse_catInput
    >
  }

  export type houseUpdateWithoutHouse_catInput = {
    house_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_dog?: NullableBoolFieldUpdateOperationsInput | boolean | null
    toy_house?: toy_houseUpdateManyWithoutHouseNestedInput
  }

  export type houseUncheckedUpdateWithoutHouse_catInput = {
    id?: IntFieldUpdateOperationsInput | number
    house_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_dog?: NullableBoolFieldUpdateOperationsInput | boolean | null
    toy_house?: toy_houseUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type toys_producerCreateWithoutToyInput = {
    stock_info: JsonNullValueInput | InputJsonValue
    hq_location: JsonNullValueInput | InputJsonValue
  }

  export type toys_producerUncheckedCreateWithoutToyInput = {
    id?: number
    stock_info: JsonNullValueInput | InputJsonValue
    hq_location: JsonNullValueInput | InputJsonValue
  }

  export type toys_producerCreateOrConnectWithoutToyInput = {
    where: toys_producerWhereUniqueInput
    create: XOR<
      toys_producerCreateWithoutToyInput,
      toys_producerUncheckedCreateWithoutToyInput
    >
  }

  export type toy_houseCreateWithoutToyInput = {
    amount?: number
    house: houseCreateNestedOneWithoutToy_houseInput
  }

  export type toy_houseUncheckedCreateWithoutToyInput = {
    house_id: number
    amount?: number
  }

  export type toy_houseCreateOrConnectWithoutToyInput = {
    where: toy_houseWhereUniqueInput
    create: XOR<
      toy_houseCreateWithoutToyInput,
      toy_houseUncheckedCreateWithoutToyInput
    >
  }

  export type toy_houseCreateManyToyInputEnvelope = {
    data: Enumerable<toy_houseCreateManyToyInput>
    skipDuplicates?: boolean
  }

  export type toys_producerUpsertWithoutToyInput = {
    update: XOR<
      toys_producerUpdateWithoutToyInput,
      toys_producerUncheckedUpdateWithoutToyInput
    >
    create: XOR<
      toys_producerCreateWithoutToyInput,
      toys_producerUncheckedCreateWithoutToyInput
    >
  }

  export type toys_producerUpdateWithoutToyInput = {
    stock_info?: JsonNullValueInput | InputJsonValue
    hq_location?: JsonNullValueInput | InputJsonValue
  }

  export type toys_producerUncheckedUpdateWithoutToyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stock_info?: JsonNullValueInput | InputJsonValue
    hq_location?: JsonNullValueInput | InputJsonValue
  }

  export type toy_houseUpsertWithWhereUniqueWithoutToyInput = {
    where: toy_houseWhereUniqueInput
    update: XOR<
      toy_houseUpdateWithoutToyInput,
      toy_houseUncheckedUpdateWithoutToyInput
    >
    create: XOR<
      toy_houseCreateWithoutToyInput,
      toy_houseUncheckedCreateWithoutToyInput
    >
  }

  export type toy_houseUpdateWithWhereUniqueWithoutToyInput = {
    where: toy_houseWhereUniqueInput
    data: XOR<
      toy_houseUpdateWithoutToyInput,
      toy_houseUncheckedUpdateWithoutToyInput
    >
  }

  export type toy_houseUpdateManyWithWhereWithoutToyInput = {
    where: toy_houseScalarWhereInput
    data: XOR<
      toy_houseUpdateManyMutationInput,
      toy_houseUncheckedUpdateManyWithoutToy_houseInput
    >
  }

  export type houseCreateWithoutToy_houseInput = {
    house_address?: string | null
    has_dog?: boolean | null
    house_cat?: house_catCreateNestedManyWithoutHouseInput
  }

  export type houseUncheckedCreateWithoutToy_houseInput = {
    id?: number
    house_address?: string | null
    has_dog?: boolean | null
    house_cat?: house_catUncheckedCreateNestedManyWithoutHouseInput
  }

  export type houseCreateOrConnectWithoutToy_houseInput = {
    where: houseWhereUniqueInput
    create: XOR<
      houseCreateWithoutToy_houseInput,
      houseUncheckedCreateWithoutToy_houseInput
    >
  }

  export type toyCreateWithoutToy_houseInput = {
    toy_name: string
    barcode: string
    price: Decimal | DecimalJsLike | number | string
    currency: string
    naughty?: string | null
    date_introduced: Date | string
    toys_producer?: toys_producerCreateNestedOneWithoutToyInput
  }

  export type toyUncheckedCreateWithoutToy_houseInput = {
    id?: number
    toys_producer_id?: number | null
    toy_name: string
    barcode: string
    price: Decimal | DecimalJsLike | number | string
    currency: string
    naughty?: string | null
    date_introduced: Date | string
  }

  export type toyCreateOrConnectWithoutToy_houseInput = {
    where: toyWhereUniqueInput
    create: XOR<
      toyCreateWithoutToy_houseInput,
      toyUncheckedCreateWithoutToy_houseInput
    >
  }

  export type houseUpsertWithoutToy_houseInput = {
    update: XOR<
      houseUpdateWithoutToy_houseInput,
      houseUncheckedUpdateWithoutToy_houseInput
    >
    create: XOR<
      houseCreateWithoutToy_houseInput,
      houseUncheckedCreateWithoutToy_houseInput
    >
  }

  export type houseUpdateWithoutToy_houseInput = {
    house_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_dog?: NullableBoolFieldUpdateOperationsInput | boolean | null
    house_cat?: house_catUpdateManyWithoutHouseNestedInput
  }

  export type houseUncheckedUpdateWithoutToy_houseInput = {
    id?: IntFieldUpdateOperationsInput | number
    house_address?: NullableStringFieldUpdateOperationsInput | string | null
    has_dog?: NullableBoolFieldUpdateOperationsInput | boolean | null
    house_cat?: house_catUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type toyUpsertWithoutToy_houseInput = {
    update: XOR<
      toyUpdateWithoutToy_houseInput,
      toyUncheckedUpdateWithoutToy_houseInput
    >
    create: XOR<
      toyCreateWithoutToy_houseInput,
      toyUncheckedCreateWithoutToy_houseInput
    >
  }

  export type toyUpdateWithoutToy_houseInput = {
    toy_name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    naughty?: NullableStringFieldUpdateOperationsInput | string | null
    date_introduced?: DateTimeFieldUpdateOperationsInput | Date | string
    toys_producer?: toys_producerUpdateOneWithoutToyNestedInput
  }

  export type toyUncheckedUpdateWithoutToy_houseInput = {
    id?: IntFieldUpdateOperationsInput | number
    toys_producer_id?: NullableIntFieldUpdateOperationsInput | number | null
    toy_name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    naughty?: NullableStringFieldUpdateOperationsInput | string | null
    date_introduced?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type toyCreateWithoutToys_producerInput = {
    toy_name: string
    barcode: string
    price: Decimal | DecimalJsLike | number | string
    currency: string
    naughty?: string | null
    date_introduced: Date | string
    toy_house?: toy_houseCreateNestedManyWithoutToyInput
  }

  export type toyUncheckedCreateWithoutToys_producerInput = {
    id?: number
    toy_name: string
    barcode: string
    price: Decimal | DecimalJsLike | number | string
    currency: string
    naughty?: string | null
    date_introduced: Date | string
    toy_house?: toy_houseUncheckedCreateNestedManyWithoutToyInput
  }

  export type toyCreateOrConnectWithoutToys_producerInput = {
    where: toyWhereUniqueInput
    create: XOR<
      toyCreateWithoutToys_producerInput,
      toyUncheckedCreateWithoutToys_producerInput
    >
  }

  export type toyCreateManyToys_producerInputEnvelope = {
    data: Enumerable<toyCreateManyToys_producerInput>
    skipDuplicates?: boolean
  }

  export type toyUpsertWithWhereUniqueWithoutToys_producerInput = {
    where: toyWhereUniqueInput
    update: XOR<
      toyUpdateWithoutToys_producerInput,
      toyUncheckedUpdateWithoutToys_producerInput
    >
    create: XOR<
      toyCreateWithoutToys_producerInput,
      toyUncheckedCreateWithoutToys_producerInput
    >
  }

  export type toyUpdateWithWhereUniqueWithoutToys_producerInput = {
    where: toyWhereUniqueInput
    data: XOR<
      toyUpdateWithoutToys_producerInput,
      toyUncheckedUpdateWithoutToys_producerInput
    >
  }

  export type toyUpdateManyWithWhereWithoutToys_producerInput = {
    where: toyScalarWhereInput
    data: XOR<toyUpdateManyMutationInput, toyUncheckedUpdateManyWithoutToyInput>
  }

  export type toyScalarWhereInput = {
    AND?: Enumerable<toyScalarWhereInput>
    OR?: Enumerable<toyScalarWhereInput>
    NOT?: Enumerable<toyScalarWhereInput>
    id?: IntFilter | number
    toys_producer_id?: IntNullableFilter | number | null
    toy_name?: StringFilter | string
    barcode?: StringFilter | string
    price?: DecimalFilter | Decimal | DecimalJsLike | number | string
    currency?: StringFilter | string
    naughty?: StringNullableFilter | string | null
    date_introduced?: DateTimeFilter | Date | string
  }

  export type house_catCreateManyCatInput = {
    house_id: number
  }

  export type house_catUpdateWithoutCatInput = {
    house?: houseUpdateOneRequiredWithoutHouse_catNestedInput
  }

  export type house_catUncheckedUpdateWithoutCatInput = {
    house_id?: IntFieldUpdateOperationsInput | number
  }

  export type house_catUncheckedUpdateManyWithoutHouse_catInput = {
    house_id?: IntFieldUpdateOperationsInput | number
  }

  export type catCreateManyCat_colorInput = {
    id?: bigint | number
    cat_name?: string | null
    date_of_birth?: Date | string | null
  }

  export type catUpdateWithoutCat_colorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cat_name?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    house_cat?: house_catUpdateManyWithoutCatNestedInput
  }

  export type catUncheckedUpdateWithoutCat_colorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cat_name?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    house_cat?: house_catUncheckedUpdateManyWithoutCatNestedInput
  }

  export type catUncheckedUpdateManyWithoutCatInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cat_name?: NullableStringFieldUpdateOperationsInput | string | null
    date_of_birth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type house_catCreateManyHouseInput = {
    cat_id: bigint | number
  }

  export type toy_houseCreateManyHouseInput = {
    toy_id: number
    amount?: number
  }

  export type house_catUpdateWithoutHouseInput = {
    cat?: catUpdateOneRequiredWithoutHouse_catNestedInput
  }

  export type house_catUncheckedUpdateWithoutHouseInput = {
    cat_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type toy_houseUpdateWithoutHouseInput = {
    amount?: IntFieldUpdateOperationsInput | number
    toy?: toyUpdateOneRequiredWithoutToy_houseNestedInput
  }

  export type toy_houseUncheckedUpdateWithoutHouseInput = {
    toy_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type toy_houseUncheckedUpdateManyWithoutToy_houseInput = {
    toy_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type toy_houseCreateManyToyInput = {
    house_id: number
    amount?: number
  }

  export type toy_houseUpdateWithoutToyInput = {
    amount?: IntFieldUpdateOperationsInput | number
    house?: houseUpdateOneRequiredWithoutToy_houseNestedInput
  }

  export type toy_houseUncheckedUpdateWithoutToyInput = {
    house_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type toyCreateManyToys_producerInput = {
    id?: number
    toy_name: string
    barcode: string
    price: Decimal | DecimalJsLike | number | string
    currency: string
    naughty?: string | null
    date_introduced: Date | string
  }

  export type toyUpdateWithoutToys_producerInput = {
    toy_name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    naughty?: NullableStringFieldUpdateOperationsInput | string | null
    date_introduced?: DateTimeFieldUpdateOperationsInput | Date | string
    toy_house?: toy_houseUpdateManyWithoutToyNestedInput
  }

  export type toyUncheckedUpdateWithoutToys_producerInput = {
    id?: IntFieldUpdateOperationsInput | number
    toy_name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    naughty?: NullableStringFieldUpdateOperationsInput | string | null
    date_introduced?: DateTimeFieldUpdateOperationsInput | Date | string
    toy_house?: toy_houseUncheckedUpdateManyWithoutToyNestedInput
  }

  export type toyUncheckedUpdateManyWithoutToyInput = {
    id?: IntFieldUpdateOperationsInput | number
    toy_name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currency?: StringFieldUpdateOperationsInput | string
    naughty?: NullableStringFieldUpdateOperationsInput | string | null
    date_introduced?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
