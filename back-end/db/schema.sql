DROP DATABASE IF EXISTS cocoa_cart;
CREATE DATABASE cocoa_cart;

\c cocoa_cart;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC NOT NULL,
    flavor TEXT,
    pcs INT,
    type TEXT,
    image TEXT NOT NULL
);

