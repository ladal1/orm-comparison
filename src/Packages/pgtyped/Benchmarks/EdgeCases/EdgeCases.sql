/* @name SQLInjection */
SELECT COUNT(*) FROM cat WHERE cat_name like :query;

/* @name bigIntColumn */
SELECT id
FROM cat
WHERE cat_name = :name;
