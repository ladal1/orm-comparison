import { Generated } from 'kysely'

interface CatTable {
  id: Generated<string>
  cat_name: string
  cat_color_id: number
  date_of_birth: Date
}

interface CatColorTable {
  id: Generated<number>
  color_name: string
}

interface ColorHexTable {
  id: number
  hex_code: string
}

interface HouseTable {
  id: Generated<number>
  house_address: string
  has_dog: boolean
}

interface HouseCatTable {
  house_id: number
  cat_id: number
}

interface ToyTable {
  id: Generated<number>
  toy_name: string
  toys_producer_id: number
  barcode: string
  price: number
  currency: string
  naughty: string | null
}

interface ToyHouseTable {
  toy_id: number
  house_id: number
  amount: number
}

interface ToysProducerTable {
  id: Generated<number>
  stock_info: Record<string, any>
  hq_location: Record<string, any>
}

interface CatDatabase {
  cat: CatTable
  cat_color: CatColorTable
  color_hex: ColorHexTable
  house: HouseTable
  house_cat: HouseCatTable
  toy: ToyTable
  toy_house: ToyHouseTable
  toys_producer: ToysProducerTable
}

export default CatDatabase
