import { TestValidationResult } from 'BenchmarkUtils/BenchmarkRunner/BenchmarkSuite'
import { BaseSerializer } from './BaseSerializer'
import Handlebars from 'handlebars'
import { redirectedFileRead } from 'utils'
import path from 'node:path'
import { writeFile } from 'node:fs/promises'
import { existsSync, mkdirSync } from 'node:fs'

export class HtmlSerializer extends BaseSerializer {
  private template: HandlebarsTemplateDelegate<any> | null = null
  private readonly dataMap = new Map<
    string,
    Record<string, Record<string, TestValidationResult>>
  >()

  constructor(
    private readonly outputPath: string = path.join('out', 'results.html')
  ) {
    super()
  }

  private readonly suiteMap = new Map<string, string>()

  public override async openSerializer(): Promise<void> {
    const readTemplate = redirectedFileRead(
      'src/BenchmarkUtils/ResultSerializers/HtmlSerializer/TemplatedReport.hbs'
    )
    this.template = Handlebars.compile(readTemplate)
  }

  public override serializeTest(
    databaseName: string,
    suiteName: string,
    testName: string,
    packageName: string,
    testType: Exclude<TestValidationResult['testType'], undefined>,
    testResult: TestValidationResult
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ): void {
    const data = this.dataMap.get(suiteName)
    if (data) {
      if (data[packageName]) {
        data[packageName][testName] = testResult
      } else {
        data[packageName] = { [testName]: testResult }
      }
    }
  }

  public override serializeSuite(
    databaseName: string,
    suiteName: string,
    packageName: string
  ): void {
    this.suiteMap.set(suiteName, databaseName)
    this.dataMap.set(suiteName, { [packageName]: {} })
  }

  public override async closeSerializer(): Promise<void> {
    if (this.template) {
      const dirname = path.dirname(this.outputPath)
      if (!existsSync(dirname)) {
        mkdirSync(dirname, { recursive: true })
      }
      await writeFile(
        this.outputPath,
        this.template({
          data: JSON.stringify(Object.fromEntries(this.dataMap)),
        })
      )
    }
    this.dataMap.clear()
  }
}
