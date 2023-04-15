/* @name upsertToysToHouse */
INSERT INTO toy_house (toy_id, house_id, amount)
VALUES (:toyId, :houseId, :amount) ON CONFLICT (toy_id, house_id) DO
UPDATE SET amount = :amount + toy_house.amount RETURNING amount;

/* @name JSONColumn */
SELECT stock_info
FROM toys_producer
WHERE id = :id;

/* @name JSONWhere */
SELECT stock_info
FROM toys_producer
WHERE stock_info->>'ticker' = :ticker;

/* @name LikeQuery */
SELECT id
  FROM house
WHERE house_address LIKE :query;

/* @name TransactionalOperationsInsertProducer */
INSERT INTO toys_producer (id, stock_info, hq_location)
VALUES (:id, :stock_info, :hq_location);

/* @name TransactionalOperationsInsertToy */
INSERT INTO toy (
    id,
    toys_producer_id,
    toy_name,
    barcode,
    price,
    currency,
    date_introduced
  )
VALUES (
    :id,
    :toys_producer_id,
    :toy_name,
    :barcode,
    :price,
    :currency,
    :date_introduced
  );

/* @name TransactionalOperationsCountProducers */
SELECT count(id) FROM toys_producer;
