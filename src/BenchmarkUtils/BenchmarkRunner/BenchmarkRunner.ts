import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'
import { Client } from 'pg'
import { BenchmarkSuite } from './BenchmarkSuite'
import { BaseSerializer } from 'BenchmarkUtils/ResultSerializers/BaseSerializer'
import Database from 'BenchmarkUtils/interfaces/DatabaseUtils'

interface DatabaseSuites {
  database: Database
  suites: Array<BenchmarkSuite<any>>
}

export class BenchmarkRunner {
  benchmarkSuites: Partial<Record<Database['name'], DatabaseSuites>> = {}
  private readonly utilConnection: Client

  constructor(
    private readonly testedPackages: IORMPackage[] = [],
    benchmarkSuites: Array<BenchmarkSuite<any>> = [],
    private readonly reporters: BaseSerializer[] = []
  ) {
    this.utilConnection = new Client({
      user: 'benchmark',
      host: 'localhost',
      password: 'benchmark_pwd',
      application_name: 'BenchmarkRunner',
    })
    for (const benchmark of benchmarkSuites) {
      this.registerSuit(benchmark)
    }
  }

  private registerSuit(benchmark: BenchmarkSuite<any>) {
    if (!(benchmark.database.name in this.benchmarkSuites)) {
      this.benchmarkSuites[benchmark.database.name] = {
        database: benchmark.database,
        suites: [],
      }
    }
    this.benchmarkSuites[benchmark.database.name]?.suites.push(benchmark)
  }

  public async prepareDatabase(database: Database, client: Client) {
    await database.setupDatabase(client)
    await database.seedDatabase(client)
  }

  public async teardownDatabase(database: Database, client: Client) {
    await database.destroyDatabase(client)
  }

  async run(reporters?: BaseSerializer[]) {
    await this.utilConnection.connect()
    const mergedReporters = [...this.reporters, ...(reporters ?? [])]
    await Promise.all(
      mergedReporters.map(reporter => reporter.openSerializer())
    )
    for (const [, { database, suites }] of Object.entries(
      this.benchmarkSuites
    )) {
      await this.prepareDatabase(database, this.utilConnection)
      for (const testedPackage of this.testedPackages) {
        await testedPackage.initialize(database.name)
        for (const suite of suites) {
          await suite.runSuite(
            testedPackage.implementations[suite.getName()],
            testedPackage.name,
            mergedReporters,
            this.utilConnection
          )
        }
        await testedPackage.destroy(database.name)
      }
      await this.teardownDatabase(database, this.utilConnection)
    }
    await Promise.all(
      mergedReporters.map(reporter => reporter.closeSerializer())
    )
    await this.utilConnection.end()
  }
}
