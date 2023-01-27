DROP DATABASE IF EXISTS cocoa_cart;
CREATE DATABASE cocoa_cart;

\c cocoa_cart;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INT NOT NULL,
    flavor TEXT,
    type TEXT NOT NULL,
    pcs INT,
    image TEXT NOT NULL
);

