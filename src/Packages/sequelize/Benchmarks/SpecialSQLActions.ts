import { SpecialSQLActionsBenchmark } from 'Benchmarks/SpecialSQLActions'
import { ToysProducer } from '../Databases/CatDatabase/ToysProducer'
import { Op, QueryTypes, literal, where } from 'sequelize'
import { House } from '../Databases/CatDatabase/House'
import { getSequelize } from '..'
import { Toy } from '../Databases/CatDatabase/Toy'

const SpecialSQLActions: SpecialSQLActionsBenchmark = {
  upsertToysToHouse: async ({ houseId, toyId, amount }) => {
    return getSequelize()
      .query<{ amount: string }>(
        'INSERT INTO toy_house (house_id, toy_id, amount) VALUES (:houseId, :toyId, :amount) ON CONFLICT (house_id, toy_id) DO UPDATE SET amount = toy_house.amount + :amount RETURNING amount;',
        {
          type: QueryTypes.SELECT,
          replacements: {
            houseId,
            toyId,
            amount,
          },
        }
      )
      .then(data => Number(data[0].amount))
  },
  JSONColumn: async (id: number) => {
    return ToysProducer.findOne({
      where: {
        id,
      },
    }).then(data => (data?.stockInfo as { [key: string]: string }) ?? {})
  },
  JSONWhere: async (ticker: string) => {
    return ToysProducer.findOne({
      where: where(literal("stock_info->>'ticker'"), ticker),
    }).then(data => (data?.stockInfo as { [key: string]: string }) ?? {})
  },
  transactionalOperations: async (producer, toy) => {
    const t = await getSequelize().transaction()

    await ToysProducer.create(
      {
        id: producer.id.toString(),
        stockInfo: JSON.stringify(producer.stock_info),
        hqLocation: JSON.stringify(producer.hq_location),
      },
      { transaction: t }
    )
    await Toy.create(
      {
        id: toy.id.toString(),
        toysProducerId: toy.toys_producer_id,
        toyName: toy.toy_name,
        barcode: toy.barcode,
        price: toy.price,
        currency: toy.currency,
        dateIntroduced: toy.date_introduced,
      },
      { transaction: t }
    )
    await t.rollback()

    return ToysProducer.count()
  },
  likeQuery: async (name: string) => {
    return House.findAll({
      where: {
        house_address: {
          [Op.like]: '%' + name + '%',
        },
      },
    }).then(data => data.map(d => d.id))
  },
}

export default SpecialSQLActions
