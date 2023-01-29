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
    description TEXT,
    image TEXT NOT NULL, 
    stock_status BOOLEAN
);

CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone_number VARCHAR(11) NOT NULL,
    email TEXT NOT NULL,
    street_address TEXT NOT NULL,
    postal_code VARCHAR(5),
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    email_list BOOLEAN,
    firebase_id TEXT
);

CREATE TYPE shipping_status AS ENUM ('in cart', 'placed', 'processed', 'shipped', 'in transit', 'delivered');

CREATE TABLE customer_order (
    id SERIAL PRIMARY KEY,
    order_number INT NOT NULL,
    shipping_address TEXT NOT NULL,
    billing_address TEXT NOT NULL,
    price NUMERIC NOT NULL,
    order_status shipping_status
);
