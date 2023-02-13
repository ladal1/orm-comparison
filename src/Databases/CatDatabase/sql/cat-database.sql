-- Remove conflicting tables
DROP TABLE IF EXISTS cat_colors CASCADE;
DROP TABLE IF EXISTS cats CASCADE;
DROP TABLE IF EXISTS color_hex CASCADE;
DROP TABLE IF EXISTS house CASCADE;
DROP TABLE IF EXISTS toys CASCADE;
DROP TABLE IF EXISTS toys_producer CASCADE;
DROP TABLE IF EXISTS house_cats CASCADE;
DROP TABLE IF EXISTS toys_house CASCADE;
-- End of removing

CREATE TABLE cat_colors (
    id SERIAL NOT NULL,
    color_name VARCHAR(256) NOT NULL
);
ALTER TABLE cat_colors ADD CONSTRAINT pk_cat_colors PRIMARY KEY (id);

CREATE TABLE cats (
    id SERIAL NOT NULL,
    cat_color_id INTEGER,
    cat_name VARCHAR(256),
    date_of_birth DATE
);
ALTER TABLE cats ADD CONSTRAINT pk_cats PRIMARY KEY (id);

CREATE TABLE color_hex (
    id INTEGER NOT NULL,
    hex_code VARCHAR(256) NOT NULL
);
ALTER TABLE color_hex ADD CONSTRAINT pk_color_hex PRIMARY KEY (id);

CREATE TABLE house (
    id SERIAL NOT NULL,
    house_address VARCHAR(256),
    has_dog BOOLEAN NULL
);
ALTER TABLE house ADD CONSTRAINT pk_house PRIMARY KEY (id);

CREATE TABLE toys (
    id SERIAL NOT NULL,
    toys_producer_id INTEGER NULL,
    toy_name VARCHAR(256) NOT NULL,
    barcode VARCHAR(256) NOT NULL,
    price NUMERIC NOT NULL,
    currency VARCHAR NOT NULL CHECK (LENGTH(currency) < 6),
    naughty VARCHAR(256) NULL
);
ALTER TABLE toys ADD CONSTRAINT pk_toys PRIMARY KEY (id);
ALTER TABLE toys ADD CONSTRAINT uc_toys_barcode UNIQUE (barcode);

CREATE TABLE toys_producer (
    id SERIAL NOT NULL,
    stock_info JSONB NOT NULL,
    hq_location JSON NOT NULL
);
ALTER TABLE toys_producer ADD CONSTRAINT pk_toys_producer PRIMARY KEY (id);

CREATE TABLE house_cats (
    house_id INTEGER NOT NULL,
    cat_id INTEGER NOT NULL
);
ALTER TABLE house_cats ADD CONSTRAINT pk_house_cats PRIMARY KEY (house_id, cat_id);

CREATE TABLE toys_house (
    toy_id INTEGER NOT NULL,
    house_id INTEGER NOT NULL,
    amount INTEGER NOT NULL DEFAULT 1
);
ALTER TABLE toys_house ADD CONSTRAINT pk_toys_house PRIMARY KEY (toy_id, house_id);

ALTER TABLE cats ADD CONSTRAINT fk_cats_cat_color FOREIGN KEY (cat_color_id) REFERENCES cat_colors (id) ON DELETE CASCADE;

ALTER TABLE color_hex ADD CONSTRAINT fk_color_hex_cat_colors FOREIGN KEY (id) REFERENCES cat_colors (id) ON DELETE CASCADE;

ALTER TABLE toys ADD CONSTRAINT fk_toys_toys_producer FOREIGN KEY (toys_producer_id) REFERENCES toys_producer (id) ON DELETE CASCADE;

ALTER TABLE house_cats ADD CONSTRAINT fk_house_cats_house FOREIGN KEY (house_id) REFERENCES house (id) ON DELETE CASCADE;
ALTER TABLE house_cats ADD CONSTRAINT fk_house_cats_cats FOREIGN KEY (cat_id) REFERENCES cats (id) ON DELETE CASCADE;

ALTER TABLE toys_house ADD CONSTRAINT fk_toys_house_toys FOREIGN KEY (toy_id) REFERENCES toys (id) ON DELETE CASCADE;
ALTER TABLE toys_house ADD CONSTRAINT fk_toys_house_house FOREIGN KEY (house_id) REFERENCES house (id) ON DELETE CASCADE;

