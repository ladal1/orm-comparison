import {
  BenchmarkSuite,
  TestTemplate,
} from 'BenchmarkUtils/BenchmarkRunner/BenchmarkSuite'
import { CatDatabase } from 'Databases/CatDatabase/CatDatabase'
import assert from 'assert/strict'
import { Client } from 'pg'

export interface SpecialSQLActionsBenchmark extends TestTemplate {
  upsertToysToHouse: (parameters: {
    houseId: number
    toyId: number
    amount: number
  }) => Promise<number>
  JSONColumn: (id: number) => Promise<{ [key: string]: string }>
  JSONWhere: (ticker: string) => Promise<{ [key: string]: string }>
  transactionalOperations: (
    producer: Toy_producer_example,
    toy: toy_example
  ) => Promise<number>
  likeQuery: (query: string) => Promise<number[]>
}

interface Toy_producer_example {
  id: number
  stock_info: {
    ticker: string
  }
  hq_location: {
    street: string
    kancelář: string
  }
}

interface toy_example {
  id: number
  toys_producer_id: number
  toy_name: string
  barcode: string
  price: number
  currency: string
  date_introduced: Date
}

export const SpecialSQLActions = new BenchmarkSuite<SpecialSQLActionsBenchmark>(
  'SpecialSQLActions',
  CatDatabase,
  {
    // Upsert a toy into a house (add to existing number)
    upsertToysToHouse: {
      testName: 'Upsert',
      referenceCheck: async (data: number) => {
        assert.equal(data, 20)
      },
      call:
        (implementation: SpecialSQLActionsBenchmark['upsertToysToHouse']) =>
        () =>
          implementation({ houseId: 2, toyId: 73, amount: 12 }),
      testValidity: true,
      reset: async (pg: Client) => {
        await pg.query(
          'UPDATE toy_house SET amount=8 WHERE house_id=2 AND toy_id=73;'
        )
      },
    },
    // Get ticker, price and CEO of company which is all stored in an JSON with id 3
    JSONColumn: {
      testName: 'JSON Column',
      referenceCheck: async (data: { [key: string]: string }) =>
        assert.deepEqual(data, {
          ticker: 'VAG.NER',
          price: 999.99,
          CEO: 'L. Vagner',
        }),
      call: (implementation: SpecialSQLActionsBenchmark['JSONColumn']) => () =>
        implementation(4),
      testValidity: true,
    },
    // Get json column based on where clause (ticker)
    JSONWhere: {
      testName: 'JSON Where',
      referenceCheck: async (data: { [key: string]: string }) =>
        assert.deepEqual(data, {
          ticker: 'VAG.NER',
          price: 999.99,
          CEO: 'L. Vagner',
        }),
      call: (implementation: SpecialSQLActionsBenchmark['JSONWhere']) => () =>
        implementation('VAG.NER'),
      testValidity: true,
    },
    // Create toy producer, then create toy made by that company - in one transaction, then rollback and return count of toy producers
    transactionalOperations: {
      testName: 'Transactional Operations',
      referenceCheck: async (data: number) => {
        assert.equal(data, 21)
      },
      call:
        (
          implementation: SpecialSQLActionsBenchmark['transactionalOperations']
        ) =>
        () =>
          implementation(
            {
              id: 100,
              stock_info: { ticker: 'MAT.OUSEK' },
              hq_location: { street: 'Thákurova', kancelář: 'TH-A: 11' },
            },
            {
              id: 100,
              toys_producer_id: 100,
              toy_name: 'Máčka',
              barcode: '123456789',
              price: 199.99,
              currency: 'CZK',
              date_introduced: new Date(),
            }
          ),
      testValidity: true,
    },
    // All ids of houses whose address includes Union
    likeQuery: {
      testName: 'LIKE Query',
      referenceCheck: async (data: number[]) => {
        assert.deepEqual(data, [8, 450, 873])
      },
      call: (implementation: SpecialSQLActionsBenchmark['likeQuery']) => () =>
        implementation('Union'),
      testValidity: true,
    },
  }
)
