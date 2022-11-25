import {
  batchInsertType,
  UpdateType,
  DeleteType,
  singleInsertType,
} from 'interfaces/DataManipulation'
import { chunk } from 'lodash'
import { knexInstance } from '..'

export const simpleCreate: singleInsertType = async (data, table) => {
  await knexInstance.queryBuilder().insert(data).into(table)
}

export const batchInsert: batchInsertType = async (data, table) => {
  const chunkedData = chunk(data, 50)
  await Promise.all(
    chunkedData.map(chunk =>
      knexInstance.queryBuilder().insert(chunk).into(table)
    )
  )
}

export const simpleUpdate: UpdateType = async (filter, data, table) => {
  return knexInstance.queryBuilder().from(table).where(filter).update(data)
}

export const simpleDelete: DeleteType = async (filter, table) => {
  return knexInstance.queryBuilder().from(table).where(filter).delete()
}
