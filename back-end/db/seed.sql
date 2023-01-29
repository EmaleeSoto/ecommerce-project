\c cocoa_cart

INSERT INTO products (name, price, flavor, pcs, type, description, image, stock_status) VALUES
('Assorted Chocolate - Simple', 12, 'Milk Chocolate, White Chocolate, Dark Chocolate', 8, 'assorted', 'A small, simple box of delicious treats! This assortment comes wth the classic Milk Chocolate, Dark Chocolate, and White Chocolate trio.', 'https://cocoa-cart.netlify.app/images/assortments/assortment-1.jpeg', true),
('Assorted Chocolate - Standard', 20, 'Milk Chocolate, White Chocolate, Dark Chocolate, Orange Chocolate, Hazlenut', 16, 'assorted', 'Our best seller, this assortment is a Simply Divine standard box with Milk Chocolate, Dark Chocolate, White Chocolate, Orange, and Hazlenut squares.', 'https://cocoa-cart.netlify.app/images/assortments/assortment-2.jpeg', true),
('Assorted Chocolate - Large', 35, 'Milk Chocolate, White Chocolate, Dark Chocolate, Orange Chocolate, Hazlenut, Salted Caramel, Strawberry Cream, Birthday Cake', 32, 'assorted', 'The Simply Divine Large Assortment Box comes with Milk Chocolate, Dark Chocolate, White Chocolate, Orange, Hazlenut, Salted Caramel, Strawberry Cream, and Birthday Cake bits.', 'https://cocoa-cart.netlify.app/images/assortments/assortment-3.jpeg', true),
('Special Edition Truffel Assortment', 50, 'Tiramisu, Black Forest, Raspberry Cream, Peanut Butter Cup, Dulce de Leche', 25, 'assorted', 'Treat yourself with Simply Divine''s Special Edition Truffle Box. This box includes the exclusive flavors Tiramisu, Black Forest, Raspberry Cream, Peanut Butter Cup, and Dulce de Leche truffles. Simply Devine.', 'https://cocoa-cart.netlify.app/images/assortments/assortment-4.jpeg', true),
('Milk Chocolate Truffle Box', 14, 'Milk Chocolate', 6, 'assorted', 'Our classic Milk Chocolate Truffle Box includes 14 pieces of Belgian Milk Chocolate Truffles, with milk chocolate candy on top. Enjoy a sweet, creamy arrangement that melts on the tongue!', 'https://cocoa-cart.netlify.app/images/assortments/candy-truffles.jpeg', true),
('Simply Delicious Chocolate Bar', 7, 'Milk Chocolate, Dark Chocolate, White Chocolate', 1, 'single', 'Our divine chocolate bars are made with premium ingredients. All bars come in 4.0oz.', 'https://cocoa-cart.netlify.app/images/singles/chocolate-bars.jpeg', true),
('Chocolate Crunch Bite', 0.5, 'Milk Chocolate', 1, 'single', 'Chocolate Crunch Bites are made with premium Belgian Milk Chocolate and crunchy Hazelnut.', 'https://cocoa-cart.netlify.app/images/singles/crunch.jpeg', true),
('Decadent Dark Chocolate', 0.5, 'Dark Chocolate', 1, 'single', 'Rich, premium Dark Chocolate Square for real, dark chocolate lovers.', 'https://cocoa-cart.netlify.app/images/singles/dark-chocolate.jpeg', true),
('Peanut Butter Bite', 1, 'Peanut Butter Cup', 1, 'single', 'A Milk Chocolate Bite with a soft, Peanut Buttery Center.', 'https://cocoa-cart.netlify.app/images/singles/peanut-butter.jpeg', true),
('Rich Raspberry Chocolate', 1, 'Raspberry Cream', 1, 'single', 'Our Raspberry Squares come with a dark chocolate exterior, and a delicious raspberry cream interior.', 'https://cocoa-cart.netlify.app/images/singles/raspberry-choc.jpeg', true),
('Sweet Milk Chocolate Square', 0.5, 'Milk Chocolate', 1, 'single', 'Bite sized Belgian Milk Chocolate Squares. A creamy and smooth classic for all chocolate lovers to enjoy.', 'https://cocoa-cart.netlify.app/images/singles/milk-chocolate.jpeg', true),
('Brownie Bits', 8, 'Milk Chocolate, Dark Chocolate', 4, 'single', 'Switch it up with bite sized Brownie Bits. Soft, light, delicious.', 'https://cocoa-cart.netlify.app/images/singles/milk-choc-square.jpeg', true);

INSERT INTO customer (name, phone_number, email, street_address, postal_code, city, state, email_list, firebase_id) VALUES 
('Stacey', '12345678901', 'stacey@gmail.com', '123 street', '00000', 'New York', 'New York', true, 'fill');

INSERT INTO customer_order (order_number, shipping_address, billing_address, price, order_status) VALUES
('001', '123 Street', '456 Ave', 35, 'placed');