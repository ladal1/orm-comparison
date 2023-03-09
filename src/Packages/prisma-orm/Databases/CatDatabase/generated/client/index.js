
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.10.1
 * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
 */
Prisma.prismaVersion = {
  client: "4.10.1",
  engine: "aead147aa326ccb985dcfed5b065b4fdabd44b19"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "Databases/CatDatabase/generated/client",
    "CatDatabase/generated/client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CatScalarFieldEnum = makeEnum({
  id: 'id',
  cat_color_id: 'cat_color_id',
  cat_name: 'cat_name',
  date_of_birth: 'date_of_birth'
});

exports.Prisma.Cat_colorScalarFieldEnum = makeEnum({
  id: 'id',
  color_name: 'color_name'
});

exports.Prisma.Color_hexScalarFieldEnum = makeEnum({
  id: 'id',
  hex_code: 'hex_code'
});

exports.Prisma.HouseScalarFieldEnum = makeEnum({
  id: 'id',
  house_address: 'house_address',
  has_dog: 'has_dog'
});

exports.Prisma.House_catScalarFieldEnum = makeEnum({
  house_id: 'house_id',
  cat_id: 'cat_id'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.ToyScalarFieldEnum = makeEnum({
  id: 'id',
  toys_producer_id: 'toys_producer_id',
  toy_name: 'toy_name',
  barcode: 'barcode',
  price: 'price',
  currency: 'currency',
  naughty: 'naughty'
});

exports.Prisma.Toy_houseScalarFieldEnum = makeEnum({
  toy_id: 'toy_id',
  house_id: 'house_id',
  amount: 'amount'
});

exports.Prisma.Toys_producerScalarFieldEnum = makeEnum({
  id: 'id',
  stock_info: 'stock_info',
  hq_location: 'hq_location'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  cat: 'cat',
  cat_color: 'cat_color',
  color_hex: 'color_hex',
  house: 'house',
  house_cat: 'house_cat',
  toy: 'toy',
  toy_house: 'toy_house',
  toys_producer: 'toys_producer'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"cat\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat_color_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_of_birth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat_color\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cat_color\",\"relationName\":\"catTocat_color\",\"relationFromFields\":[\"cat_color_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"house_cat\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"house_cat\",\"relationName\":\"catTohouse_cat\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"cat_color\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cat\",\"relationName\":\"catTocat_color\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color_hex\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"color_hex\",\"relationName\":\"cat_colorTocolor_hex\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"color_hex\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hex_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat_color\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cat_color\",\"relationName\":\"cat_colorTocolor_hex\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"house\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"house_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"has_dog\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"house_cat\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"house_cat\",\"relationName\":\"houseTohouse_cat\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toy_house\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"toy_house\",\"relationName\":\"houseTotoy_house\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"house_cat\",\"dbName\":null,\"fields\":[{\"name\":\"house_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cat\",\"relationName\":\"catTohouse_cat\",\"relationFromFields\":[\"cat_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"house\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"house\",\"relationName\":\"houseTohouse_cat\",\"relationFromFields\":[\"house_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"house_id\",\"cat_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"toy\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toys_producer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toy_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"barcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"naughty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toys_producer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"toys_producer\",\"relationName\":\"toyTotoys_producer\",\"relationFromFields\":[\"toys_producer_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toy_house\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"toy_house\",\"relationName\":\"toyTotoy_house\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"toy_house\",\"dbName\":null,\"fields\":[{\"name\":\"toy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"house_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"house\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"house\",\"relationName\":\"houseTotoy_house\",\"relationFromFields\":[\"house_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"toy\",\"relationName\":\"toyTotoy_house\",\"relationFromFields\":[\"toy_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"toy_id\",\"house_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"toys_producer\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock_info\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hq_location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toy\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"toy\",\"relationName\":\"toyTotoys_producer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"cat\",\"plural\":\"cats\",\"findUnique\":\"findUniquecat\",\"findUniqueOrThrow\":\"findUniquecatOrThrow\",\"findFirst\":\"findFirstcat\",\"findFirstOrThrow\":\"findFirstcatOrThrow\",\"findMany\":\"findManycat\",\"create\":\"createOnecat\",\"createMany\":\"createManycat\",\"delete\":\"deleteOnecat\",\"update\":\"updateOnecat\",\"deleteMany\":\"deleteManycat\",\"updateMany\":\"updateManycat\",\"upsert\":\"upsertOnecat\",\"aggregate\":\"aggregatecat\",\"groupBy\":\"groupBycat\"},{\"model\":\"cat_color\",\"plural\":\"cat_colors\",\"findUnique\":\"findUniquecat_color\",\"findUniqueOrThrow\":\"findUniquecat_colorOrThrow\",\"findFirst\":\"findFirstcat_color\",\"findFirstOrThrow\":\"findFirstcat_colorOrThrow\",\"findMany\":\"findManycat_color\",\"create\":\"createOnecat_color\",\"createMany\":\"createManycat_color\",\"delete\":\"deleteOnecat_color\",\"update\":\"updateOnecat_color\",\"deleteMany\":\"deleteManycat_color\",\"updateMany\":\"updateManycat_color\",\"upsert\":\"upsertOnecat_color\",\"aggregate\":\"aggregatecat_color\",\"groupBy\":\"groupBycat_color\"},{\"model\":\"color_hex\",\"plural\":\"color_hexes\",\"findUnique\":\"findUniquecolor_hex\",\"findUniqueOrThrow\":\"findUniquecolor_hexOrThrow\",\"findFirst\":\"findFirstcolor_hex\",\"findFirstOrThrow\":\"findFirstcolor_hexOrThrow\",\"findMany\":\"findManycolor_hex\",\"create\":\"createOnecolor_hex\",\"createMany\":\"createManycolor_hex\",\"delete\":\"deleteOnecolor_hex\",\"update\":\"updateOnecolor_hex\",\"deleteMany\":\"deleteManycolor_hex\",\"updateMany\":\"updateManycolor_hex\",\"upsert\":\"upsertOnecolor_hex\",\"aggregate\":\"aggregatecolor_hex\",\"groupBy\":\"groupBycolor_hex\"},{\"model\":\"house\",\"plural\":\"houses\",\"findUnique\":\"findUniquehouse\",\"findUniqueOrThrow\":\"findUniquehouseOrThrow\",\"findFirst\":\"findFirsthouse\",\"findFirstOrThrow\":\"findFirsthouseOrThrow\",\"findMany\":\"findManyhouse\",\"create\":\"createOnehouse\",\"createMany\":\"createManyhouse\",\"delete\":\"deleteOnehouse\",\"update\":\"updateOnehouse\",\"deleteMany\":\"deleteManyhouse\",\"updateMany\":\"updateManyhouse\",\"upsert\":\"upsertOnehouse\",\"aggregate\":\"aggregatehouse\",\"groupBy\":\"groupByhouse\"},{\"model\":\"house_cat\",\"plural\":\"house_cats\",\"findUnique\":\"findUniquehouse_cat\",\"findUniqueOrThrow\":\"findUniquehouse_catOrThrow\",\"findFirst\":\"findFirsthouse_cat\",\"findFirstOrThrow\":\"findFirsthouse_catOrThrow\",\"findMany\":\"findManyhouse_cat\",\"create\":\"createOnehouse_cat\",\"createMany\":\"createManyhouse_cat\",\"delete\":\"deleteOnehouse_cat\",\"update\":\"updateOnehouse_cat\",\"deleteMany\":\"deleteManyhouse_cat\",\"updateMany\":\"updateManyhouse_cat\",\"upsert\":\"upsertOnehouse_cat\",\"aggregate\":\"aggregatehouse_cat\",\"groupBy\":\"groupByhouse_cat\"},{\"model\":\"toy\",\"plural\":\"toys\",\"findUnique\":\"findUniquetoy\",\"findUniqueOrThrow\":\"findUniquetoyOrThrow\",\"findFirst\":\"findFirsttoy\",\"findFirstOrThrow\":\"findFirsttoyOrThrow\",\"findMany\":\"findManytoy\",\"create\":\"createOnetoy\",\"createMany\":\"createManytoy\",\"delete\":\"deleteOnetoy\",\"update\":\"updateOnetoy\",\"deleteMany\":\"deleteManytoy\",\"updateMany\":\"updateManytoy\",\"upsert\":\"upsertOnetoy\",\"aggregate\":\"aggregatetoy\",\"groupBy\":\"groupBytoy\"},{\"model\":\"toy_house\",\"plural\":\"toy_houses\",\"findUnique\":\"findUniquetoy_house\",\"findUniqueOrThrow\":\"findUniquetoy_houseOrThrow\",\"findFirst\":\"findFirsttoy_house\",\"findFirstOrThrow\":\"findFirsttoy_houseOrThrow\",\"findMany\":\"findManytoy_house\",\"create\":\"createOnetoy_house\",\"createMany\":\"createManytoy_house\",\"delete\":\"deleteOnetoy_house\",\"update\":\"updateOnetoy_house\",\"deleteMany\":\"deleteManytoy_house\",\"updateMany\":\"updateManytoy_house\",\"upsert\":\"upsertOnetoy_house\",\"aggregate\":\"aggregatetoy_house\",\"groupBy\":\"groupBytoy_house\"},{\"model\":\"toys_producer\",\"plural\":\"toys_producers\",\"findUnique\":\"findUniquetoys_producer\",\"findUniqueOrThrow\":\"findUniquetoys_producerOrThrow\",\"findFirst\":\"findFirsttoys_producer\",\"findFirstOrThrow\":\"findFirsttoys_producerOrThrow\",\"findMany\":\"findManytoys_producer\",\"create\":\"createOnetoys_producer\",\"createMany\":\"createManytoys_producer\",\"delete\":\"deleteOnetoys_producer\",\"update\":\"updateOnetoys_producer\",\"deleteMany\":\"deleteManytoys_producer\",\"updateMany\":\"updateManytoys_producer\",\"upsert\":\"upsertOnetoys_producer\",\"aggregate\":\"aggregatetoys_producer\",\"groupBy\":\"groupBytoys_producer\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/ladal/cvut/diploma/src/Packages/prismaORM/Databases/CatDatabase/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "4.10.1",
  "engineVersion": "aead147aa326ccb985dcfed5b065b4fdabd44b19",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "Databases/CatDatabase/generated/client/libquery_engine-debian-openssl-1.1.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "Databases/CatDatabase/generated/client/schema.prisma")
