CREATE DATABASE IF NOT EXISTS myquo;
USE myquo;
CREATE TABLE IF NOT EXISTS myquo (     id int NOT NULL AUTO_INCREMENT,     name text(100) NOT NULL,     quot text(1000) NOT NULL,     age int,     PRIMARY KEY (id) );