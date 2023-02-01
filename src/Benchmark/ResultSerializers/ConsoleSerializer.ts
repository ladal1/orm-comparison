import {
  TestResult,
  TestValidationResult,
} from 'Benchmark/BenchmarkRunner/BenchmarkSuite'
import { clearLine } from 'Benchmark/utils/clearLine'
import chalk from 'chalk'
import { BaseSerializer } from './BaseSerializer'

const resolveTestResult = (result: TestResult): string => {
  switch (result) {
    case TestResult.PASS:
      return '✅'
    case TestResult.FAIL:
      return '❌'
    case TestResult.ERROR:
      return '❗'
    case TestResult.SKIPPED:
      return '⏭️'
  }
}

class ConsoleSerializer extends BaseSerializer {
  columnWidth = [10, 20, 20, 10, 15]

  public override serializeTest(
    databaseName: string,
    testName: string,
    implementationName: string,
    testType: 'Latency' | 'Throughput',
    testResult: TestValidationResult
  ): void {
    clearLine(process.stdout)
    const data = [
      resolveTestResult(testResult.result),
      testName,
      implementationName,
      testType,
      testResult.time ? testResult.time.toPrecision(5).toString() + 'ms' : '',
    ].map((value, index) => value.padEnd(this.columnWidth[index]))
    console.log(
      `   | ${data[0]} | ${data[1]} | ${data[2]} | ${data[3]} | ${data[4]} |`
    )
    if (testResult.error) {
      console.log(chalk.red(`      ${testResult.error.message}`))
      if (testResult.error.stack) {
        console.log(chalk.red(`      ${testResult.error.stack}`))
      }
    }
  }

  private tableBorder(): void {
    console.log(
      `   +${'-'.repeat(this.columnWidth[0] + 3)}+${'-'.repeat(
        this.columnWidth[1] + 2
      )}+${'-'.repeat(this.columnWidth[2] + 2)}+${'-'.repeat(
        this.columnWidth[3] + 2
      )}+${'-'.repeat(this.columnWidth[4] + 2)}+`
    )
  }

  private tableHeader(): void {
    console.log(
      `   | ${'Result'.padEnd(this.columnWidth[0])}  | ${'Test'.padEnd(
        this.columnWidth[1]
      )} | ${'Implementation'.padEnd(this.columnWidth[2])} | ${'Type'.padEnd(
        this.columnWidth[3]
      )} | ${'Time'.padEnd(this.columnWidth[4])} |`
    )
  }

  public separateTestType(): void {
    this.tableBorder()
    console.log('\n')
    this.tableBorder()
    this.tableHeader()
    this.tableBorder()
  }

  public serializeSuite(suiteName: string, databaseName: string): void {
    console.log(`  ${databaseName} - ${suiteName}`)
    this.tableBorder()
    this.tableHeader()
    this.tableBorder()
  }

  public closeSuite(): void {
    this.tableBorder()
    console.log('\n')
  }
}

export default ConsoleSerializer
