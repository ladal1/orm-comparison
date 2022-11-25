-- Remove conflicting tables
DROP TABLE IF EXISTS cat_colors CASCADE;
DROP TABLE IF EXISTS cats CASCADE;
DROP TABLE IF EXISTS house CASCADE;
DROP TABLE IF EXISTS toys CASCADE;
DROP TABLE IF EXISTS toys_producer CASCADE;
DROP TABLE IF EXISTS house_cats CASCADE;
DROP TABLE IF EXISTS toys_house CASCADE;
-- End of removing

CREATE TABLE cat_colors (
    id SERIAL NOT NULL,
    cats_id INTEGER NOT NULL,
    color_name VARCHAR(256) NOT NULL
);
ALTER TABLE cat_colors ADD CONSTRAINT pk_cat_colors PRIMARY KEY (id);
ALTER TABLE cat_colors ADD CONSTRAINT u_fk_cat_colors_cats UNIQUE (cats_id);

CREATE TABLE cats (
    id SERIAL NOT NULL,
    cat_name VARCHAR(256) NOT NULL,
    date_of_birth DATE NOT NULL
);
ALTER TABLE cats ADD CONSTRAINT pk_cats PRIMARY KEY (id);

CREATE TABLE house (
    id SERIAL NOT NULL,
    house_address VARCHAR(256) NOT NULL,
    attribute VARCHAR(256) NOT NULL
);
ALTER TABLE house ADD CONSTRAINT pk_house PRIMARY KEY (id);

CREATE TABLE toys (
    id SERIAL NOT NULL,
    toys_producer_id INTEGER NOT NULL,
    toy_name VARCHAR(256) NOT NULL,
    barcode VARCHAR(256) NOT NULL,
    price NUMERIC NOT NULL,
    currency VARCHAR NOT NULL CHECK (LENGTH(currency) < 6)
);
ALTER TABLE toys ADD CONSTRAINT pk_toys PRIMARY KEY (id, toys_producer_id);
ALTER TABLE toys ADD CONSTRAINT uc_toys_barcode UNIQUE (barcode);

CREATE TABLE toys_producer (
    id SERIAL NOT NULL,
    company_name VARCHAR NOT NULL
    stock_info JSONB NOT NULL,
    hq_location JSON NOT NULL
);
ALTER TABLE toys_producer ADD CONSTRAINT pk_toys_producer PRIMARY KEY (id);

CREATE TABLE house_cats (
    house_id INTEGER NOT NULL,
    cats_id INTEGER NOT NULL
);
ALTER TABLE house_cats ADD CONSTRAINT pk_house_cats PRIMARY KEY (house_id, cats_id);

CREATE TABLE toys_house (
    toys_id INTEGER NOT NULL,
    toys_producer_id INTEGER NOT NULL,
    house_id INTEGER NOT NULL
);
ALTER TABLE toys_house ADD CONSTRAINT pk_toys_house PRIMARY KEY (toys_id, toys_producer_id, house_id);

ALTER TABLE cat_colors ADD CONSTRAINT fk_cat_colors_cats FOREIGN KEY (cats_id) REFERENCES cats (id) ON DELETE CASCADE;

ALTER TABLE toys ADD CONSTRAINT fk_toys_toys_producer FOREIGN KEY (toys_producer_id) REFERENCES toys_producer (id) ON DELETE CASCADE;

ALTER TABLE house_cats ADD CONSTRAINT fk_house_cats_house FOREIGN KEY (house_id) REFERENCES house (id) ON DELETE CASCADE;
ALTER TABLE house_cats ADD CONSTRAINT fk_house_cats_cats FOREIGN KEY (cats_id) REFERENCES cats (id) ON DELETE CASCADE;

ALTER TABLE toys_house ADD CONSTRAINT fk_toys_house_toys FOREIGN KEY (toys_id, toys_producer_id) REFERENCES toys (id, toys_producer_id) ON DELETE CASCADE;
ALTER TABLE toys_house ADD CONSTRAINT fk_toys_house_house FOREIGN KEY (house_id) REFERENCES house (id) ON DELETE CASCADE;
