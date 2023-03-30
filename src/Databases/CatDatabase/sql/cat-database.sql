-- Remove conflicting tables
DROP TABLE IF EXISTS cat_color CASCADE;
DROP TABLE IF EXISTS cat CASCADE;
DROP TABLE IF EXISTS color_hex CASCADE;
DROP TABLE IF EXISTS house CASCADE;
DROP TABLE IF EXISTS toy CASCADE;
DROP TABLE IF EXISTS toys_producer CASCADE;
DROP TABLE IF EXISTS house_cat CASCADE;
DROP TABLE IF EXISTS toy_house CASCADE;
-- End of removing

CREATE TABLE cat_color (
    id SERIAL NOT NULL,
    color_name VARCHAR(256) NOT NULL
);
ALTER TABLE cat_color ADD CONSTRAINT pk_cat_color PRIMARY KEY (id);

CREATE TABLE cat (
    id BIGSERIAL NOT NULL,
    cat_color_id INTEGER,
    cat_name VARCHAR(256),
    date_of_birth DATE
);
ALTER TABLE cat ADD CONSTRAINT pk_cat PRIMARY KEY (id);

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

CREATE TABLE toy (
    id SERIAL NOT NULL,
    toys_producer_id INTEGER NULL,
    toy_name VARCHAR(256) NOT NULL,
    barcode VARCHAR(256) NOT NULL,
    price NUMERIC NOT NULL,
    currency VARCHAR NOT NULL CHECK (LENGTH(currency) < 6),
    date_introduced TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    naughty VARCHAR(256) NULL
);
ALTER TABLE toy ADD CONSTRAINT pk_toy PRIMARY KEY (id);
ALTER TABLE toy ADD CONSTRAINT uc_toy_barcode UNIQUE (barcode);

CREATE TABLE toys_producer (
    id SERIAL NOT NULL,
    stock_info JSONB NOT NULL,
    hq_location JSON NOT NULL
);
ALTER TABLE toys_producer ADD CONSTRAINT pk_toys_producer PRIMARY KEY (id);

CREATE TABLE house_cat (
    house_id INTEGER NOT NULL,
    cat_id BIGINT NOT NULL
);
ALTER TABLE house_cat ADD CONSTRAINT pk_house_cat PRIMARY KEY (house_id, cat_id);

CREATE TABLE toy_house (
    toy_id INTEGER NOT NULL,
    house_id INTEGER NOT NULL,
    amount INTEGER NOT NULL DEFAULT 1
);
ALTER TABLE toy_house ADD CONSTRAINT pk_toy_house PRIMARY KEY (toy_id, house_id);

ALTER TABLE cat ADD CONSTRAINT fk_cats_cat_color FOREIGN KEY (cat_color_id) REFERENCES cat_color (id) ON DELETE CASCADE;

ALTER TABLE color_hex ADD CONSTRAINT fk_color_hex_cat_colors FOREIGN KEY (id) REFERENCES cat_color (id) ON DELETE CASCADE;

ALTER TABLE toy ADD CONSTRAINT fk_toys_toys_producer FOREIGN KEY (toys_producer_id) REFERENCES toys_producer (id) ON DELETE CASCADE;

ALTER TABLE house_cat ADD CONSTRAINT fk_house_cat_house FOREIGN KEY (house_id) REFERENCES house (id) ON DELETE CASCADE;
ALTER TABLE house_cat ADD CONSTRAINT fk_house_cat_cat FOREIGN KEY (cat_id) REFERENCES cat (id) ON DELETE CASCADE;

ALTER TABLE toy_house ADD CONSTRAINT fk_toy_house_toy FOREIGN KEY (toy_id) REFERENCES toy (id) ON DELETE CASCADE;
ALTER TABLE toy_house ADD CONSTRAINT fk_toy_house_house FOREIGN KEY (house_id) REFERENCES house (id) ON DELETE CASCADE;

