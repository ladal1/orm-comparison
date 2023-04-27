import {
  BenchmarkSuite,
  TestTemplate,
} from 'BenchmarkUtils/BenchmarkRunner/BenchmarkSuite'
import { CatDatabase } from 'Databases/CatDatabase/CatDatabase'
import assert from 'node:assert/strict'

export interface BulkOperationsBenchmark extends TestTemplate {
  bulkInsert: (
    houses: Array<{ id: number; houseAddress: string; hasDog: boolean }>
  ) => Promise<number>
  bulkDelete: (toyName: string) => Promise<number>
  bulkUpdate: (
    originalCurrency: string,
    resultingCurrency: string
  ) => Promise<number>
  pagination: (pageSize: number) => Promise<Array<Record<any, any>>>
}

export const BulkOperations = new BenchmarkSuite<BulkOperationsBenchmark>(
  'BulkOperations',
  CatDatabase,
  {
    bulkInsert: {
      testName: 'Bulk Insert',
      referenceCheck: async (data: number) => {
        assert.equal(data, 31000)
      },
      call: (implementation: BulkOperationsBenchmark['bulkInsert']) => () =>
        implementation(
          Array.from({ length: 30000 }, (_, i) => ({
            id: 10000 + i,
            houseAddress: `House ${i}`,
            hasDog: i % 2 === 0,
          }))
        ),
      reset: async pg => {
        await pg.query('delete from house where id >= 10000')
      },
      testLatency: true,
      latencyIterations: 10,
      testValidity: false,
    },
    bulkDelete: {
      testName: 'Bulk Delete',
      call: (implementation: BulkOperationsBenchmark['bulkDelete']) => () =>
        implementation('Catnip'),
      referenceCheck: async (data: number) => {
        assert.equal(data, 0)
      },
      reset: async pg => {
        await pg.query(`insert into toy (id, toys_producer_id, toy_name, barcode, price, currency) values (300, 1, 'Catnip', '667322379012', 5.99, 'USD') ON CONFLICT DO NOTHING;
                insert into toy (id, barcode, price, currency, toy_name, toys_producer_id, naughty) values (301, '100003200000', 100.0, 'USD', 'Catnip', 2, '1/0') ON CONFLICT DO NOTHING;
                insert into toy (id, barcode, price, currency, toy_name, toys_producer_id, naughty) values (302, '100420000001', 100.0, 'USD', 'Catnip', 5, '1/0') ON CONFLICT DO NOTHING;`)
      },
      testValidity: true,
      testLatency: true,
      latencyIterations: 10,
    },
    bulkUpdate: {
      testName: 'Bulk Update',
      referenceCheck: async (data: number) => {
        assert.equal(data, 3)
      },
      call: (implementation: BulkOperationsBenchmark['bulkUpdate']) => () =>
        implementation('GBP', 'FIT'),
      reset: async pg => {
        await pg.query(
          "update toy set currency = 'GBP' where currency = 'FIT';"
        )
      },
      testValidity: true,
      testLatency: true,
      latencyIterations: 10,
    },
    pagination: {
      testName: 'Pagination',
      call: (implementation: BulkOperationsBenchmark['pagination']) => () =>
        implementation(500),
      referenceCheck: async (data: Array<Record<any, any>>) => {
        assert.equal(data.length, 7)
      },
      testValidity: true,
      testLatency: true,
      latencyIterations: 10,
    },
  }
)
