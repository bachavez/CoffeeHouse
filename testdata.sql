delete from customers;
delete from products;
delete from sales;
delete from saledetails;

ALTER TABLE customers AUTO_INCREMENT = 1;
ALTER TABLE products AUTO_INCREMENT = 1;
ALTER TABLE sales AUTO_INCREMENT = 1;
ALTER TABLE saledetails AUTO_INCREMENT = 1;

insert into customers (firstName, lastName, email, telephone, address1, address2, city, state, zip, isVip, createdAt, updatedAt) values ('John', 'Smith', 'john@smith.com', '9091112222', '877 Island Avenue', 'Apt 100', 'San Diego', 'CA', '92101', 1, now(), now());
insert into customers (firstName, lastName, email, telephone, address1, address2, city, state, zip, isVip, createdAt, updatedAt) values ('Jane', 'Doe', 'jane@doe.com', '9092223333', '877 Island Avenue', 'Apt 101', 'San Diego', 'CA', '92101', 1, now(), now());
insert into customers (firstName, lastName, email, telephone, address1, address2, city, state, zip, isVip, createdAt, updatedAt) values ('Jon', 'Snow', 'jon@thewall.co.uk', '9093334444', '877 Island Avenue', 'Apt 102', 'San Diego', 'CA', '92101', 1, now(), now());
insert into customers (firstName, lastName, email, telephone, address1, address2, city, state, zip, isVip, createdAt, updatedAt) values ('The', 'Mountain', 'themountain@westeros.gov', '9092247557', '877 Island Avenue', 'Apt 103', 'San Diego', 'CA', '92101', 1, now(), now());
insert into customers (firstName, lastName, email, telephone, address1, address2, city, state, zip, isVip, createdAt, updatedAt) values ('Peter', 'Griffin', 'peter@griffin.com', '9092247557', '877 Island Avenue', 'Apt 104', 'San Diego', 'CA', '92101', 1, now(), now());

insert into products (productName, description, price, cost, createdAt, updatedAt) values ('Coffee', 'Simple black coffee', 2.99, 1, now(), now());
insert into products (productName, description, price, cost, createdAt, updatedAt) values ('Latte', 'Simple steamed latte', 3.99, 1.20, now(), now());
insert into products (productName, description, price, cost, createdAt, updatedAt) values ('Cappucino', 'Simple frothy cappucino', 3.99, 1.20, now(), now());
insert into products (productName, description, price, cost, createdAt, updatedAt) values ('Flat White', 'Difficult to make, delicious to drink', 4.99, 1.20, now(), now());
insert into products (productName, description, price, cost, createdAt, updatedAt) values ('Iced Coffee', 'Refreshing, delicious, iced coffee', 2.99, 1, now(), now());

insert into sales (date, customerId, createdAt, updatedAt) values (now(), 1, now(), now());
insert into saledetails (saleId, productId, quantity, price, createdAt, updatedAt) values (1, 1, 1, 2.99, now(), now());

insert into sales (date, customerId, createdAt, updatedAt) values (now(), 2, now(), now());
insert into saledetails (saleId, productId, quantity, price, createdAt, updatedAt) values (2, 1, 1, 2.99, now(), now());
insert into saledetails (saleId, productId, quantity, price, createdAt, updatedAt) values (2, 2, 1, 2.99, now(), now());

insert into sales (date, customerId, createdAt, updatedAt) values (now(), 3, now(), now());
insert into saledetails (saleId, productId, quantity, price, createdAt, updatedAt) values (3, 1, 1, 2.99, now(), now());
insert into saledetails (saleId, productId, quantity, price, createdAt, updatedAt) values (3, 2, 1, 2.99, now(), now());
insert into saledetails (saleId, productId, quantity, price, createdAt, updatedAt) values (3, 5, 2, 1.99, now(), now());
