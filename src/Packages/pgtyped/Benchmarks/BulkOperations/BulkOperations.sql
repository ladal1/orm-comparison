/* @name bulkInsert */
Insert into house (id, house_address, has_dog)
SELECT * FROM
      UNNEST(
        :ids::integer[],
        :houseAddresses::TEXT[],
        :hasDogs::BOOLEAN[]
      );

/* @name countHouses */
SELECT COUNT(*) FROM house;

/* @name bulkDelete */
DELETE FROM toy WHERE toy_name = :toyName;

/* @name bulkUpdate */
UPDATE toy SET currency = :newCurrency WHERE currency = :oldCurrency;

/* @name countToysByName */
SELECT COUNT(*) FROM toy WHERE toy_name = :toyName;

/* @name countToysByCurrency */
SELECT COUNT(*) FROM toy WHERE currency = :currency;

/* @name pagination */
SELECT * FROM cat LIMIT :limit OFFSET :offset;
