DROP DATABASE IF EXISTS rest_exercicios;
CREATE DATABASE IF NOT EXISTS rest_exercicios;
USE rest_exercicios;

CREATE TABLE IF NOT EXISTS products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    brand VARCHAR(100) NOT NULL
);

INSERT INTO products (name, brand)
VALUES ('Fanta Uva', 'Coca-cola'),
       ('Notebook', 'DELL'),
       ('MacBook Air', 'Apple');
SELECT * FROM products;