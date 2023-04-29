import { SpecialSQLActionsBenchmark } from 'Benchmarks/SpecialSQLActions'
import { clients } from '..'

const SpecialSQLActions: SpecialSQLActionsBenchmark = {
  upsertToysToHouse: async ({ houseId, toyId, amount }) => {
    return clients.CatDatabase.toy_house
      .upsert({
        where: {
          toy_id_house_id: {
            house_id: houseId,
            toy_id: toyId,
          },
        },
        create: {
          house_id: houseId,
          toy_id: toyId,
          amount,
        },
        update: {
          amount: {
            increment: amount,
          },
        },
      })
      .then(data => data.amount)
  },
  JSONColumn: async (id: number) => {
    return clients.CatDatabase.toys_producer
      .findFirst({
        where: {
          id,
        },
      })
      .then(data => (data?.stock_info as { [key: string]: string }) ?? {})
  },
  JSONWhere: async (ticker: string) => {
    return clients.CatDatabase.toys_producer
      .findFirst({
        where: {
          stock_info: {
            path: ['ticker'],
            equals: ticker,
          },
        },
      })
      .then(data => (data?.stock_info as { [key: string]: string }) ?? {})
  },
  transactionalOperations: async (producer, toy) => {
    await clients.CatDatabase.$transaction(async trx => {
      await trx.toys_producer.create({
        data: producer,
      })
      await trx.toy.create({
        data: toy,
      })
      await trx.$executeRaw`ROLLBACK`
    })
    return clients.CatDatabase.toys_producer.count()
  },
  likeQuery: async (query: string) => {
    return clients.CatDatabase.house
      .findMany({
        where: {
          house_address: {
            contains: query,
          },
        },
      })
      .then(data => data.map(d => d.id))
  },
  ilikeQuery: async (query: string) => {
    return clients.CatDatabase.house
      .findMany({
        where: {
          house_address: {
            contains: query,
            mode: 'insensitive',
          },
        },
      })
      .then(data => data.map(d => d.id))
  },
}

export default SpecialSQLActions
