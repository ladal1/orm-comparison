import { BulkOperationsBenchmark } from 'Benchmarks/BulkOperations'
import { getClient } from 'Packages/pgtyped'
import {
  bulkDelete,
  bulkInsert,
  bulkUpdate,
  countHouses,
  countToysByCurrency,
  countToysByName,
  pagination,
} from './BulkOperations.queries'

const BulkOperations: BulkOperationsBenchmark = {
  bulkInsert: async data => {
    await bulkInsert.run(
      {
        ids: data.map(({ id }) => id),
        houseAddresses: data.map(({ houseAddress }) => houseAddress),
        hasDogs: data.map(({ hasDog }) => hasDog),
      },
      getClient()
    )
    return countHouses
      .run(undefined, getClient())
      .then(([{ count }]) => Number(count) ?? -1)
  },
  bulkDelete: async toyName => {
    await bulkDelete.run({ toyName }, getClient())
    return countToysByName
      .run({ toyName }, getClient())
      .then(([{ count }]) => Number(count) ?? -1)
  },
  bulkUpdate: async (oldCurrency, newCurrency) => {
    await bulkUpdate.run({ oldCurrency, newCurrency }, getClient())
    return countToysByCurrency
      .run({ currency: newCurrency }, getClient())
      .then(([{ count }]) => Number(count) ?? -1)
  },
  pagination: async pageSize => {
    const pages = []
    while (true) {
      const newPage = await pagination.run(
        {
          limit: ((1 + pages.length) * pageSize).toString(),
          offset: (pages.length * pageSize).toString(),
        },
        getClient()
      )
      if (newPage.length === 0) break
      pages.push(newPage)
    }
    return pages
  },
}

export default BulkOperations
