// import db from './Databases/CatDatabase'
import IORMPackage from 'BenchmarkUtils/interfaces/PackageUtils'

// let dbInstance

const initialize = async (databaseName: string) => {
  throw Error('Not implemented due to missing typings')
  //    db({
  //        db: rdb.postgres(config.database.url),
  //    })
  //   dbInstance = rdb({
  //     db: rdb.postgres(config.database.url),
  //     tables: {
  //       Cat,
  //       CatColor,
  //       ColorHex,
  //       House,
  //       HouseCat,
  //       Toy,
  //       ToyHouse,
  //       ToysProducer,
  //     },
  //   })
  //   dbInstance.$connect()
}

const destroy = async () => {
  throw Error('Not implemented due to missing typings')
}

export const RDBPackage: IORMPackage = {
  name: 'RDB',
  initialize,
  destroy,
  implementations: {},
}
