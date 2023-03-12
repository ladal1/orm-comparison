import rdb from 'rdb'

const Cat = rdb.table('cat')
Cat.primaryColumn('id').numeric()
Cat.column('cat_name').string()
Cat.column('cat_color_id').numeric()
Cat.column('date_of_birth').date()

const CatColor = rdb.table('cat_color')
CatColor.primaryColumn('id').numeric()
CatColor.column('color_name').string()

const ColorHex = rdb.table('color_hex')
ColorHex.primaryColumn('id').numeric()
ColorHex.column('hex_code').string()

const House = rdb.table('house')
House.primaryColumn('id').numeric()
House.column('house_address').string()
House.column('has_dog').boolean()

const HouseCat = rdb.table('house_cat')
HouseCat.primaryColumn('id').numeric()
HouseCat.column('house_id').numeric()
HouseCat.column('cat_id').numeric()

const Toy = rdb.table('toy')
Toy.primaryColumn('id').numeric()
Toy.column('toy_name').string()
Toy.column('toys_producer_id').numeric()
Toy.column('price').numeric()
Toy.column('barcode').string()
Toy.column('price').numeric()
Toy.column('currency').string()
Toy.column('naughty').string()

const ToyHouse = rdb.table('toy_house')
ToyHouse.primaryColumn('toy_id').numeric()
ToyHouse.primaryColumn('house_id').numeric()
ToyHouse.column('amount').numeric()

const ToysProducer = rdb.table('toys_producer')
ToysProducer.primaryColumn('id').numeric()
ToysProducer.column('stock_info').json()
ToysProducer.column('hq_location').json()

const catColorRelation = Cat.join(CatColor).by('cat_color_id').as('cat_color')
CatColor.hasMany(catColorRelation).as('cats')

const colorHexRelation = CatColor.join(ColorHex).by('id').as('color_hex')
ColorHex.hasMany(colorHexRelation).as('cat_colors')

const HouseHouseCatRelation = House.join(HouseCat).by('id').as('house_cat')
HouseCat.hasOne(HouseHouseCatRelation).as('houses')

const CatHouseCatRelation = Cat.join(HouseCat).by('id').as('house_cat')
HouseCat.hasOne(CatHouseCatRelation).as('cats')

const ToyToyProducerRelation = Toy.join(ToysProducer)
  .by('toys_producer_id')
  .as('toys_producer')
ToysProducer.hasMany(ToyToyProducerRelation).as('toys')

const ToyHouseRelation = Toy.join(ToyHouse).by('id').as('toy_house')
ToyHouse.hasOne(ToyHouseRelation).as('toys')

export default rdb({
  tables: {
    Cat,
    CatColor,
    ColorHex,
    House,
    HouseCat,
    Toy,
    ToyHouse,
    ToysProducer,
  },
})
