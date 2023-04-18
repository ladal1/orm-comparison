import { SpecialSQLActionsBenchmark } from 'Benchmarks/SpecialSQLActions'
import { BenchDataSource } from '..'
import { ToysProducer } from '../Databases/CatDatabase/ToysProducer'
import { JsonContains, Like } from 'typeorm'
import { Toy } from '../Databases/CatDatabase/Toy'
import { House } from '../Databases/CatDatabase/House'

const SpecialSQLActions: SpecialSQLActionsBenchmark = {
  upsertToysToHouse: async ({ houseId, toyId, amount }) => {
    return BenchDataSource.query(
      'INSERT INTO toy_house (house_id, toy_id, amount) VALUES ($1, $2, $3) ON CONFLICT (house_id, toy_id) DO UPDATE SET amount = toy_house.amount + $4 RETURNING amount;',
      [houseId, toyId, amount, amount]
    ).then(data => Number(data[0].amount))
    // BenchDataSource.getRepository(ToyHouse)
    // .createQueryBuilder()
    // .insert()
    // .into(ToyHouse)
    // .values({ houseId, toyId, amount })
    // .orUpdate(['amount'], ['house_id', 'toy_id'])
    // .returning('*')
    // .execute()
    // .then(data => data.generatedMaps[0].amount),
  },
  JSONColumn: async (id: number) => {
    return BenchDataSource.getRepository(ToysProducer)
      .findOne({
        where: { id },
      })
      .then(producer => producer?.stockInfo ?? {})
  },
  JSONWhere: async (ticker: string) => {
    return BenchDataSource.getRepository(ToysProducer)
      .findOne({
        where: {
          stockInfo: JsonContains({ ticker }),
        },
      })
      .then(producer => producer?.stockInfo ?? {})
  },
  transactionalOperations: async (producer, toy) => {
    const queryRunner = BenchDataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()
    await Promise.all([
      queryRunner.manager.getRepository(ToysProducer).save({
        id: producer.id,
        stockInfo: producer.stock_info,
        hqLocation: producer.hq_location,
      }),
      queryRunner.manager.getRepository(Toy).save({
        id: toy.id,
        toysProducerId: toy.toys_producer_id,
        toyName: toy.toy_name,
        barcode: toy.barcode,
        price: toy.price,
        currency: toy.currency,
        dateIntroduced: toy.date_introduced,
      }),
    ])
    await queryRunner.rollbackTransaction()
    await queryRunner.release()
    return BenchDataSource.getRepository(ToysProducer).count()
  },
  likeQuery: async (query: string) => {
    return BenchDataSource.getRepository(House)
      .find({
        where: {
          houseAddress: Like(`%${query}%`),
        },
      })
      .then(houses => houses.map(house => house.id))
  },
}

export default SpecialSQLActions
