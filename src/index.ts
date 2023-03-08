/* eslint-disable @typescript-eslint/no-unused-vars */
import ConsoleSerializer from 'BenchmarkUtils/ResultSerializers/ConsoleSerializer'
import { HtmlSerializer } from 'BenchmarkUtils/ResultSerializers/HtmlSerializer'
import { BenchmarkRunner } from './BenchmarkUtils/BenchmarkRunner'
import { MvpBench } from './Benchmarks/SampleBenchmark'
import { EntityTraversal } from 'Benchmarks/EntityTraversal'
import { KnexPackage } from './Packages/knex'
import { MikroORMPackage } from './Packages/mikroORM'
import { ObjectionPackage } from './Packages/objection'
import { PgTypedPackage } from './Packages/pgtyped'
import { PrismaPackage } from './Packages/prismaORM'
import { TypeORMPackage } from './Packages/typeORM'
import { SequelizePackage } from './Packages/sequelize'

const br = new BenchmarkRunner(
  [
    KnexPackage,
    // MikroORMPackage,
    // ObjectionPackage,
    // PgTypedPackage,
    // PrismaPackage,
    SequelizePackage,
    // TypeORMPackage
  ],
  [EntityTraversal],
  [new ConsoleSerializer(), new HtmlSerializer()]
)

br.run().then(
  () => process.exit(0),
  e => {
    console.error(e)
    process.exit(1)
  }
)
