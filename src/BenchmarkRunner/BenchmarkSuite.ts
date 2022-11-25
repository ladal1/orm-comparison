export class BenchmarkSuite {
  tests: Array<{ name: string; ctx: () => Promise<boolean> }> = []
  constructor(private readonly name: string) {}

  public getName(): string {
    return this.name
  }

  public add(testName: string, ctx: () => Promise<boolean>) {
    this.tests.push({ name: testName, ctx })
  }

  public async run() {
    for (const test of this.tests) {
      console.log(`Running test ${test.name}`)
      await test.ctx()
    }
  }
}
