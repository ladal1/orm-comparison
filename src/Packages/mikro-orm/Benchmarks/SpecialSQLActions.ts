import { SpecialSQLActionsBenchmark } from 'Benchmarks/SpecialSQLActions'
import { getEntityManager } from '..'
import { ToyHouse } from '../Databases/CatDatabase/ToyHouse'
import { Cat } from '../Databases/CatDatabase/Cat'
import { ToysProducer } from '../Databases/CatDatabase/ToysProducer'
import { Toy } from '../Databases/CatDatabase/Toy'
import { House } from '../Databases/CatDatabase/House'
import { NotSupported } from 'BenchmarkUtils/BenchmarkRunner'

const SpecialSQLActions: SpecialSQLActionsBenchmark = {
  upsertToysToHouse: async ({ houseId, toyId, amount }) => {
    const qb = getEntityManager('SpecialSQLActions').qb(ToyHouse)
    return qb
      .insert({ house: houseId, toy: toyId, amount })
      .onConflict(['house_id', 'toy_id'])
      .merge({
        amount: qb.raw('toy_house.amount + ?', [amount]),
      })
      .getKnexQuery()
      .returning('amount')
      .then(data => data[0].amount)
  },
  bigIntColumn: async name => {
    return getEntityManager('SpecialSQLActions')
      .findOneOrFail(Cat, { catName: name })
      .then(data => BigInt(data.id))
  },
  JSONColumn: async id => {
    return getEntityManager('SpecialSQLActions')
      .findOneOrFail(ToysProducer, { id })
      .then(data => data.stockInfo)
  },
  JSONWhere: async ticker => {
    // return getEntityManager('SpecialSQLActions')
    //   .findOneOrFail(ToysProducer, {
    //     stockInfo: { ticker }
    //   })
    //   .then(data => data?.stockInfo ?? {})
    throw new NotSupported()
  },
  transactionalOperations: async (producer, toy) => {
    await getEntityManager('SpecialSQLActions').transactional(async em => {
      await em.insert(ToysProducer, producer)
      await em.insert(Toy, { ...toy, price: toy.price.toString() })
      await em.rollback()
    })
    return getEntityManager('SpecialSQLActions').count(ToysProducer)
  },
  likeQuery: async query => {
    return getEntityManager('SpecialSQLActions')
      .find(House, { houseAddress: new RegExp('.*' + query + '.*') })
      .then(data => data.map(d => d.id))
  },
}

export default SpecialSQLActions
