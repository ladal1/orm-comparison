import { TestResult } from 'Benchmark/BenchmarkRunner/BenchmarkSuite'
import { clearLine } from 'Benchmark/utils/clearLine'
import chalk from 'chalk'
import { TestResultSerializer } from './BaseSerializer'

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

const ConsoleSerializer: TestResultSerializer = (
  databaseName,
  testName,
  implementationName,
  testType,
  testResult
) => {
  clearLine(process.stdout)
  console.log(
    `    ${resolveTestResult(testResult.result)} - ${databaseName.padEnd(
      20
    )} - ${testName.padEnd(20)} - ${implementationName.padEnd(20)} - ${
      testResult.time ? testResult.time.toString() + 'ms' : ''
    }`
  )
  if (testResult.error) {
    console.log(chalk.red(`      ${testResult.error.message}`))
    if (testResult.error.stack) {
      console.log(chalk.red(`      ${testResult.error.stack}`))
    }
  }
}

export default ConsoleSerializer
