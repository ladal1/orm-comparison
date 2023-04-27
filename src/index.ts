/* eslint-disable @typescript-eslint/no-unused-vars */
import ConsoleSerializer from 'BenchmarkUtils/ResultSerializers/ConsoleSerializer'
import { HtmlSerializer } from 'BenchmarkUtils/ResultSerializers/HtmlSerializer'
import { BenchmarkRunner } from './BenchmarkUtils/BenchmarkRunner'
import { MvpBench } from './Benchmarks/SampleBenchmark'
import { EntityTraversal } from 'Benchmarks/EntityTraversal'
import { SpecialSQLActions } from 'Benchmarks/SpecialSQLActions'
import { EdgeCases } from 'Benchmarks/EdgeCases'

import { KnexPackage } from './Packages/knex'
import { KyselyPackage } from './Packages/kysely'
import { MikroORMPackage } from './Packages/mikro-orm'
import { ObjectionPackage } from './Packages/objection'
import { PgTypedPackage } from './Packages/pgtyped'
import { PrismaPackage } from './Packages/prisma-orm'
import { TypeORMPackage } from './Packages/type-orm'
import { SequelizePackage } from './Packages/sequelize'
import { ZapatosPackage } from './Packages/zapatos'
import { DatabasesPackage } from './Packages/databases-pg'
import { BulkOperations } from 'Benchmarks/BulkOperations'

const br = new BenchmarkRunner(
  [
    // DatabasesPackage,
    // KnexPackage,
    KyselyPackage,
    // MikroORMPackage,
    // ObjectionPackage,
    // PgTypedPackage,
    // PrismaPackage,
    // SequelizePackage,
    // TypeORMPackage,
    // ZapatosPackage,
  ],
  [
    // MvpBench,
    // EntityTraversal,
    // SpecialSQLActions,
    // EdgeCases,
    BulkOperations,
  ],
  [new ConsoleSerializer(), new HtmlSerializer()]
)

br.run().then(
  () => process.exit(0),
  e => {
    console.error(e)
    process.exit(1)
  }
)
