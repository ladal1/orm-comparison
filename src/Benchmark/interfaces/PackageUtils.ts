// Initialize the benchmark, setup connection to the database
export type InitializeBenchmark = () => Promise<void>

// Clean workplace, close connection to the database
export type DestroyBenchmark = () => Promise<void>
