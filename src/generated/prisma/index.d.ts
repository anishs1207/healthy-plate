
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PersonalListItem
 * 
 */
export type PersonalListItem = $Result.DefaultSelection<Prisma.$PersonalListItemPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model MealPlan
 * 
 */
export type MealPlan = $Result.DefaultSelection<Prisma.$MealPlanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Plans: {
  FREE: 'FREE',
  PRO: 'PRO',
  PREMIUM: 'PREMIUM'
};

export type Plans = (typeof Plans)[keyof typeof Plans]


export const Goal: {
  MUSCLE_GAIN: 'MUSCLE_GAIN',
  WEIGHT_LOSS: 'WEIGHT_LOSS',
  WEIGHT_GAIN: 'WEIGHT_GAIN'
};

export type Goal = (typeof Goal)[keyof typeof Goal]


export const ActivityLevel: {
  ACTIVE: 'ACTIVE',
  MODERATE: 'MODERATE',
  LESS_ACTIVE: 'LESS_ACTIVE'
};

export type ActivityLevel = (typeof ActivityLevel)[keyof typeof ActivityLevel]


export const DatePlan: {
  TODAY: 'TODAY',
  TOMORROW: 'TOMORROW',
  DAY_AFTER_TOMORROW: 'DAY_AFTER_TOMORROW'
};

export type DatePlan = (typeof DatePlan)[keyof typeof DatePlan]


export const MealType: {
  BREAKFAST: 'BREAKFAST',
  LUNCH: 'LUNCH',
  DINNER: 'DINNER'
};

export type MealType = (typeof MealType)[keyof typeof MealType]


export const SkillLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type SkillLevel = (typeof SkillLevel)[keyof typeof SkillLevel]

}

export type Plans = $Enums.Plans

export const Plans: typeof $Enums.Plans

export type Goal = $Enums.Goal

export const Goal: typeof $Enums.Goal

export type ActivityLevel = $Enums.ActivityLevel

export const ActivityLevel: typeof $Enums.ActivityLevel

export type DatePlan = $Enums.DatePlan

export const DatePlan: typeof $Enums.DatePlan

export type MealType = $Enums.MealType

export const MealType: typeof $Enums.MealType

export type SkillLevel = $Enums.SkillLevel

export const SkillLevel: typeof $Enums.SkillLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalListItem`: Exposes CRUD operations for the **PersonalListItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalListItems
    * const personalListItems = await prisma.personalListItem.findMany()
    * ```
    */
  get personalListItem(): Prisma.PersonalListItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealPlan`: Exposes CRUD operations for the **MealPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealPlans
    * const mealPlans = await prisma.mealPlan.findMany()
    * ```
    */
  get mealPlan(): Prisma.MealPlanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
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
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

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
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PersonalListItem: 'PersonalListItem',
    Recipe: 'Recipe',
    MealPlan: 'MealPlan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "personalListItem" | "recipe" | "mealPlan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PersonalListItem: {
        payload: Prisma.$PersonalListItemPayload<ExtArgs>
        fields: Prisma.PersonalListItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalListItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalListItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalListItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalListItemPayload>
          }
          findFirst: {
            args: Prisma.PersonalListItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalListItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalListItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalListItemPayload>
          }
          findMany: {
            args: Prisma.PersonalListItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalListItemPayload>[]
          }
          create: {
            args: Prisma.PersonalListItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalListItemPayload>
          }
          createMany: {
            args: Prisma.PersonalListItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalListItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalListItemPayload>[]
          }
          delete: {
            args: Prisma.PersonalListItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalListItemPayload>
          }
          update: {
            args: Prisma.PersonalListItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalListItemPayload>
          }
          deleteMany: {
            args: Prisma.PersonalListItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalListItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalListItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalListItemPayload>[]
          }
          upsert: {
            args: Prisma.PersonalListItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalListItemPayload>
          }
          aggregate: {
            args: Prisma.PersonalListItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalListItem>
          }
          groupBy: {
            args: Prisma.PersonalListItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalListItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalListItemCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalListItemCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      MealPlan: {
        payload: Prisma.$MealPlanPayload<ExtArgs>
        fields: Prisma.MealPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findFirst: {
            args: Prisma.MealPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findMany: {
            args: Prisma.MealPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          create: {
            args: Prisma.MealPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          createMany: {
            args: Prisma.MealPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          delete: {
            args: Prisma.MealPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          update: {
            args: Prisma.MealPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          deleteMany: {
            args: Prisma.MealPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          upsert: {
            args: Prisma.MealPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          aggregate: {
            args: Prisma.MealPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealPlan>
          }
          groupBy: {
            args: Prisma.MealPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealPlanCountArgs<ExtArgs>
            result: $Utils.Optional<MealPlanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    personalListItem?: PersonalListItemOmit
    recipe?: RecipeOmit
    mealPlan?: MealPlanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    recipes: number
    MealPlan: number
    PersonalList: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | UserCountOutputTypeCountRecipesArgs
    MealPlan?: boolean | UserCountOutputTypeCountMealPlanArgs
    PersonalList?: boolean | UserCountOutputTypeCountPersonalListArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMealPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPersonalListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalListItemWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    MealPlan: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MealPlan?: boolean | RecipeCountOutputTypeCountMealPlanArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountMealPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
    targetWeight: number | null
    height: number | null
    workoutCommitment: number | null
    calorieRequirement: number | null
    proteinRequirement: number | null
    credits: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
    targetWeight: number | null
    height: number | null
    workoutCommitment: number | null
    calorieRequirement: number | null
    proteinRequirement: number | null
    credits: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    age: number | null
    goal: $Enums.Goal | null
    activityLevel: $Enums.ActivityLevel | null
    targetWeight: number | null
    height: number | null
    workoutCommitment: number | null
    calorieRequirement: number | null
    proteinRequirement: number | null
    credits: bigint | null
    tierPlan: $Enums.Plans | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    age: number | null
    goal: $Enums.Goal | null
    activityLevel: $Enums.ActivityLevel | null
    targetWeight: number | null
    height: number | null
    workoutCommitment: number | null
    calorieRequirement: number | null
    proteinRequirement: number | null
    credits: bigint | null
    tierPlan: $Enums.Plans | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    age: number
    goal: number
    activityLevel: number
    targetWeight: number
    height: number
    workoutCommitment: number
    calorieRequirement: number
    proteinRequirement: number
    dietaryPreferences: number
    dietaryRestrictions: number
    preferredCuisines: number
    credits: number
    tierPlan: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
    targetWeight?: true
    height?: true
    workoutCommitment?: true
    calorieRequirement?: true
    proteinRequirement?: true
    credits?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
    targetWeight?: true
    height?: true
    workoutCommitment?: true
    calorieRequirement?: true
    proteinRequirement?: true
    credits?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    age?: true
    goal?: true
    activityLevel?: true
    targetWeight?: true
    height?: true
    workoutCommitment?: true
    calorieRequirement?: true
    proteinRequirement?: true
    credits?: true
    tierPlan?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    age?: true
    goal?: true
    activityLevel?: true
    targetWeight?: true
    height?: true
    workoutCommitment?: true
    calorieRequirement?: true
    proteinRequirement?: true
    credits?: true
    tierPlan?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    age?: true
    goal?: true
    activityLevel?: true
    targetWeight?: true
    height?: true
    workoutCommitment?: true
    calorieRequirement?: true
    proteinRequirement?: true
    dietaryPreferences?: true
    dietaryRestrictions?: true
    preferredCuisines?: true
    credits?: true
    tierPlan?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    age: number
    goal: $Enums.Goal
    activityLevel: $Enums.ActivityLevel
    targetWeight: number
    height: number | null
    workoutCommitment: number
    calorieRequirement: number
    proteinRequirement: number
    dietaryPreferences: string[]
    dietaryRestrictions: string[]
    preferredCuisines: string[]
    credits: bigint
    tierPlan: $Enums.Plans
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    age?: boolean
    goal?: boolean
    activityLevel?: boolean
    targetWeight?: boolean
    height?: boolean
    workoutCommitment?: boolean
    calorieRequirement?: boolean
    proteinRequirement?: boolean
    dietaryPreferences?: boolean
    dietaryRestrictions?: boolean
    preferredCuisines?: boolean
    credits?: boolean
    tierPlan?: boolean
    recipes?: boolean | User$recipesArgs<ExtArgs>
    MealPlan?: boolean | User$MealPlanArgs<ExtArgs>
    PersonalList?: boolean | User$PersonalListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    age?: boolean
    goal?: boolean
    activityLevel?: boolean
    targetWeight?: boolean
    height?: boolean
    workoutCommitment?: boolean
    calorieRequirement?: boolean
    proteinRequirement?: boolean
    dietaryPreferences?: boolean
    dietaryRestrictions?: boolean
    preferredCuisines?: boolean
    credits?: boolean
    tierPlan?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    age?: boolean
    goal?: boolean
    activityLevel?: boolean
    targetWeight?: boolean
    height?: boolean
    workoutCommitment?: boolean
    calorieRequirement?: boolean
    proteinRequirement?: boolean
    dietaryPreferences?: boolean
    dietaryRestrictions?: boolean
    preferredCuisines?: boolean
    credits?: boolean
    tierPlan?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    age?: boolean
    goal?: boolean
    activityLevel?: boolean
    targetWeight?: boolean
    height?: boolean
    workoutCommitment?: boolean
    calorieRequirement?: boolean
    proteinRequirement?: boolean
    dietaryPreferences?: boolean
    dietaryRestrictions?: boolean
    preferredCuisines?: boolean
    credits?: boolean
    tierPlan?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "age" | "goal" | "activityLevel" | "targetWeight" | "height" | "workoutCommitment" | "calorieRequirement" | "proteinRequirement" | "dietaryPreferences" | "dietaryRestrictions" | "preferredCuisines" | "credits" | "tierPlan", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | User$recipesArgs<ExtArgs>
    MealPlan?: boolean | User$MealPlanArgs<ExtArgs>
    PersonalList?: boolean | User$PersonalListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      recipes: Prisma.$RecipePayload<ExtArgs>[]
      MealPlan: Prisma.$MealPlanPayload<ExtArgs>[]
      PersonalList: Prisma.$PersonalListItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      age: number
      goal: $Enums.Goal
      activityLevel: $Enums.ActivityLevel
      targetWeight: number
      height: number | null
      workoutCommitment: number
      calorieRequirement: number
      proteinRequirement: number
      dietaryPreferences: string[]
      dietaryRestrictions: string[]
      preferredCuisines: string[]
      credits: bigint
      tierPlan: $Enums.Plans
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends User$recipesArgs<ExtArgs> = {}>(args?: Subset<T, User$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MealPlan<T extends User$MealPlanArgs<ExtArgs> = {}>(args?: Subset<T, User$MealPlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PersonalList<T extends User$PersonalListArgs<ExtArgs> = {}>(args?: Subset<T, User$PersonalListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly goal: FieldRef<"User", 'Goal'>
    readonly activityLevel: FieldRef<"User", 'ActivityLevel'>
    readonly targetWeight: FieldRef<"User", 'Float'>
    readonly height: FieldRef<"User", 'Float'>
    readonly workoutCommitment: FieldRef<"User", 'Int'>
    readonly calorieRequirement: FieldRef<"User", 'Float'>
    readonly proteinRequirement: FieldRef<"User", 'Float'>
    readonly dietaryPreferences: FieldRef<"User", 'String[]'>
    readonly dietaryRestrictions: FieldRef<"User", 'String[]'>
    readonly preferredCuisines: FieldRef<"User", 'String[]'>
    readonly credits: FieldRef<"User", 'BigInt'>
    readonly tierPlan: FieldRef<"User", 'Plans'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.recipes
   */
  export type User$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * User.MealPlan
   */
  export type User$MealPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    cursor?: MealPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * User.PersonalList
   */
  export type User$PersonalListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemInclude<ExtArgs> | null
    where?: PersonalListItemWhereInput
    orderBy?: PersonalListItemOrderByWithRelationInput | PersonalListItemOrderByWithRelationInput[]
    cursor?: PersonalListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalListItemScalarFieldEnum | PersonalListItemScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PersonalListItem
   */

  export type AggregatePersonalListItem = {
    _count: PersonalListItemCountAggregateOutputType | null
    _min: PersonalListItemMinAggregateOutputType | null
    _max: PersonalListItemMaxAggregateOutputType | null
  }

  export type PersonalListItemMinAggregateOutputType = {
    id: string | null
    ingrediantName: string | null
    tags: $Enums.DatePlan | null
    date: Date | null
    mealType: $Enums.MealType | null
    completed: boolean | null
    userId: string | null
  }

  export type PersonalListItemMaxAggregateOutputType = {
    id: string | null
    ingrediantName: string | null
    tags: $Enums.DatePlan | null
    date: Date | null
    mealType: $Enums.MealType | null
    completed: boolean | null
    userId: string | null
  }

  export type PersonalListItemCountAggregateOutputType = {
    id: number
    ingrediantName: number
    tags: number
    date: number
    mealType: number
    completed: number
    userId: number
    _all: number
  }


  export type PersonalListItemMinAggregateInputType = {
    id?: true
    ingrediantName?: true
    tags?: true
    date?: true
    mealType?: true
    completed?: true
    userId?: true
  }

  export type PersonalListItemMaxAggregateInputType = {
    id?: true
    ingrediantName?: true
    tags?: true
    date?: true
    mealType?: true
    completed?: true
    userId?: true
  }

  export type PersonalListItemCountAggregateInputType = {
    id?: true
    ingrediantName?: true
    tags?: true
    date?: true
    mealType?: true
    completed?: true
    userId?: true
    _all?: true
  }

  export type PersonalListItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalListItem to aggregate.
     */
    where?: PersonalListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalListItems to fetch.
     */
    orderBy?: PersonalListItemOrderByWithRelationInput | PersonalListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalListItems
    **/
    _count?: true | PersonalListItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalListItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalListItemMaxAggregateInputType
  }

  export type GetPersonalListItemAggregateType<T extends PersonalListItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalListItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalListItem[P]>
      : GetScalarType<T[P], AggregatePersonalListItem[P]>
  }




  export type PersonalListItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalListItemWhereInput
    orderBy?: PersonalListItemOrderByWithAggregationInput | PersonalListItemOrderByWithAggregationInput[]
    by: PersonalListItemScalarFieldEnum[] | PersonalListItemScalarFieldEnum
    having?: PersonalListItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalListItemCountAggregateInputType | true
    _min?: PersonalListItemMinAggregateInputType
    _max?: PersonalListItemMaxAggregateInputType
  }

  export type PersonalListItemGroupByOutputType = {
    id: string
    ingrediantName: string
    tags: $Enums.DatePlan
    date: Date
    mealType: $Enums.MealType
    completed: boolean
    userId: string | null
    _count: PersonalListItemCountAggregateOutputType | null
    _min: PersonalListItemMinAggregateOutputType | null
    _max: PersonalListItemMaxAggregateOutputType | null
  }

  type GetPersonalListItemGroupByPayload<T extends PersonalListItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalListItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalListItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalListItemGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalListItemGroupByOutputType[P]>
        }
      >
    >


  export type PersonalListItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingrediantName?: boolean
    tags?: boolean
    date?: boolean
    mealType?: boolean
    completed?: boolean
    userId?: boolean
    User?: boolean | PersonalListItem$UserArgs<ExtArgs>
  }, ExtArgs["result"]["personalListItem"]>

  export type PersonalListItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingrediantName?: boolean
    tags?: boolean
    date?: boolean
    mealType?: boolean
    completed?: boolean
    userId?: boolean
    User?: boolean | PersonalListItem$UserArgs<ExtArgs>
  }, ExtArgs["result"]["personalListItem"]>

  export type PersonalListItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingrediantName?: boolean
    tags?: boolean
    date?: boolean
    mealType?: boolean
    completed?: boolean
    userId?: boolean
    User?: boolean | PersonalListItem$UserArgs<ExtArgs>
  }, ExtArgs["result"]["personalListItem"]>

  export type PersonalListItemSelectScalar = {
    id?: boolean
    ingrediantName?: boolean
    tags?: boolean
    date?: boolean
    mealType?: boolean
    completed?: boolean
    userId?: boolean
  }

  export type PersonalListItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ingrediantName" | "tags" | "date" | "mealType" | "completed" | "userId", ExtArgs["result"]["personalListItem"]>
  export type PersonalListItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | PersonalListItem$UserArgs<ExtArgs>
  }
  export type PersonalListItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | PersonalListItem$UserArgs<ExtArgs>
  }
  export type PersonalListItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | PersonalListItem$UserArgs<ExtArgs>
  }

  export type $PersonalListItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalListItem"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ingrediantName: string
      tags: $Enums.DatePlan
      date: Date
      mealType: $Enums.MealType
      completed: boolean
      userId: string | null
    }, ExtArgs["result"]["personalListItem"]>
    composites: {}
  }

  type PersonalListItemGetPayload<S extends boolean | null | undefined | PersonalListItemDefaultArgs> = $Result.GetResult<Prisma.$PersonalListItemPayload, S>

  type PersonalListItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalListItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalListItemCountAggregateInputType | true
    }

  export interface PersonalListItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalListItem'], meta: { name: 'PersonalListItem' } }
    /**
     * Find zero or one PersonalListItem that matches the filter.
     * @param {PersonalListItemFindUniqueArgs} args - Arguments to find a PersonalListItem
     * @example
     * // Get one PersonalListItem
     * const personalListItem = await prisma.personalListItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalListItemFindUniqueArgs>(args: SelectSubset<T, PersonalListItemFindUniqueArgs<ExtArgs>>): Prisma__PersonalListItemClient<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalListItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalListItemFindUniqueOrThrowArgs} args - Arguments to find a PersonalListItem
     * @example
     * // Get one PersonalListItem
     * const personalListItem = await prisma.personalListItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalListItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalListItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalListItemClient<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalListItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalListItemFindFirstArgs} args - Arguments to find a PersonalListItem
     * @example
     * // Get one PersonalListItem
     * const personalListItem = await prisma.personalListItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalListItemFindFirstArgs>(args?: SelectSubset<T, PersonalListItemFindFirstArgs<ExtArgs>>): Prisma__PersonalListItemClient<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalListItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalListItemFindFirstOrThrowArgs} args - Arguments to find a PersonalListItem
     * @example
     * // Get one PersonalListItem
     * const personalListItem = await prisma.personalListItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalListItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalListItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalListItemClient<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalListItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalListItems
     * const personalListItems = await prisma.personalListItem.findMany()
     * 
     * // Get first 10 PersonalListItems
     * const personalListItems = await prisma.personalListItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalListItemWithIdOnly = await prisma.personalListItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalListItemFindManyArgs>(args?: SelectSubset<T, PersonalListItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalListItem.
     * @param {PersonalListItemCreateArgs} args - Arguments to create a PersonalListItem.
     * @example
     * // Create one PersonalListItem
     * const PersonalListItem = await prisma.personalListItem.create({
     *   data: {
     *     // ... data to create a PersonalListItem
     *   }
     * })
     * 
     */
    create<T extends PersonalListItemCreateArgs>(args: SelectSubset<T, PersonalListItemCreateArgs<ExtArgs>>): Prisma__PersonalListItemClient<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalListItems.
     * @param {PersonalListItemCreateManyArgs} args - Arguments to create many PersonalListItems.
     * @example
     * // Create many PersonalListItems
     * const personalListItem = await prisma.personalListItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalListItemCreateManyArgs>(args?: SelectSubset<T, PersonalListItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalListItems and returns the data saved in the database.
     * @param {PersonalListItemCreateManyAndReturnArgs} args - Arguments to create many PersonalListItems.
     * @example
     * // Create many PersonalListItems
     * const personalListItem = await prisma.personalListItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalListItems and only return the `id`
     * const personalListItemWithIdOnly = await prisma.personalListItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalListItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalListItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalListItem.
     * @param {PersonalListItemDeleteArgs} args - Arguments to delete one PersonalListItem.
     * @example
     * // Delete one PersonalListItem
     * const PersonalListItem = await prisma.personalListItem.delete({
     *   where: {
     *     // ... filter to delete one PersonalListItem
     *   }
     * })
     * 
     */
    delete<T extends PersonalListItemDeleteArgs>(args: SelectSubset<T, PersonalListItemDeleteArgs<ExtArgs>>): Prisma__PersonalListItemClient<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalListItem.
     * @param {PersonalListItemUpdateArgs} args - Arguments to update one PersonalListItem.
     * @example
     * // Update one PersonalListItem
     * const personalListItem = await prisma.personalListItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalListItemUpdateArgs>(args: SelectSubset<T, PersonalListItemUpdateArgs<ExtArgs>>): Prisma__PersonalListItemClient<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalListItems.
     * @param {PersonalListItemDeleteManyArgs} args - Arguments to filter PersonalListItems to delete.
     * @example
     * // Delete a few PersonalListItems
     * const { count } = await prisma.personalListItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalListItemDeleteManyArgs>(args?: SelectSubset<T, PersonalListItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalListItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalListItems
     * const personalListItem = await prisma.personalListItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalListItemUpdateManyArgs>(args: SelectSubset<T, PersonalListItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalListItems and returns the data updated in the database.
     * @param {PersonalListItemUpdateManyAndReturnArgs} args - Arguments to update many PersonalListItems.
     * @example
     * // Update many PersonalListItems
     * const personalListItem = await prisma.personalListItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalListItems and only return the `id`
     * const personalListItemWithIdOnly = await prisma.personalListItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalListItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalListItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalListItem.
     * @param {PersonalListItemUpsertArgs} args - Arguments to update or create a PersonalListItem.
     * @example
     * // Update or create a PersonalListItem
     * const personalListItem = await prisma.personalListItem.upsert({
     *   create: {
     *     // ... data to create a PersonalListItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalListItem we want to update
     *   }
     * })
     */
    upsert<T extends PersonalListItemUpsertArgs>(args: SelectSubset<T, PersonalListItemUpsertArgs<ExtArgs>>): Prisma__PersonalListItemClient<$Result.GetResult<Prisma.$PersonalListItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalListItemCountArgs} args - Arguments to filter PersonalListItems to count.
     * @example
     * // Count the number of PersonalListItems
     * const count = await prisma.personalListItem.count({
     *   where: {
     *     // ... the filter for the PersonalListItems we want to count
     *   }
     * })
    **/
    count<T extends PersonalListItemCountArgs>(
      args?: Subset<T, PersonalListItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalListItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalListItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonalListItemAggregateArgs>(args: Subset<T, PersonalListItemAggregateArgs>): Prisma.PrismaPromise<GetPersonalListItemAggregateType<T>>

    /**
     * Group by PersonalListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalListItemGroupByArgs} args - Group by arguments.
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
      T extends PersonalListItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalListItemGroupByArgs['orderBy'] }
        : { orderBy?: PersonalListItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, PersonalListItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalListItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalListItem model
   */
  readonly fields: PersonalListItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalListItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalListItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends PersonalListItem$UserArgs<ExtArgs> = {}>(args?: Subset<T, PersonalListItem$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonalListItem model
   */
  interface PersonalListItemFieldRefs {
    readonly id: FieldRef<"PersonalListItem", 'String'>
    readonly ingrediantName: FieldRef<"PersonalListItem", 'String'>
    readonly tags: FieldRef<"PersonalListItem", 'DatePlan'>
    readonly date: FieldRef<"PersonalListItem", 'DateTime'>
    readonly mealType: FieldRef<"PersonalListItem", 'MealType'>
    readonly completed: FieldRef<"PersonalListItem", 'Boolean'>
    readonly userId: FieldRef<"PersonalListItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PersonalListItem findUnique
   */
  export type PersonalListItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemInclude<ExtArgs> | null
    /**
     * Filter, which PersonalListItem to fetch.
     */
    where: PersonalListItemWhereUniqueInput
  }

  /**
   * PersonalListItem findUniqueOrThrow
   */
  export type PersonalListItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemInclude<ExtArgs> | null
    /**
     * Filter, which PersonalListItem to fetch.
     */
    where: PersonalListItemWhereUniqueInput
  }

  /**
   * PersonalListItem findFirst
   */
  export type PersonalListItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemInclude<ExtArgs> | null
    /**
     * Filter, which PersonalListItem to fetch.
     */
    where?: PersonalListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalListItems to fetch.
     */
    orderBy?: PersonalListItemOrderByWithRelationInput | PersonalListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalListItems.
     */
    cursor?: PersonalListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalListItems.
     */
    distinct?: PersonalListItemScalarFieldEnum | PersonalListItemScalarFieldEnum[]
  }

  /**
   * PersonalListItem findFirstOrThrow
   */
  export type PersonalListItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemInclude<ExtArgs> | null
    /**
     * Filter, which PersonalListItem to fetch.
     */
    where?: PersonalListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalListItems to fetch.
     */
    orderBy?: PersonalListItemOrderByWithRelationInput | PersonalListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalListItems.
     */
    cursor?: PersonalListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalListItems.
     */
    distinct?: PersonalListItemScalarFieldEnum | PersonalListItemScalarFieldEnum[]
  }

  /**
   * PersonalListItem findMany
   */
  export type PersonalListItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemInclude<ExtArgs> | null
    /**
     * Filter, which PersonalListItems to fetch.
     */
    where?: PersonalListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalListItems to fetch.
     */
    orderBy?: PersonalListItemOrderByWithRelationInput | PersonalListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalListItems.
     */
    cursor?: PersonalListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalListItems.
     */
    skip?: number
    distinct?: PersonalListItemScalarFieldEnum | PersonalListItemScalarFieldEnum[]
  }

  /**
   * PersonalListItem create
   */
  export type PersonalListItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalListItem.
     */
    data: XOR<PersonalListItemCreateInput, PersonalListItemUncheckedCreateInput>
  }

  /**
   * PersonalListItem createMany
   */
  export type PersonalListItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalListItems.
     */
    data: PersonalListItemCreateManyInput | PersonalListItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalListItem createManyAndReturn
   */
  export type PersonalListItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalListItems.
     */
    data: PersonalListItemCreateManyInput | PersonalListItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalListItem update
   */
  export type PersonalListItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalListItem.
     */
    data: XOR<PersonalListItemUpdateInput, PersonalListItemUncheckedUpdateInput>
    /**
     * Choose, which PersonalListItem to update.
     */
    where: PersonalListItemWhereUniqueInput
  }

  /**
   * PersonalListItem updateMany
   */
  export type PersonalListItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalListItems.
     */
    data: XOR<PersonalListItemUpdateManyMutationInput, PersonalListItemUncheckedUpdateManyInput>
    /**
     * Filter which PersonalListItems to update
     */
    where?: PersonalListItemWhereInput
    /**
     * Limit how many PersonalListItems to update.
     */
    limit?: number
  }

  /**
   * PersonalListItem updateManyAndReturn
   */
  export type PersonalListItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * The data used to update PersonalListItems.
     */
    data: XOR<PersonalListItemUpdateManyMutationInput, PersonalListItemUncheckedUpdateManyInput>
    /**
     * Filter which PersonalListItems to update
     */
    where?: PersonalListItemWhereInput
    /**
     * Limit how many PersonalListItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalListItem upsert
   */
  export type PersonalListItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalListItem to update in case it exists.
     */
    where: PersonalListItemWhereUniqueInput
    /**
     * In case the PersonalListItem found by the `where` argument doesn't exist, create a new PersonalListItem with this data.
     */
    create: XOR<PersonalListItemCreateInput, PersonalListItemUncheckedCreateInput>
    /**
     * In case the PersonalListItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalListItemUpdateInput, PersonalListItemUncheckedUpdateInput>
  }

  /**
   * PersonalListItem delete
   */
  export type PersonalListItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemInclude<ExtArgs> | null
    /**
     * Filter which PersonalListItem to delete.
     */
    where: PersonalListItemWhereUniqueInput
  }

  /**
   * PersonalListItem deleteMany
   */
  export type PersonalListItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalListItems to delete
     */
    where?: PersonalListItemWhereInput
    /**
     * Limit how many PersonalListItems to delete.
     */
    limit?: number
  }

  /**
   * PersonalListItem.User
   */
  export type PersonalListItem$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PersonalListItem without action
   */
  export type PersonalListItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalListItem
     */
    select?: PersonalListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalListItem
     */
    omit?: PersonalListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalListItemInclude<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    time: number | null
    calories_kcal: number | null
    protein_g: number | null
  }

  export type RecipeSumAggregateOutputType = {
    time: number | null
    calories_kcal: number | null
    protein_g: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    date: Date | null
    title: string | null
    time: number | null
    description: string | null
    calories_kcal: number | null
    protein_g: number | null
    mealType: $Enums.MealType | null
    skillLevel: $Enums.SkillLevel | null
    favourite: boolean | null
    ownerId: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    title: string | null
    time: number | null
    description: string | null
    calories_kcal: number | null
    protein_g: number | null
    mealType: $Enums.MealType | null
    skillLevel: $Enums.SkillLevel | null
    favourite: boolean | null
    ownerId: string | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    date: number
    title: number
    time: number
    description: number
    calories_kcal: number
    protein_g: number
    ingredients: number
    mealType: number
    steps: number
    skillLevel: number
    cuisine: number
    keywords: number
    favourite: number
    ownerId: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    time?: true
    calories_kcal?: true
    protein_g?: true
  }

  export type RecipeSumAggregateInputType = {
    time?: true
    calories_kcal?: true
    protein_g?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    date?: true
    title?: true
    time?: true
    description?: true
    calories_kcal?: true
    protein_g?: true
    mealType?: true
    skillLevel?: true
    favourite?: true
    ownerId?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    date?: true
    title?: true
    time?: true
    description?: true
    calories_kcal?: true
    protein_g?: true
    mealType?: true
    skillLevel?: true
    favourite?: true
    ownerId?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    date?: true
    title?: true
    time?: true
    description?: true
    calories_kcal?: true
    protein_g?: true
    ingredients?: true
    mealType?: true
    steps?: true
    skillLevel?: true
    cuisine?: true
    keywords?: true
    favourite?: true
    ownerId?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    date: Date
    title: string
    time: number
    description: string
    calories_kcal: number
    protein_g: number
    ingredients: string[]
    mealType: $Enums.MealType
    steps: string[]
    skillLevel: $Enums.SkillLevel
    cuisine: string[]
    keywords: string[]
    favourite: boolean
    ownerId: string
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    title?: boolean
    time?: boolean
    description?: boolean
    calories_kcal?: boolean
    protein_g?: boolean
    ingredients?: boolean
    mealType?: boolean
    steps?: boolean
    skillLevel?: boolean
    cuisine?: boolean
    keywords?: boolean
    favourite?: boolean
    ownerId?: boolean
    MealPlan?: boolean | Recipe$MealPlanArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    title?: boolean
    time?: boolean
    description?: boolean
    calories_kcal?: boolean
    protein_g?: boolean
    ingredients?: boolean
    mealType?: boolean
    steps?: boolean
    skillLevel?: boolean
    cuisine?: boolean
    keywords?: boolean
    favourite?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    title?: boolean
    time?: boolean
    description?: boolean
    calories_kcal?: boolean
    protein_g?: boolean
    ingredients?: boolean
    mealType?: boolean
    steps?: boolean
    skillLevel?: boolean
    cuisine?: boolean
    keywords?: boolean
    favourite?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    date?: boolean
    title?: boolean
    time?: boolean
    description?: boolean
    calories_kcal?: boolean
    protein_g?: boolean
    ingredients?: boolean
    mealType?: boolean
    steps?: boolean
    skillLevel?: boolean
    cuisine?: boolean
    keywords?: boolean
    favourite?: boolean
    ownerId?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "title" | "time" | "description" | "calories_kcal" | "protein_g" | "ingredients" | "mealType" | "steps" | "skillLevel" | "cuisine" | "keywords" | "favourite" | "ownerId", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MealPlan?: boolean | Recipe$MealPlanArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      MealPlan: Prisma.$MealPlanPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      title: string
      time: number
      description: string
      calories_kcal: number
      protein_g: number
      ingredients: string[]
      mealType: $Enums.MealType
      steps: string[]
      skillLevel: $Enums.SkillLevel
      cuisine: string[]
      keywords: string[]
      favourite: boolean
      ownerId: string
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MealPlan<T extends Recipe$MealPlanArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$MealPlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly date: FieldRef<"Recipe", 'DateTime'>
    readonly title: FieldRef<"Recipe", 'String'>
    readonly time: FieldRef<"Recipe", 'Int'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly calories_kcal: FieldRef<"Recipe", 'Int'>
    readonly protein_g: FieldRef<"Recipe", 'Float'>
    readonly ingredients: FieldRef<"Recipe", 'String[]'>
    readonly mealType: FieldRef<"Recipe", 'MealType'>
    readonly steps: FieldRef<"Recipe", 'String[]'>
    readonly skillLevel: FieldRef<"Recipe", 'SkillLevel'>
    readonly cuisine: FieldRef<"Recipe", 'String[]'>
    readonly keywords: FieldRef<"Recipe", 'String[]'>
    readonly favourite: FieldRef<"Recipe", 'Boolean'>
    readonly ownerId: FieldRef<"Recipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.MealPlan
   */
  export type Recipe$MealPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    cursor?: MealPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model MealPlan
   */

  export type AggregateMealPlan = {
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  export type MealPlanMinAggregateOutputType = {
    id: string | null
    date: Date | null
    mealType: $Enums.MealType | null
    userId: string | null
    recipeId: string | null
  }

  export type MealPlanMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    mealType: $Enums.MealType | null
    userId: string | null
    recipeId: string | null
  }

  export type MealPlanCountAggregateOutputType = {
    id: number
    date: number
    mealType: number
    userId: number
    recipeId: number
    _all: number
  }


  export type MealPlanMinAggregateInputType = {
    id?: true
    date?: true
    mealType?: true
    userId?: true
    recipeId?: true
  }

  export type MealPlanMaxAggregateInputType = {
    id?: true
    date?: true
    mealType?: true
    userId?: true
    recipeId?: true
  }

  export type MealPlanCountAggregateInputType = {
    id?: true
    date?: true
    mealType?: true
    userId?: true
    recipeId?: true
    _all?: true
  }

  export type MealPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlan to aggregate.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealPlans
    **/
    _count?: true | MealPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealPlanMaxAggregateInputType
  }

  export type GetMealPlanAggregateType<T extends MealPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateMealPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealPlan[P]>
      : GetScalarType<T[P], AggregateMealPlan[P]>
  }




  export type MealPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithAggregationInput | MealPlanOrderByWithAggregationInput[]
    by: MealPlanScalarFieldEnum[] | MealPlanScalarFieldEnum
    having?: MealPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealPlanCountAggregateInputType | true
    _min?: MealPlanMinAggregateInputType
    _max?: MealPlanMaxAggregateInputType
  }

  export type MealPlanGroupByOutputType = {
    id: string
    date: Date
    mealType: $Enums.MealType
    userId: string
    recipeId: string
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  type GetMealPlanGroupByPayload<T extends MealPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
            : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
        }
      >
    >


  export type MealPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    mealType?: boolean
    userId?: boolean
    recipeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    mealType?: boolean
    userId?: boolean
    recipeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    mealType?: boolean
    userId?: boolean
    recipeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectScalar = {
    id?: boolean
    date?: boolean
    mealType?: boolean
    userId?: boolean
    recipeId?: boolean
  }

  export type MealPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "mealType" | "userId" | "recipeId", ExtArgs["result"]["mealPlan"]>
  export type MealPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type MealPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type MealPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $MealPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      mealType: $Enums.MealType
      userId: string
      recipeId: string
    }, ExtArgs["result"]["mealPlan"]>
    composites: {}
  }

  type MealPlanGetPayload<S extends boolean | null | undefined | MealPlanDefaultArgs> = $Result.GetResult<Prisma.$MealPlanPayload, S>

  type MealPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealPlanCountAggregateInputType | true
    }

  export interface MealPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealPlan'], meta: { name: 'MealPlan' } }
    /**
     * Find zero or one MealPlan that matches the filter.
     * @param {MealPlanFindUniqueArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealPlanFindUniqueArgs>(args: SelectSubset<T, MealPlanFindUniqueArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealPlanFindUniqueOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, MealPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealPlanFindFirstArgs>(args?: SelectSubset<T, MealPlanFindFirstArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, MealPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealPlans
     * const mealPlans = await prisma.mealPlan.findMany()
     * 
     * // Get first 10 MealPlans
     * const mealPlans = await prisma.mealPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealPlanFindManyArgs>(args?: SelectSubset<T, MealPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealPlan.
     * @param {MealPlanCreateArgs} args - Arguments to create a MealPlan.
     * @example
     * // Create one MealPlan
     * const MealPlan = await prisma.mealPlan.create({
     *   data: {
     *     // ... data to create a MealPlan
     *   }
     * })
     * 
     */
    create<T extends MealPlanCreateArgs>(args: SelectSubset<T, MealPlanCreateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealPlans.
     * @param {MealPlanCreateManyArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealPlanCreateManyArgs>(args?: SelectSubset<T, MealPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealPlans and returns the data saved in the database.
     * @param {MealPlanCreateManyAndReturnArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, MealPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealPlan.
     * @param {MealPlanDeleteArgs} args - Arguments to delete one MealPlan.
     * @example
     * // Delete one MealPlan
     * const MealPlan = await prisma.mealPlan.delete({
     *   where: {
     *     // ... filter to delete one MealPlan
     *   }
     * })
     * 
     */
    delete<T extends MealPlanDeleteArgs>(args: SelectSubset<T, MealPlanDeleteArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealPlan.
     * @param {MealPlanUpdateArgs} args - Arguments to update one MealPlan.
     * @example
     * // Update one MealPlan
     * const mealPlan = await prisma.mealPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealPlanUpdateArgs>(args: SelectSubset<T, MealPlanUpdateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealPlans.
     * @param {MealPlanDeleteManyArgs} args - Arguments to filter MealPlans to delete.
     * @example
     * // Delete a few MealPlans
     * const { count } = await prisma.mealPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealPlanDeleteManyArgs>(args?: SelectSubset<T, MealPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealPlanUpdateManyArgs>(args: SelectSubset<T, MealPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans and returns the data updated in the database.
     * @param {MealPlanUpdateManyAndReturnArgs} args - Arguments to update many MealPlans.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, MealPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealPlan.
     * @param {MealPlanUpsertArgs} args - Arguments to update or create a MealPlan.
     * @example
     * // Update or create a MealPlan
     * const mealPlan = await prisma.mealPlan.upsert({
     *   create: {
     *     // ... data to create a MealPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealPlan we want to update
     *   }
     * })
     */
    upsert<T extends MealPlanUpsertArgs>(args: SelectSubset<T, MealPlanUpsertArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanCountArgs} args - Arguments to filter MealPlans to count.
     * @example
     * // Count the number of MealPlans
     * const count = await prisma.mealPlan.count({
     *   where: {
     *     // ... the filter for the MealPlans we want to count
     *   }
     * })
    **/
    count<T extends MealPlanCountArgs>(
      args?: Subset<T, MealPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealPlanAggregateArgs>(args: Subset<T, MealPlanAggregateArgs>): Prisma.PrismaPromise<GetMealPlanAggregateType<T>>

    /**
     * Group by MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanGroupByArgs} args - Group by arguments.
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
      T extends MealPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealPlanGroupByArgs['orderBy'] }
        : { orderBy?: MealPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
                ` in "having" needs to be provided in "by"`,
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
    >(args: SubsetIntersection<T, MealPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealPlan model
   */
  readonly fields: MealPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealPlan model
   */
  interface MealPlanFieldRefs {
    readonly id: FieldRef<"MealPlan", 'String'>
    readonly date: FieldRef<"MealPlan", 'DateTime'>
    readonly mealType: FieldRef<"MealPlan", 'MealType'>
    readonly userId: FieldRef<"MealPlan", 'String'>
    readonly recipeId: FieldRef<"MealPlan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MealPlan findUnique
   */
  export type MealPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findUniqueOrThrow
   */
  export type MealPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findFirst
   */
  export type MealPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findFirstOrThrow
   */
  export type MealPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findMany
   */
  export type MealPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlans to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan create
   */
  export type MealPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a MealPlan.
     */
    data: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
  }

  /**
   * MealPlan createMany
   */
  export type MealPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealPlan createManyAndReturn
   */
  export type MealPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlan update
   */
  export type MealPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a MealPlan.
     */
    data: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
    /**
     * Choose, which MealPlan to update.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan updateMany
   */
  export type MealPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
  }

  /**
   * MealPlan updateManyAndReturn
   */
  export type MealPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlan upsert
   */
  export type MealPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the MealPlan to update in case it exists.
     */
    where: MealPlanWhereUniqueInput
    /**
     * In case the MealPlan found by the `where` argument doesn't exist, create a new MealPlan with this data.
     */
    create: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
    /**
     * In case the MealPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
  }

  /**
   * MealPlan delete
   */
  export type MealPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter which MealPlan to delete.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan deleteMany
   */
  export type MealPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlans to delete
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to delete.
     */
    limit?: number
  }

  /**
   * MealPlan without action
   */
  export type MealPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    age: 'age',
    goal: 'goal',
    activityLevel: 'activityLevel',
    targetWeight: 'targetWeight',
    height: 'height',
    workoutCommitment: 'workoutCommitment',
    calorieRequirement: 'calorieRequirement',
    proteinRequirement: 'proteinRequirement',
    dietaryPreferences: 'dietaryPreferences',
    dietaryRestrictions: 'dietaryRestrictions',
    preferredCuisines: 'preferredCuisines',
    credits: 'credits',
    tierPlan: 'tierPlan'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PersonalListItemScalarFieldEnum: {
    id: 'id',
    ingrediantName: 'ingrediantName',
    tags: 'tags',
    date: 'date',
    mealType: 'mealType',
    completed: 'completed',
    userId: 'userId'
  };

  export type PersonalListItemScalarFieldEnum = (typeof PersonalListItemScalarFieldEnum)[keyof typeof PersonalListItemScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    date: 'date',
    title: 'title',
    time: 'time',
    description: 'description',
    calories_kcal: 'calories_kcal',
    protein_g: 'protein_g',
    ingredients: 'ingredients',
    mealType: 'mealType',
    steps: 'steps',
    skillLevel: 'skillLevel',
    cuisine: 'cuisine',
    keywords: 'keywords',
    favourite: 'favourite',
    ownerId: 'ownerId'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const MealPlanScalarFieldEnum: {
    id: 'id',
    date: 'date',
    mealType: 'mealType',
    userId: 'userId',
    recipeId: 'recipeId'
  };

  export type MealPlanScalarFieldEnum = (typeof MealPlanScalarFieldEnum)[keyof typeof MealPlanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Goal'
   */
  export type EnumGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Goal'>
    


  /**
   * Reference to a field of type 'Goal[]'
   */
  export type ListEnumGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Goal[]'>
    


  /**
   * Reference to a field of type 'ActivityLevel'
   */
  export type EnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel'>
    


  /**
   * Reference to a field of type 'ActivityLevel[]'
   */
  export type ListEnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Plans'
   */
  export type EnumPlansFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plans'>
    


  /**
   * Reference to a field of type 'Plans[]'
   */
  export type ListEnumPlansFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plans[]'>
    


  /**
   * Reference to a field of type 'DatePlan'
   */
  export type EnumDatePlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DatePlan'>
    


  /**
   * Reference to a field of type 'DatePlan[]'
   */
  export type ListEnumDatePlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DatePlan[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MealType'
   */
  export type EnumMealTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealType'>
    


  /**
   * Reference to a field of type 'MealType[]'
   */
  export type ListEnumMealTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SkillLevel'
   */
  export type EnumSkillLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillLevel'>
    


  /**
   * Reference to a field of type 'SkillLevel[]'
   */
  export type ListEnumSkillLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillLevel[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    goal?: EnumGoalFilter<"User"> | $Enums.Goal
    activityLevel?: EnumActivityLevelFilter<"User"> | $Enums.ActivityLevel
    targetWeight?: FloatFilter<"User"> | number
    height?: FloatNullableFilter<"User"> | number | null
    workoutCommitment?: IntFilter<"User"> | number
    calorieRequirement?: FloatFilter<"User"> | number
    proteinRequirement?: FloatFilter<"User"> | number
    dietaryPreferences?: StringNullableListFilter<"User">
    dietaryRestrictions?: StringNullableListFilter<"User">
    preferredCuisines?: StringNullableListFilter<"User">
    credits?: BigIntFilter<"User"> | bigint | number
    tierPlan?: EnumPlansFilter<"User"> | $Enums.Plans
    recipes?: RecipeListRelationFilter
    MealPlan?: MealPlanListRelationFilter
    PersonalList?: PersonalListItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    goal?: SortOrder
    activityLevel?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrderInput | SortOrder
    workoutCommitment?: SortOrder
    calorieRequirement?: SortOrder
    proteinRequirement?: SortOrder
    dietaryPreferences?: SortOrder
    dietaryRestrictions?: SortOrder
    preferredCuisines?: SortOrder
    credits?: SortOrder
    tierPlan?: SortOrder
    recipes?: RecipeOrderByRelationAggregateInput
    MealPlan?: MealPlanOrderByRelationAggregateInput
    PersonalList?: PersonalListItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    goal?: EnumGoalFilter<"User"> | $Enums.Goal
    activityLevel?: EnumActivityLevelFilter<"User"> | $Enums.ActivityLevel
    targetWeight?: FloatFilter<"User"> | number
    height?: FloatNullableFilter<"User"> | number | null
    workoutCommitment?: IntFilter<"User"> | number
    calorieRequirement?: FloatFilter<"User"> | number
    proteinRequirement?: FloatFilter<"User"> | number
    dietaryPreferences?: StringNullableListFilter<"User">
    dietaryRestrictions?: StringNullableListFilter<"User">
    preferredCuisines?: StringNullableListFilter<"User">
    credits?: BigIntFilter<"User"> | bigint | number
    tierPlan?: EnumPlansFilter<"User"> | $Enums.Plans
    recipes?: RecipeListRelationFilter
    MealPlan?: MealPlanListRelationFilter
    PersonalList?: PersonalListItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    goal?: SortOrder
    activityLevel?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrderInput | SortOrder
    workoutCommitment?: SortOrder
    calorieRequirement?: SortOrder
    proteinRequirement?: SortOrder
    dietaryPreferences?: SortOrder
    dietaryRestrictions?: SortOrder
    preferredCuisines?: SortOrder
    credits?: SortOrder
    tierPlan?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    age?: IntWithAggregatesFilter<"User"> | number
    goal?: EnumGoalWithAggregatesFilter<"User"> | $Enums.Goal
    activityLevel?: EnumActivityLevelWithAggregatesFilter<"User"> | $Enums.ActivityLevel
    targetWeight?: FloatWithAggregatesFilter<"User"> | number
    height?: FloatNullableWithAggregatesFilter<"User"> | number | null
    workoutCommitment?: IntWithAggregatesFilter<"User"> | number
    calorieRequirement?: FloatWithAggregatesFilter<"User"> | number
    proteinRequirement?: FloatWithAggregatesFilter<"User"> | number
    dietaryPreferences?: StringNullableListFilter<"User">
    dietaryRestrictions?: StringNullableListFilter<"User">
    preferredCuisines?: StringNullableListFilter<"User">
    credits?: BigIntWithAggregatesFilter<"User"> | bigint | number
    tierPlan?: EnumPlansWithAggregatesFilter<"User"> | $Enums.Plans
  }

  export type PersonalListItemWhereInput = {
    AND?: PersonalListItemWhereInput | PersonalListItemWhereInput[]
    OR?: PersonalListItemWhereInput[]
    NOT?: PersonalListItemWhereInput | PersonalListItemWhereInput[]
    id?: StringFilter<"PersonalListItem"> | string
    ingrediantName?: StringFilter<"PersonalListItem"> | string
    tags?: EnumDatePlanFilter<"PersonalListItem"> | $Enums.DatePlan
    date?: DateTimeFilter<"PersonalListItem"> | Date | string
    mealType?: EnumMealTypeFilter<"PersonalListItem"> | $Enums.MealType
    completed?: BoolFilter<"PersonalListItem"> | boolean
    userId?: StringNullableFilter<"PersonalListItem"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PersonalListItemOrderByWithRelationInput = {
    id?: SortOrder
    ingrediantName?: SortOrder
    tags?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    completed?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type PersonalListItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonalListItemWhereInput | PersonalListItemWhereInput[]
    OR?: PersonalListItemWhereInput[]
    NOT?: PersonalListItemWhereInput | PersonalListItemWhereInput[]
    ingrediantName?: StringFilter<"PersonalListItem"> | string
    tags?: EnumDatePlanFilter<"PersonalListItem"> | $Enums.DatePlan
    date?: DateTimeFilter<"PersonalListItem"> | Date | string
    mealType?: EnumMealTypeFilter<"PersonalListItem"> | $Enums.MealType
    completed?: BoolFilter<"PersonalListItem"> | boolean
    userId?: StringNullableFilter<"PersonalListItem"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PersonalListItemOrderByWithAggregationInput = {
    id?: SortOrder
    ingrediantName?: SortOrder
    tags?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    completed?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: PersonalListItemCountOrderByAggregateInput
    _max?: PersonalListItemMaxOrderByAggregateInput
    _min?: PersonalListItemMinOrderByAggregateInput
  }

  export type PersonalListItemScalarWhereWithAggregatesInput = {
    AND?: PersonalListItemScalarWhereWithAggregatesInput | PersonalListItemScalarWhereWithAggregatesInput[]
    OR?: PersonalListItemScalarWhereWithAggregatesInput[]
    NOT?: PersonalListItemScalarWhereWithAggregatesInput | PersonalListItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalListItem"> | string
    ingrediantName?: StringWithAggregatesFilter<"PersonalListItem"> | string
    tags?: EnumDatePlanWithAggregatesFilter<"PersonalListItem"> | $Enums.DatePlan
    date?: DateTimeWithAggregatesFilter<"PersonalListItem"> | Date | string
    mealType?: EnumMealTypeWithAggregatesFilter<"PersonalListItem"> | $Enums.MealType
    completed?: BoolWithAggregatesFilter<"PersonalListItem"> | boolean
    userId?: StringNullableWithAggregatesFilter<"PersonalListItem"> | string | null
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: StringFilter<"Recipe"> | string
    date?: DateTimeFilter<"Recipe"> | Date | string
    title?: StringFilter<"Recipe"> | string
    time?: IntFilter<"Recipe"> | number
    description?: StringFilter<"Recipe"> | string
    calories_kcal?: IntFilter<"Recipe"> | number
    protein_g?: FloatFilter<"Recipe"> | number
    ingredients?: StringNullableListFilter<"Recipe">
    mealType?: EnumMealTypeFilter<"Recipe"> | $Enums.MealType
    steps?: StringNullableListFilter<"Recipe">
    skillLevel?: EnumSkillLevelFilter<"Recipe"> | $Enums.SkillLevel
    cuisine?: StringNullableListFilter<"Recipe">
    keywords?: StringNullableListFilter<"Recipe">
    favourite?: BoolFilter<"Recipe"> | boolean
    ownerId?: StringFilter<"Recipe"> | string
    MealPlan?: MealPlanListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    time?: SortOrder
    description?: SortOrder
    calories_kcal?: SortOrder
    protein_g?: SortOrder
    ingredients?: SortOrder
    mealType?: SortOrder
    steps?: SortOrder
    skillLevel?: SortOrder
    cuisine?: SortOrder
    keywords?: SortOrder
    favourite?: SortOrder
    ownerId?: SortOrder
    MealPlan?: MealPlanOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    date?: DateTimeFilter<"Recipe"> | Date | string
    title?: StringFilter<"Recipe"> | string
    time?: IntFilter<"Recipe"> | number
    description?: StringFilter<"Recipe"> | string
    calories_kcal?: IntFilter<"Recipe"> | number
    protein_g?: FloatFilter<"Recipe"> | number
    ingredients?: StringNullableListFilter<"Recipe">
    mealType?: EnumMealTypeFilter<"Recipe"> | $Enums.MealType
    steps?: StringNullableListFilter<"Recipe">
    skillLevel?: EnumSkillLevelFilter<"Recipe"> | $Enums.SkillLevel
    cuisine?: StringNullableListFilter<"Recipe">
    keywords?: StringNullableListFilter<"Recipe">
    favourite?: BoolFilter<"Recipe"> | boolean
    ownerId?: StringFilter<"Recipe"> | string
    MealPlan?: MealPlanListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    time?: SortOrder
    description?: SortOrder
    calories_kcal?: SortOrder
    protein_g?: SortOrder
    ingredients?: SortOrder
    mealType?: SortOrder
    steps?: SortOrder
    skillLevel?: SortOrder
    cuisine?: SortOrder
    keywords?: SortOrder
    favourite?: SortOrder
    ownerId?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipe"> | string
    date?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    title?: StringWithAggregatesFilter<"Recipe"> | string
    time?: IntWithAggregatesFilter<"Recipe"> | number
    description?: StringWithAggregatesFilter<"Recipe"> | string
    calories_kcal?: IntWithAggregatesFilter<"Recipe"> | number
    protein_g?: FloatWithAggregatesFilter<"Recipe"> | number
    ingredients?: StringNullableListFilter<"Recipe">
    mealType?: EnumMealTypeWithAggregatesFilter<"Recipe"> | $Enums.MealType
    steps?: StringNullableListFilter<"Recipe">
    skillLevel?: EnumSkillLevelWithAggregatesFilter<"Recipe"> | $Enums.SkillLevel
    cuisine?: StringNullableListFilter<"Recipe">
    keywords?: StringNullableListFilter<"Recipe">
    favourite?: BoolWithAggregatesFilter<"Recipe"> | boolean
    ownerId?: StringWithAggregatesFilter<"Recipe"> | string
  }

  export type MealPlanWhereInput = {
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    id?: StringFilter<"MealPlan"> | string
    date?: DateTimeFilter<"MealPlan"> | Date | string
    mealType?: EnumMealTypeFilter<"MealPlan"> | $Enums.MealType
    userId?: StringFilter<"MealPlan"> | string
    recipeId?: StringFilter<"MealPlan"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type MealPlanOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    user?: UserOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
  }

  export type MealPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date_mealType_userId?: MealPlanDateMealTypeUserIdCompoundUniqueInput
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    date?: DateTimeFilter<"MealPlan"> | Date | string
    mealType?: EnumMealTypeFilter<"MealPlan"> | $Enums.MealType
    userId?: StringFilter<"MealPlan"> | string
    recipeId?: StringFilter<"MealPlan"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id" | "date_mealType_userId">

  export type MealPlanOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    _count?: MealPlanCountOrderByAggregateInput
    _max?: MealPlanMaxOrderByAggregateInput
    _min?: MealPlanMinOrderByAggregateInput
  }

  export type MealPlanScalarWhereWithAggregatesInput = {
    AND?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    OR?: MealPlanScalarWhereWithAggregatesInput[]
    NOT?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealPlan"> | string
    date?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
    mealType?: EnumMealTypeWithAggregatesFilter<"MealPlan"> | $Enums.MealType
    userId?: StringWithAggregatesFilter<"MealPlan"> | string
    recipeId?: StringWithAggregatesFilter<"MealPlan"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    age: number
    goal: $Enums.Goal
    activityLevel: $Enums.ActivityLevel
    targetWeight: number
    height?: number | null
    workoutCommitment: number
    calorieRequirement: number
    proteinRequirement: number
    dietaryPreferences?: UserCreatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserCreatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserCreatepreferredCuisinesInput | string[]
    credits?: bigint | number
    tierPlan?: $Enums.Plans
    recipes?: RecipeCreateNestedManyWithoutOwnerInput
    MealPlan?: MealPlanCreateNestedManyWithoutUserInput
    PersonalList?: PersonalListItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    age: number
    goal: $Enums.Goal
    activityLevel: $Enums.ActivityLevel
    targetWeight: number
    height?: number | null
    workoutCommitment: number
    calorieRequirement: number
    proteinRequirement: number
    dietaryPreferences?: UserCreatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserCreatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserCreatepreferredCuisinesInput | string[]
    credits?: bigint | number
    tierPlan?: $Enums.Plans
    recipes?: RecipeUncheckedCreateNestedManyWithoutOwnerInput
    MealPlan?: MealPlanUncheckedCreateNestedManyWithoutUserInput
    PersonalList?: PersonalListItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    workoutCommitment?: IntFieldUpdateOperationsInput | number
    calorieRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    dietaryPreferences?: UserUpdatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserUpdatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserUpdatepreferredCuisinesInput | string[]
    credits?: BigIntFieldUpdateOperationsInput | bigint | number
    tierPlan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    recipes?: RecipeUpdateManyWithoutOwnerNestedInput
    MealPlan?: MealPlanUpdateManyWithoutUserNestedInput
    PersonalList?: PersonalListItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    workoutCommitment?: IntFieldUpdateOperationsInput | number
    calorieRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    dietaryPreferences?: UserUpdatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserUpdatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserUpdatepreferredCuisinesInput | string[]
    credits?: BigIntFieldUpdateOperationsInput | bigint | number
    tierPlan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    recipes?: RecipeUncheckedUpdateManyWithoutOwnerNestedInput
    MealPlan?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
    PersonalList?: PersonalListItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    age: number
    goal: $Enums.Goal
    activityLevel: $Enums.ActivityLevel
    targetWeight: number
    height?: number | null
    workoutCommitment: number
    calorieRequirement: number
    proteinRequirement: number
    dietaryPreferences?: UserCreatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserCreatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserCreatepreferredCuisinesInput | string[]
    credits?: bigint | number
    tierPlan?: $Enums.Plans
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    workoutCommitment?: IntFieldUpdateOperationsInput | number
    calorieRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    dietaryPreferences?: UserUpdatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserUpdatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserUpdatepreferredCuisinesInput | string[]
    credits?: BigIntFieldUpdateOperationsInput | bigint | number
    tierPlan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    workoutCommitment?: IntFieldUpdateOperationsInput | number
    calorieRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    dietaryPreferences?: UserUpdatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserUpdatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserUpdatepreferredCuisinesInput | string[]
    credits?: BigIntFieldUpdateOperationsInput | bigint | number
    tierPlan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
  }

  export type PersonalListItemCreateInput = {
    id?: string
    ingrediantName: string
    tags: $Enums.DatePlan
    date?: Date | string
    mealType: $Enums.MealType
    completed?: boolean
    User?: UserCreateNestedOneWithoutPersonalListInput
  }

  export type PersonalListItemUncheckedCreateInput = {
    id?: string
    ingrediantName: string
    tags: $Enums.DatePlan
    date?: Date | string
    mealType: $Enums.MealType
    completed?: boolean
    userId?: string | null
  }

  export type PersonalListItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingrediantName?: StringFieldUpdateOperationsInput | string
    tags?: EnumDatePlanFieldUpdateOperationsInput | $Enums.DatePlan
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    completed?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutPersonalListNestedInput
  }

  export type PersonalListItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingrediantName?: StringFieldUpdateOperationsInput | string
    tags?: EnumDatePlanFieldUpdateOperationsInput | $Enums.DatePlan
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonalListItemCreateManyInput = {
    id?: string
    ingrediantName: string
    tags: $Enums.DatePlan
    date?: Date | string
    mealType: $Enums.MealType
    completed?: boolean
    userId?: string | null
  }

  export type PersonalListItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingrediantName?: StringFieldUpdateOperationsInput | string
    tags?: EnumDatePlanFieldUpdateOperationsInput | $Enums.DatePlan
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonalListItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingrediantName?: StringFieldUpdateOperationsInput | string
    tags?: EnumDatePlanFieldUpdateOperationsInput | $Enums.DatePlan
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeCreateInput = {
    id?: string
    date?: Date | string
    title: string
    time: number
    description: string
    calories_kcal: number
    protein_g: number
    ingredients?: RecipeCreateingredientsInput | string[]
    mealType: $Enums.MealType
    steps?: RecipeCreatestepsInput | string[]
    skillLevel: $Enums.SkillLevel
    cuisine?: RecipeCreatecuisineInput | string[]
    keywords?: RecipeCreatekeywordsInput | string[]
    favourite: boolean
    MealPlan?: MealPlanCreateNestedManyWithoutRecipeInput
    owner: UserCreateNestedOneWithoutRecipesInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    date?: Date | string
    title: string
    time: number
    description: string
    calories_kcal: number
    protein_g: number
    ingredients?: RecipeCreateingredientsInput | string[]
    mealType: $Enums.MealType
    steps?: RecipeCreatestepsInput | string[]
    skillLevel: $Enums.SkillLevel
    cuisine?: RecipeCreatecuisineInput | string[]
    keywords?: RecipeCreatekeywordsInput | string[]
    favourite: boolean
    ownerId: string
    MealPlan?: MealPlanUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    calories_kcal?: IntFieldUpdateOperationsInput | number
    protein_g?: FloatFieldUpdateOperationsInput | number
    ingredients?: RecipeUpdateingredientsInput | string[]
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    steps?: RecipeUpdatestepsInput | string[]
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    cuisine?: RecipeUpdatecuisineInput | string[]
    keywords?: RecipeUpdatekeywordsInput | string[]
    favourite?: BoolFieldUpdateOperationsInput | boolean
    MealPlan?: MealPlanUpdateManyWithoutRecipeNestedInput
    owner?: UserUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    calories_kcal?: IntFieldUpdateOperationsInput | number
    protein_g?: FloatFieldUpdateOperationsInput | number
    ingredients?: RecipeUpdateingredientsInput | string[]
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    steps?: RecipeUpdatestepsInput | string[]
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    cuisine?: RecipeUpdatecuisineInput | string[]
    keywords?: RecipeUpdatekeywordsInput | string[]
    favourite?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    MealPlan?: MealPlanUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    date?: Date | string
    title: string
    time: number
    description: string
    calories_kcal: number
    protein_g: number
    ingredients?: RecipeCreateingredientsInput | string[]
    mealType: $Enums.MealType
    steps?: RecipeCreatestepsInput | string[]
    skillLevel: $Enums.SkillLevel
    cuisine?: RecipeCreatecuisineInput | string[]
    keywords?: RecipeCreatekeywordsInput | string[]
    favourite: boolean
    ownerId: string
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    calories_kcal?: IntFieldUpdateOperationsInput | number
    protein_g?: FloatFieldUpdateOperationsInput | number
    ingredients?: RecipeUpdateingredientsInput | string[]
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    steps?: RecipeUpdatestepsInput | string[]
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    cuisine?: RecipeUpdatecuisineInput | string[]
    keywords?: RecipeUpdatekeywordsInput | string[]
    favourite?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    calories_kcal?: IntFieldUpdateOperationsInput | number
    protein_g?: FloatFieldUpdateOperationsInput | number
    ingredients?: RecipeUpdateingredientsInput | string[]
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    steps?: RecipeUpdatestepsInput | string[]
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    cuisine?: RecipeUpdatecuisineInput | string[]
    keywords?: RecipeUpdatekeywordsInput | string[]
    favourite?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type MealPlanCreateInput = {
    id?: string
    date: Date | string
    mealType: $Enums.MealType
    user: UserCreateNestedOneWithoutMealPlanInput
    recipe: RecipeCreateNestedOneWithoutMealPlanInput
  }

  export type MealPlanUncheckedCreateInput = {
    id?: string
    date: Date | string
    mealType: $Enums.MealType
    userId: string
    recipeId: string
  }

  export type MealPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    user?: UserUpdateOneRequiredWithoutMealPlanNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type MealPlanCreateManyInput = {
    id?: string
    date: Date | string
    mealType: $Enums.MealType
    userId: string
    recipeId: string
  }

  export type MealPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
  }

  export type MealPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumGoalFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel>
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalFilter<$PrismaModel> | $Enums.Goal
  }

  export type EnumActivityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelFilter<$PrismaModel> | $Enums.ActivityLevel
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumPlansFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansFilter<$PrismaModel> | $Enums.Plans
  }

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type MealPlanListRelationFilter = {
    every?: MealPlanWhereInput
    some?: MealPlanWhereInput
    none?: MealPlanWhereInput
  }

  export type PersonalListItemListRelationFilter = {
    every?: PersonalListItemWhereInput
    some?: PersonalListItemWhereInput
    none?: PersonalListItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonalListItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    goal?: SortOrder
    activityLevel?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
    workoutCommitment?: SortOrder
    calorieRequirement?: SortOrder
    proteinRequirement?: SortOrder
    dietaryPreferences?: SortOrder
    dietaryRestrictions?: SortOrder
    preferredCuisines?: SortOrder
    credits?: SortOrder
    tierPlan?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
    workoutCommitment?: SortOrder
    calorieRequirement?: SortOrder
    proteinRequirement?: SortOrder
    credits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    goal?: SortOrder
    activityLevel?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
    workoutCommitment?: SortOrder
    calorieRequirement?: SortOrder
    proteinRequirement?: SortOrder
    credits?: SortOrder
    tierPlan?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    goal?: SortOrder
    activityLevel?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
    workoutCommitment?: SortOrder
    calorieRequirement?: SortOrder
    proteinRequirement?: SortOrder
    credits?: SortOrder
    tierPlan?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
    targetWeight?: SortOrder
    height?: SortOrder
    workoutCommitment?: SortOrder
    calorieRequirement?: SortOrder
    proteinRequirement?: SortOrder
    credits?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumGoalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel>
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalWithAggregatesFilter<$PrismaModel> | $Enums.Goal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalFilter<$PrismaModel>
    _max?: NestedEnumGoalFilter<$PrismaModel>
  }

  export type EnumActivityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumPlansWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansWithAggregatesFilter<$PrismaModel> | $Enums.Plans
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlansFilter<$PrismaModel>
    _max?: NestedEnumPlansFilter<$PrismaModel>
  }

  export type EnumDatePlanFilter<$PrismaModel = never> = {
    equals?: $Enums.DatePlan | EnumDatePlanFieldRefInput<$PrismaModel>
    in?: $Enums.DatePlan[] | ListEnumDatePlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.DatePlan[] | ListEnumDatePlanFieldRefInput<$PrismaModel>
    not?: NestedEnumDatePlanFilter<$PrismaModel> | $Enums.DatePlan
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumMealTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeFilter<$PrismaModel> | $Enums.MealType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PersonalListItemCountOrderByAggregateInput = {
    id?: SortOrder
    ingrediantName?: SortOrder
    tags?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
  }

  export type PersonalListItemMaxOrderByAggregateInput = {
    id?: SortOrder
    ingrediantName?: SortOrder
    tags?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
  }

  export type PersonalListItemMinOrderByAggregateInput = {
    id?: SortOrder
    ingrediantName?: SortOrder
    tags?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
  }

  export type EnumDatePlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DatePlan | EnumDatePlanFieldRefInput<$PrismaModel>
    in?: $Enums.DatePlan[] | ListEnumDatePlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.DatePlan[] | ListEnumDatePlanFieldRefInput<$PrismaModel>
    not?: NestedEnumDatePlanWithAggregatesFilter<$PrismaModel> | $Enums.DatePlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDatePlanFilter<$PrismaModel>
    _max?: NestedEnumDatePlanFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMealTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeWithAggregatesFilter<$PrismaModel> | $Enums.MealType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealTypeFilter<$PrismaModel>
    _max?: NestedEnumMealTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    time?: SortOrder
    description?: SortOrder
    calories_kcal?: SortOrder
    protein_g?: SortOrder
    ingredients?: SortOrder
    mealType?: SortOrder
    steps?: SortOrder
    skillLevel?: SortOrder
    cuisine?: SortOrder
    keywords?: SortOrder
    favourite?: SortOrder
    ownerId?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    time?: SortOrder
    calories_kcal?: SortOrder
    protein_g?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    time?: SortOrder
    description?: SortOrder
    calories_kcal?: SortOrder
    protein_g?: SortOrder
    mealType?: SortOrder
    skillLevel?: SortOrder
    favourite?: SortOrder
    ownerId?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    time?: SortOrder
    description?: SortOrder
    calories_kcal?: SortOrder
    protein_g?: SortOrder
    mealType?: SortOrder
    skillLevel?: SortOrder
    favourite?: SortOrder
    ownerId?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    time?: SortOrder
    calories_kcal?: SortOrder
    protein_g?: SortOrder
  }

  export type EnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type MealPlanDateMealTypeUserIdCompoundUniqueInput = {
    date: Date | string
    mealType: $Enums.MealType
    userId: string
  }

  export type MealPlanCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type MealPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type MealPlanMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    mealType?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type UserCreatedietaryPreferencesInput = {
    set: string[]
  }

  export type UserCreatedietaryRestrictionsInput = {
    set: string[]
  }

  export type UserCreatepreferredCuisinesInput = {
    set: string[]
  }

  export type RecipeCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RecipeCreateWithoutOwnerInput, RecipeUncheckedCreateWithoutOwnerInput> | RecipeCreateWithoutOwnerInput[] | RecipeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutOwnerInput | RecipeCreateOrConnectWithoutOwnerInput[]
    createMany?: RecipeCreateManyOwnerInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type MealPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type PersonalListItemCreateNestedManyWithoutUserInput = {
    create?: XOR<PersonalListItemCreateWithoutUserInput, PersonalListItemUncheckedCreateWithoutUserInput> | PersonalListItemCreateWithoutUserInput[] | PersonalListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalListItemCreateOrConnectWithoutUserInput | PersonalListItemCreateOrConnectWithoutUserInput[]
    createMany?: PersonalListItemCreateManyUserInputEnvelope
    connect?: PersonalListItemWhereUniqueInput | PersonalListItemWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RecipeCreateWithoutOwnerInput, RecipeUncheckedCreateWithoutOwnerInput> | RecipeCreateWithoutOwnerInput[] | RecipeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutOwnerInput | RecipeCreateOrConnectWithoutOwnerInput[]
    createMany?: RecipeCreateManyOwnerInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type MealPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type PersonalListItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PersonalListItemCreateWithoutUserInput, PersonalListItemUncheckedCreateWithoutUserInput> | PersonalListItemCreateWithoutUserInput[] | PersonalListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalListItemCreateOrConnectWithoutUserInput | PersonalListItemCreateOrConnectWithoutUserInput[]
    createMany?: PersonalListItemCreateManyUserInputEnvelope
    connect?: PersonalListItemWhereUniqueInput | PersonalListItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGoalFieldUpdateOperationsInput = {
    set?: $Enums.Goal
  }

  export type EnumActivityLevelFieldUpdateOperationsInput = {
    set?: $Enums.ActivityLevel
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdatedietaryPreferencesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatedietaryRestrictionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatepreferredCuisinesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumPlansFieldUpdateOperationsInput = {
    set?: $Enums.Plans
  }

  export type RecipeUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RecipeCreateWithoutOwnerInput, RecipeUncheckedCreateWithoutOwnerInput> | RecipeCreateWithoutOwnerInput[] | RecipeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutOwnerInput | RecipeCreateOrConnectWithoutOwnerInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutOwnerInput | RecipeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RecipeCreateManyOwnerInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutOwnerInput | RecipeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutOwnerInput | RecipeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type MealPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutUserInput | MealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutUserInput | MealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutUserInput | MealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type PersonalListItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<PersonalListItemCreateWithoutUserInput, PersonalListItemUncheckedCreateWithoutUserInput> | PersonalListItemCreateWithoutUserInput[] | PersonalListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalListItemCreateOrConnectWithoutUserInput | PersonalListItemCreateOrConnectWithoutUserInput[]
    upsert?: PersonalListItemUpsertWithWhereUniqueWithoutUserInput | PersonalListItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PersonalListItemCreateManyUserInputEnvelope
    set?: PersonalListItemWhereUniqueInput | PersonalListItemWhereUniqueInput[]
    disconnect?: PersonalListItemWhereUniqueInput | PersonalListItemWhereUniqueInput[]
    delete?: PersonalListItemWhereUniqueInput | PersonalListItemWhereUniqueInput[]
    connect?: PersonalListItemWhereUniqueInput | PersonalListItemWhereUniqueInput[]
    update?: PersonalListItemUpdateWithWhereUniqueWithoutUserInput | PersonalListItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PersonalListItemUpdateManyWithWhereWithoutUserInput | PersonalListItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PersonalListItemScalarWhereInput | PersonalListItemScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RecipeCreateWithoutOwnerInput, RecipeUncheckedCreateWithoutOwnerInput> | RecipeCreateWithoutOwnerInput[] | RecipeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutOwnerInput | RecipeCreateOrConnectWithoutOwnerInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutOwnerInput | RecipeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RecipeCreateManyOwnerInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutOwnerInput | RecipeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutOwnerInput | RecipeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type MealPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutUserInput | MealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutUserInput | MealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutUserInput | MealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type PersonalListItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PersonalListItemCreateWithoutUserInput, PersonalListItemUncheckedCreateWithoutUserInput> | PersonalListItemCreateWithoutUserInput[] | PersonalListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalListItemCreateOrConnectWithoutUserInput | PersonalListItemCreateOrConnectWithoutUserInput[]
    upsert?: PersonalListItemUpsertWithWhereUniqueWithoutUserInput | PersonalListItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PersonalListItemCreateManyUserInputEnvelope
    set?: PersonalListItemWhereUniqueInput | PersonalListItemWhereUniqueInput[]
    disconnect?: PersonalListItemWhereUniqueInput | PersonalListItemWhereUniqueInput[]
    delete?: PersonalListItemWhereUniqueInput | PersonalListItemWhereUniqueInput[]
    connect?: PersonalListItemWhereUniqueInput | PersonalListItemWhereUniqueInput[]
    update?: PersonalListItemUpdateWithWhereUniqueWithoutUserInput | PersonalListItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PersonalListItemUpdateManyWithWhereWithoutUserInput | PersonalListItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PersonalListItemScalarWhereInput | PersonalListItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPersonalListInput = {
    create?: XOR<UserCreateWithoutPersonalListInput, UserUncheckedCreateWithoutPersonalListInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalListInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDatePlanFieldUpdateOperationsInput = {
    set?: $Enums.DatePlan
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumMealTypeFieldUpdateOperationsInput = {
    set?: $Enums.MealType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutPersonalListNestedInput = {
    create?: XOR<UserCreateWithoutPersonalListInput, UserUncheckedCreateWithoutPersonalListInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalListInput
    upsert?: UserUpsertWithoutPersonalListInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonalListInput, UserUpdateWithoutPersonalListInput>, UserUncheckedUpdateWithoutPersonalListInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RecipeCreateingredientsInput = {
    set: string[]
  }

  export type RecipeCreatestepsInput = {
    set: string[]
  }

  export type RecipeCreatecuisineInput = {
    set: string[]
  }

  export type RecipeCreatekeywordsInput = {
    set: string[]
  }

  export type MealPlanCreateNestedManyWithoutRecipeInput = {
    create?: XOR<MealPlanCreateWithoutRecipeInput, MealPlanUncheckedCreateWithoutRecipeInput> | MealPlanCreateWithoutRecipeInput[] | MealPlanUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutRecipeInput | MealPlanCreateOrConnectWithoutRecipeInput[]
    createMany?: MealPlanCreateManyRecipeInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutRecipesInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type MealPlanUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<MealPlanCreateWithoutRecipeInput, MealPlanUncheckedCreateWithoutRecipeInput> | MealPlanCreateWithoutRecipeInput[] | MealPlanUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutRecipeInput | MealPlanCreateOrConnectWithoutRecipeInput[]
    createMany?: MealPlanCreateManyRecipeInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type RecipeUpdateingredientsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RecipeUpdatestepsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumSkillLevelFieldUpdateOperationsInput = {
    set?: $Enums.SkillLevel
  }

  export type RecipeUpdatecuisineInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RecipeUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MealPlanUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<MealPlanCreateWithoutRecipeInput, MealPlanUncheckedCreateWithoutRecipeInput> | MealPlanCreateWithoutRecipeInput[] | MealPlanUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutRecipeInput | MealPlanCreateOrConnectWithoutRecipeInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutRecipeInput | MealPlanUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: MealPlanCreateManyRecipeInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutRecipeInput | MealPlanUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutRecipeInput | MealPlanUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    upsert?: UserUpsertWithoutRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecipesInput, UserUpdateWithoutRecipesInput>, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type MealPlanUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<MealPlanCreateWithoutRecipeInput, MealPlanUncheckedCreateWithoutRecipeInput> | MealPlanCreateWithoutRecipeInput[] | MealPlanUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutRecipeInput | MealPlanCreateOrConnectWithoutRecipeInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutRecipeInput | MealPlanUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: MealPlanCreateManyRecipeInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutRecipeInput | MealPlanUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutRecipeInput | MealPlanUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMealPlanInput = {
    create?: XOR<UserCreateWithoutMealPlanInput, UserUncheckedCreateWithoutMealPlanInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealPlanInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutMealPlanInput = {
    create?: XOR<RecipeCreateWithoutMealPlanInput, RecipeUncheckedCreateWithoutMealPlanInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutMealPlanInput
    connect?: RecipeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMealPlanNestedInput = {
    create?: XOR<UserCreateWithoutMealPlanInput, UserUncheckedCreateWithoutMealPlanInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealPlanInput
    upsert?: UserUpsertWithoutMealPlanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMealPlanInput, UserUpdateWithoutMealPlanInput>, UserUncheckedUpdateWithoutMealPlanInput>
  }

  export type RecipeUpdateOneRequiredWithoutMealPlanNestedInput = {
    create?: XOR<RecipeCreateWithoutMealPlanInput, RecipeUncheckedCreateWithoutMealPlanInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutMealPlanInput
    upsert?: RecipeUpsertWithoutMealPlanInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutMealPlanInput, RecipeUpdateWithoutMealPlanInput>, RecipeUncheckedUpdateWithoutMealPlanInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumGoalFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel>
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalFilter<$PrismaModel> | $Enums.Goal
  }

  export type NestedEnumActivityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelFilter<$PrismaModel> | $Enums.ActivityLevel
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumPlansFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansFilter<$PrismaModel> | $Enums.Plans
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumGoalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel>
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalWithAggregatesFilter<$PrismaModel> | $Enums.Goal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalFilter<$PrismaModel>
    _max?: NestedEnumGoalFilter<$PrismaModel>
  }

  export type NestedEnumActivityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumPlansWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansWithAggregatesFilter<$PrismaModel> | $Enums.Plans
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlansFilter<$PrismaModel>
    _max?: NestedEnumPlansFilter<$PrismaModel>
  }

  export type NestedEnumDatePlanFilter<$PrismaModel = never> = {
    equals?: $Enums.DatePlan | EnumDatePlanFieldRefInput<$PrismaModel>
    in?: $Enums.DatePlan[] | ListEnumDatePlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.DatePlan[] | ListEnumDatePlanFieldRefInput<$PrismaModel>
    not?: NestedEnumDatePlanFilter<$PrismaModel> | $Enums.DatePlan
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumMealTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeFilter<$PrismaModel> | $Enums.MealType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumDatePlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DatePlan | EnumDatePlanFieldRefInput<$PrismaModel>
    in?: $Enums.DatePlan[] | ListEnumDatePlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.DatePlan[] | ListEnumDatePlanFieldRefInput<$PrismaModel>
    not?: NestedEnumDatePlanWithAggregatesFilter<$PrismaModel> | $Enums.DatePlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDatePlanFilter<$PrismaModel>
    _max?: NestedEnumDatePlanFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMealTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeWithAggregatesFilter<$PrismaModel> | $Enums.MealType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealTypeFilter<$PrismaModel>
    _max?: NestedEnumMealTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type RecipeCreateWithoutOwnerInput = {
    id?: string
    date?: Date | string
    title: string
    time: number
    description: string
    calories_kcal: number
    protein_g: number
    ingredients?: RecipeCreateingredientsInput | string[]
    mealType: $Enums.MealType
    steps?: RecipeCreatestepsInput | string[]
    skillLevel: $Enums.SkillLevel
    cuisine?: RecipeCreatecuisineInput | string[]
    keywords?: RecipeCreatekeywordsInput | string[]
    favourite: boolean
    MealPlan?: MealPlanCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutOwnerInput = {
    id?: string
    date?: Date | string
    title: string
    time: number
    description: string
    calories_kcal: number
    protein_g: number
    ingredients?: RecipeCreateingredientsInput | string[]
    mealType: $Enums.MealType
    steps?: RecipeCreatestepsInput | string[]
    skillLevel: $Enums.SkillLevel
    cuisine?: RecipeCreatecuisineInput | string[]
    keywords?: RecipeCreatekeywordsInput | string[]
    favourite: boolean
    MealPlan?: MealPlanUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutOwnerInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutOwnerInput, RecipeUncheckedCreateWithoutOwnerInput>
  }

  export type RecipeCreateManyOwnerInputEnvelope = {
    data: RecipeCreateManyOwnerInput | RecipeCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type MealPlanCreateWithoutUserInput = {
    id?: string
    date: Date | string
    mealType: $Enums.MealType
    recipe: RecipeCreateNestedOneWithoutMealPlanInput
  }

  export type MealPlanUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    mealType: $Enums.MealType
    recipeId: string
  }

  export type MealPlanCreateOrConnectWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput>
  }

  export type MealPlanCreateManyUserInputEnvelope = {
    data: MealPlanCreateManyUserInput | MealPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PersonalListItemCreateWithoutUserInput = {
    id?: string
    ingrediantName: string
    tags: $Enums.DatePlan
    date?: Date | string
    mealType: $Enums.MealType
    completed?: boolean
  }

  export type PersonalListItemUncheckedCreateWithoutUserInput = {
    id?: string
    ingrediantName: string
    tags: $Enums.DatePlan
    date?: Date | string
    mealType: $Enums.MealType
    completed?: boolean
  }

  export type PersonalListItemCreateOrConnectWithoutUserInput = {
    where: PersonalListItemWhereUniqueInput
    create: XOR<PersonalListItemCreateWithoutUserInput, PersonalListItemUncheckedCreateWithoutUserInput>
  }

  export type PersonalListItemCreateManyUserInputEnvelope = {
    data: PersonalListItemCreateManyUserInput | PersonalListItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUpsertWithWhereUniqueWithoutOwnerInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutOwnerInput, RecipeUncheckedUpdateWithoutOwnerInput>
    create: XOR<RecipeCreateWithoutOwnerInput, RecipeUncheckedCreateWithoutOwnerInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutOwnerInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutOwnerInput, RecipeUncheckedUpdateWithoutOwnerInput>
  }

  export type RecipeUpdateManyWithWhereWithoutOwnerInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutOwnerInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    OR?: RecipeScalarWhereInput[]
    NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    id?: StringFilter<"Recipe"> | string
    date?: DateTimeFilter<"Recipe"> | Date | string
    title?: StringFilter<"Recipe"> | string
    time?: IntFilter<"Recipe"> | number
    description?: StringFilter<"Recipe"> | string
    calories_kcal?: IntFilter<"Recipe"> | number
    protein_g?: FloatFilter<"Recipe"> | number
    ingredients?: StringNullableListFilter<"Recipe">
    mealType?: EnumMealTypeFilter<"Recipe"> | $Enums.MealType
    steps?: StringNullableListFilter<"Recipe">
    skillLevel?: EnumSkillLevelFilter<"Recipe"> | $Enums.SkillLevel
    cuisine?: StringNullableListFilter<"Recipe">
    keywords?: StringNullableListFilter<"Recipe">
    favourite?: BoolFilter<"Recipe"> | boolean
    ownerId?: StringFilter<"Recipe"> | string
  }

  export type MealPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    update: XOR<MealPlanUpdateWithoutUserInput, MealPlanUncheckedUpdateWithoutUserInput>
    create: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput>
  }

  export type MealPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    data: XOR<MealPlanUpdateWithoutUserInput, MealPlanUncheckedUpdateWithoutUserInput>
  }

  export type MealPlanUpdateManyWithWhereWithoutUserInput = {
    where: MealPlanScalarWhereInput
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type MealPlanScalarWhereInput = {
    AND?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
    OR?: MealPlanScalarWhereInput[]
    NOT?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
    id?: StringFilter<"MealPlan"> | string
    date?: DateTimeFilter<"MealPlan"> | Date | string
    mealType?: EnumMealTypeFilter<"MealPlan"> | $Enums.MealType
    userId?: StringFilter<"MealPlan"> | string
    recipeId?: StringFilter<"MealPlan"> | string
  }

  export type PersonalListItemUpsertWithWhereUniqueWithoutUserInput = {
    where: PersonalListItemWhereUniqueInput
    update: XOR<PersonalListItemUpdateWithoutUserInput, PersonalListItemUncheckedUpdateWithoutUserInput>
    create: XOR<PersonalListItemCreateWithoutUserInput, PersonalListItemUncheckedCreateWithoutUserInput>
  }

  export type PersonalListItemUpdateWithWhereUniqueWithoutUserInput = {
    where: PersonalListItemWhereUniqueInput
    data: XOR<PersonalListItemUpdateWithoutUserInput, PersonalListItemUncheckedUpdateWithoutUserInput>
  }

  export type PersonalListItemUpdateManyWithWhereWithoutUserInput = {
    where: PersonalListItemScalarWhereInput
    data: XOR<PersonalListItemUpdateManyMutationInput, PersonalListItemUncheckedUpdateManyWithoutUserInput>
  }

  export type PersonalListItemScalarWhereInput = {
    AND?: PersonalListItemScalarWhereInput | PersonalListItemScalarWhereInput[]
    OR?: PersonalListItemScalarWhereInput[]
    NOT?: PersonalListItemScalarWhereInput | PersonalListItemScalarWhereInput[]
    id?: StringFilter<"PersonalListItem"> | string
    ingrediantName?: StringFilter<"PersonalListItem"> | string
    tags?: EnumDatePlanFilter<"PersonalListItem"> | $Enums.DatePlan
    date?: DateTimeFilter<"PersonalListItem"> | Date | string
    mealType?: EnumMealTypeFilter<"PersonalListItem"> | $Enums.MealType
    completed?: BoolFilter<"PersonalListItem"> | boolean
    userId?: StringNullableFilter<"PersonalListItem"> | string | null
  }

  export type UserCreateWithoutPersonalListInput = {
    id?: string
    email: string
    name: string
    age: number
    goal: $Enums.Goal
    activityLevel: $Enums.ActivityLevel
    targetWeight: number
    height?: number | null
    workoutCommitment: number
    calorieRequirement: number
    proteinRequirement: number
    dietaryPreferences?: UserCreatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserCreatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserCreatepreferredCuisinesInput | string[]
    credits?: bigint | number
    tierPlan?: $Enums.Plans
    recipes?: RecipeCreateNestedManyWithoutOwnerInput
    MealPlan?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPersonalListInput = {
    id?: string
    email: string
    name: string
    age: number
    goal: $Enums.Goal
    activityLevel: $Enums.ActivityLevel
    targetWeight: number
    height?: number | null
    workoutCommitment: number
    calorieRequirement: number
    proteinRequirement: number
    dietaryPreferences?: UserCreatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserCreatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserCreatepreferredCuisinesInput | string[]
    credits?: bigint | number
    tierPlan?: $Enums.Plans
    recipes?: RecipeUncheckedCreateNestedManyWithoutOwnerInput
    MealPlan?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPersonalListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonalListInput, UserUncheckedCreateWithoutPersonalListInput>
  }

  export type UserUpsertWithoutPersonalListInput = {
    update: XOR<UserUpdateWithoutPersonalListInput, UserUncheckedUpdateWithoutPersonalListInput>
    create: XOR<UserCreateWithoutPersonalListInput, UserUncheckedCreateWithoutPersonalListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonalListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonalListInput, UserUncheckedUpdateWithoutPersonalListInput>
  }

  export type UserUpdateWithoutPersonalListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    workoutCommitment?: IntFieldUpdateOperationsInput | number
    calorieRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    dietaryPreferences?: UserUpdatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserUpdatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserUpdatepreferredCuisinesInput | string[]
    credits?: BigIntFieldUpdateOperationsInput | bigint | number
    tierPlan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    recipes?: RecipeUpdateManyWithoutOwnerNestedInput
    MealPlan?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonalListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    workoutCommitment?: IntFieldUpdateOperationsInput | number
    calorieRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    dietaryPreferences?: UserUpdatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserUpdatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserUpdatepreferredCuisinesInput | string[]
    credits?: BigIntFieldUpdateOperationsInput | bigint | number
    tierPlan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    recipes?: RecipeUncheckedUpdateManyWithoutOwnerNestedInput
    MealPlan?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealPlanCreateWithoutRecipeInput = {
    id?: string
    date: Date | string
    mealType: $Enums.MealType
    user: UserCreateNestedOneWithoutMealPlanInput
  }

  export type MealPlanUncheckedCreateWithoutRecipeInput = {
    id?: string
    date: Date | string
    mealType: $Enums.MealType
    userId: string
  }

  export type MealPlanCreateOrConnectWithoutRecipeInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutRecipeInput, MealPlanUncheckedCreateWithoutRecipeInput>
  }

  export type MealPlanCreateManyRecipeInputEnvelope = {
    data: MealPlanCreateManyRecipeInput | MealPlanCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRecipesInput = {
    id?: string
    email: string
    name: string
    age: number
    goal: $Enums.Goal
    activityLevel: $Enums.ActivityLevel
    targetWeight: number
    height?: number | null
    workoutCommitment: number
    calorieRequirement: number
    proteinRequirement: number
    dietaryPreferences?: UserCreatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserCreatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserCreatepreferredCuisinesInput | string[]
    credits?: bigint | number
    tierPlan?: $Enums.Plans
    MealPlan?: MealPlanCreateNestedManyWithoutUserInput
    PersonalList?: PersonalListItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecipesInput = {
    id?: string
    email: string
    name: string
    age: number
    goal: $Enums.Goal
    activityLevel: $Enums.ActivityLevel
    targetWeight: number
    height?: number | null
    workoutCommitment: number
    calorieRequirement: number
    proteinRequirement: number
    dietaryPreferences?: UserCreatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserCreatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserCreatepreferredCuisinesInput | string[]
    credits?: bigint | number
    tierPlan?: $Enums.Plans
    MealPlan?: MealPlanUncheckedCreateNestedManyWithoutUserInput
    PersonalList?: PersonalListItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
  }

  export type MealPlanUpsertWithWhereUniqueWithoutRecipeInput = {
    where: MealPlanWhereUniqueInput
    update: XOR<MealPlanUpdateWithoutRecipeInput, MealPlanUncheckedUpdateWithoutRecipeInput>
    create: XOR<MealPlanCreateWithoutRecipeInput, MealPlanUncheckedCreateWithoutRecipeInput>
  }

  export type MealPlanUpdateWithWhereUniqueWithoutRecipeInput = {
    where: MealPlanWhereUniqueInput
    data: XOR<MealPlanUpdateWithoutRecipeInput, MealPlanUncheckedUpdateWithoutRecipeInput>
  }

  export type MealPlanUpdateManyWithWhereWithoutRecipeInput = {
    where: MealPlanScalarWhereInput
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyWithoutRecipeInput>
  }

  export type UserUpsertWithoutRecipesInput = {
    update: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type UserUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    workoutCommitment?: IntFieldUpdateOperationsInput | number
    calorieRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    dietaryPreferences?: UserUpdatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserUpdatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserUpdatepreferredCuisinesInput | string[]
    credits?: BigIntFieldUpdateOperationsInput | bigint | number
    tierPlan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    MealPlan?: MealPlanUpdateManyWithoutUserNestedInput
    PersonalList?: PersonalListItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    workoutCommitment?: IntFieldUpdateOperationsInput | number
    calorieRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    dietaryPreferences?: UserUpdatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserUpdatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserUpdatepreferredCuisinesInput | string[]
    credits?: BigIntFieldUpdateOperationsInput | bigint | number
    tierPlan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    MealPlan?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
    PersonalList?: PersonalListItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMealPlanInput = {
    id?: string
    email: string
    name: string
    age: number
    goal: $Enums.Goal
    activityLevel: $Enums.ActivityLevel
    targetWeight: number
    height?: number | null
    workoutCommitment: number
    calorieRequirement: number
    proteinRequirement: number
    dietaryPreferences?: UserCreatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserCreatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserCreatepreferredCuisinesInput | string[]
    credits?: bigint | number
    tierPlan?: $Enums.Plans
    recipes?: RecipeCreateNestedManyWithoutOwnerInput
    PersonalList?: PersonalListItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMealPlanInput = {
    id?: string
    email: string
    name: string
    age: number
    goal: $Enums.Goal
    activityLevel: $Enums.ActivityLevel
    targetWeight: number
    height?: number | null
    workoutCommitment: number
    calorieRequirement: number
    proteinRequirement: number
    dietaryPreferences?: UserCreatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserCreatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserCreatepreferredCuisinesInput | string[]
    credits?: bigint | number
    tierPlan?: $Enums.Plans
    recipes?: RecipeUncheckedCreateNestedManyWithoutOwnerInput
    PersonalList?: PersonalListItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMealPlanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMealPlanInput, UserUncheckedCreateWithoutMealPlanInput>
  }

  export type RecipeCreateWithoutMealPlanInput = {
    id?: string
    date?: Date | string
    title: string
    time: number
    description: string
    calories_kcal: number
    protein_g: number
    ingredients?: RecipeCreateingredientsInput | string[]
    mealType: $Enums.MealType
    steps?: RecipeCreatestepsInput | string[]
    skillLevel: $Enums.SkillLevel
    cuisine?: RecipeCreatecuisineInput | string[]
    keywords?: RecipeCreatekeywordsInput | string[]
    favourite: boolean
    owner: UserCreateNestedOneWithoutRecipesInput
  }

  export type RecipeUncheckedCreateWithoutMealPlanInput = {
    id?: string
    date?: Date | string
    title: string
    time: number
    description: string
    calories_kcal: number
    protein_g: number
    ingredients?: RecipeCreateingredientsInput | string[]
    mealType: $Enums.MealType
    steps?: RecipeCreatestepsInput | string[]
    skillLevel: $Enums.SkillLevel
    cuisine?: RecipeCreatecuisineInput | string[]
    keywords?: RecipeCreatekeywordsInput | string[]
    favourite: boolean
    ownerId: string
  }

  export type RecipeCreateOrConnectWithoutMealPlanInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutMealPlanInput, RecipeUncheckedCreateWithoutMealPlanInput>
  }

  export type UserUpsertWithoutMealPlanInput = {
    update: XOR<UserUpdateWithoutMealPlanInput, UserUncheckedUpdateWithoutMealPlanInput>
    create: XOR<UserCreateWithoutMealPlanInput, UserUncheckedCreateWithoutMealPlanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMealPlanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMealPlanInput, UserUncheckedUpdateWithoutMealPlanInput>
  }

  export type UserUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    workoutCommitment?: IntFieldUpdateOperationsInput | number
    calorieRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    dietaryPreferences?: UserUpdatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserUpdatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserUpdatepreferredCuisinesInput | string[]
    credits?: BigIntFieldUpdateOperationsInput | bigint | number
    tierPlan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    recipes?: RecipeUpdateManyWithoutOwnerNestedInput
    PersonalList?: PersonalListItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    targetWeight?: FloatFieldUpdateOperationsInput | number
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    workoutCommitment?: IntFieldUpdateOperationsInput | number
    calorieRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    dietaryPreferences?: UserUpdatedietaryPreferencesInput | string[]
    dietaryRestrictions?: UserUpdatedietaryRestrictionsInput | string[]
    preferredCuisines?: UserUpdatepreferredCuisinesInput | string[]
    credits?: BigIntFieldUpdateOperationsInput | bigint | number
    tierPlan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    recipes?: RecipeUncheckedUpdateManyWithoutOwnerNestedInput
    PersonalList?: PersonalListItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecipeUpsertWithoutMealPlanInput = {
    update: XOR<RecipeUpdateWithoutMealPlanInput, RecipeUncheckedUpdateWithoutMealPlanInput>
    create: XOR<RecipeCreateWithoutMealPlanInput, RecipeUncheckedCreateWithoutMealPlanInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutMealPlanInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutMealPlanInput, RecipeUncheckedUpdateWithoutMealPlanInput>
  }

  export type RecipeUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    calories_kcal?: IntFieldUpdateOperationsInput | number
    protein_g?: FloatFieldUpdateOperationsInput | number
    ingredients?: RecipeUpdateingredientsInput | string[]
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    steps?: RecipeUpdatestepsInput | string[]
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    cuisine?: RecipeUpdatecuisineInput | string[]
    keywords?: RecipeUpdatekeywordsInput | string[]
    favourite?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeUncheckedUpdateWithoutMealPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    calories_kcal?: IntFieldUpdateOperationsInput | number
    protein_g?: FloatFieldUpdateOperationsInput | number
    ingredients?: RecipeUpdateingredientsInput | string[]
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    steps?: RecipeUpdatestepsInput | string[]
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    cuisine?: RecipeUpdatecuisineInput | string[]
    keywords?: RecipeUpdatekeywordsInput | string[]
    favourite?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeCreateManyOwnerInput = {
    id?: string
    date?: Date | string
    title: string
    time: number
    description: string
    calories_kcal: number
    protein_g: number
    ingredients?: RecipeCreateingredientsInput | string[]
    mealType: $Enums.MealType
    steps?: RecipeCreatestepsInput | string[]
    skillLevel: $Enums.SkillLevel
    cuisine?: RecipeCreatecuisineInput | string[]
    keywords?: RecipeCreatekeywordsInput | string[]
    favourite: boolean
  }

  export type MealPlanCreateManyUserInput = {
    id?: string
    date: Date | string
    mealType: $Enums.MealType
    recipeId: string
  }

  export type PersonalListItemCreateManyUserInput = {
    id?: string
    ingrediantName: string
    tags: $Enums.DatePlan
    date?: Date | string
    mealType: $Enums.MealType
    completed?: boolean
  }

  export type RecipeUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    calories_kcal?: IntFieldUpdateOperationsInput | number
    protein_g?: FloatFieldUpdateOperationsInput | number
    ingredients?: RecipeUpdateingredientsInput | string[]
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    steps?: RecipeUpdatestepsInput | string[]
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    cuisine?: RecipeUpdatecuisineInput | string[]
    keywords?: RecipeUpdatekeywordsInput | string[]
    favourite?: BoolFieldUpdateOperationsInput | boolean
    MealPlan?: MealPlanUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    calories_kcal?: IntFieldUpdateOperationsInput | number
    protein_g?: FloatFieldUpdateOperationsInput | number
    ingredients?: RecipeUpdateingredientsInput | string[]
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    steps?: RecipeUpdatestepsInput | string[]
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    cuisine?: RecipeUpdatecuisineInput | string[]
    keywords?: RecipeUpdatekeywordsInput | string[]
    favourite?: BoolFieldUpdateOperationsInput | boolean
    MealPlan?: MealPlanUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    calories_kcal?: IntFieldUpdateOperationsInput | number
    protein_g?: FloatFieldUpdateOperationsInput | number
    ingredients?: RecipeUpdateingredientsInput | string[]
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    steps?: RecipeUpdatestepsInput | string[]
    skillLevel?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    cuisine?: RecipeUpdatecuisineInput | string[]
    keywords?: RecipeUpdatekeywordsInput | string[]
    favourite?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MealPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    recipe?: RecipeUpdateOneRequiredWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type MealPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalListItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingrediantName?: StringFieldUpdateOperationsInput | string
    tags?: EnumDatePlanFieldUpdateOperationsInput | $Enums.DatePlan
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonalListItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingrediantName?: StringFieldUpdateOperationsInput | string
    tags?: EnumDatePlanFieldUpdateOperationsInput | $Enums.DatePlan
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonalListItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingrediantName?: StringFieldUpdateOperationsInput | string
    tags?: EnumDatePlanFieldUpdateOperationsInput | $Enums.DatePlan
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MealPlanCreateManyRecipeInput = {
    id?: string
    date: Date | string
    mealType: $Enums.MealType
    userId: string
  }

  export type MealPlanUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    user?: UserUpdateOneRequiredWithoutMealPlanNestedInput
  }

  export type MealPlanUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MealPlanUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    userId?: StringFieldUpdateOperationsInput | string
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