export default {
  database: {
    name: process.env.DATABASE_NAME ?? 'benchmark',
    username: process.env.DATABASE_USER ?? 'benchmark',
    password: process.env.DATABASE_PASSWORD ?? 'benchmark_pwd',
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: Number(process.env.DATABASE_PORT ?? 5432),
    url:
      process.env.DATABASE_URL ??
      'postgres://benchmark:benchmark_pwd@localhost:5432/benchmark',
  },
}
