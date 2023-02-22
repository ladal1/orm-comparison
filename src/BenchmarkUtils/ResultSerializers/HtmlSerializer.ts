import { TestValidationResult } from 'BenchmarkUtils/BenchmarkRunner/BenchmarkSuite'
import { BaseSerializer } from './BaseSerializer'
import Handlebars from 'handlebars'
import { redirectedFileRead } from 'utils'
import path from 'node:path'
import { writeFile } from 'node:fs/promises'
import { existsSync, mkdirSync } from 'node:fs'
import sass from 'sass'

export class HtmlSerializer extends BaseSerializer {
  private template: HandlebarsTemplateDelegate<any> | null = null

  private data: {
    [databaseName: string]: {
      [suiteName: string]: {
        [testName: string]: {
          [testType: string]: {
            [packageName: string]: TestValidationResult
          }
        }
      }
    }
  } = {}

  constructor(
    private readonly outputPath: string = path.join('out', 'results.html')
  ) {
    super()
  }

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
    const data = this.data[databaseName][suiteName]
    if (data) {
      if (!data[testName]) {
        data[testName] = {}
      }
      if (!data[testName][testType]) {
        data[testName][testType] = {}
      }
      data[testName][testType][packageName] = testResult
    }
  }

  public override serializeSuite(
    databaseName: string,
    suiteName: string,
    packageName: string
  ): void {
    if (!this.data[databaseName]) {
      this.data[databaseName] = {}
    }
    if (!this.data[databaseName][suiteName]) {
      this.data[databaseName][suiteName] = {}
    }
  }

  public override async closeSerializer(): Promise<void> {
    if (this.template) {
      const styleFile = sass.compileString(
        redirectedFileRead(
          'src/BenchmarkUtils/ResultSerializers/HtmlSerializer/style.scss'
        ),
        { style: 'compressed' }
      )
      const dirname = path.dirname(this.outputPath)
      if (!existsSync(dirname)) {
        mkdirSync(dirname, { recursive: true })
      }
      await writeFile(
        this.outputPath,
        this.template({
          data: JSON.stringify(this.data),
          css: styleFile.css,
        })
      )
    }
    this.data = {}
  }
}
