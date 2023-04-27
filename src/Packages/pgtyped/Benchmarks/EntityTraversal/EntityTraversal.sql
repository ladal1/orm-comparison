/* @name getCatColorById */
SELECT
  hex_code
FROM
    cat
    JOIN cat_color ON cat_color.id = cat.cat_color_id
    JOIN color_hex ON color_hex.id = cat_color.id
WHERE
    cat.id = :catId;

/* @name countCatsByColor */
SELECT
  COUNT(*)
FROM
    cat
    JOIN cat_color ON cat_color.id = cat.cat_color_id
    JOIN color_hex ON color_hex.id = cat_color.id
WHERE
    color_hex.hex_code = :hexCode;

/* @name getToysAvailableToCat */
SELECT
  toy.toy_name
FROM
  toy
  JOIN toy_house ON toy_house.toy_id = toy.id
  JOIN house_cat ON house_cat.house_id = toy_house.house_id
WHERE
  house_cat.cat_id = :catId;
