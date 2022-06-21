
-- Data Base

CREATE DATABASE IF NOT EXISTS `APIRest`;

USE `APIRest`;

--- Table Principal

CREATE TABLE `Embarcaciones` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(45) NOT NULL,
    `country` varchar(45) NOT NULL,
    `continent` varchar(45) NOT NULL,
    `coordinates` varchar(45) NOT NULL,
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `Embarcaciones` (
    `id`,
    `name`,
    `country`,
    `continent`,
    `coordinates`
) VALUES ( NULL, 'Colombia SAS', 'Colombia', 'South America','1,1'),
( NULL, 'Panama PSE', 'Panama', 'South America','2,2'),
( NULL, 'Argentina Chocolate', 'Argentina', 'South America','3,3'),
( NULL, 'England Exports', 'England', 'Europe','4,4'),
( NULL, 'PSG', 'France', 'Europe','5,5'),
( NULL, 'Bavaria', 'Germany', 'Europe','6,6'),
( NULL, 'Pique de Os', 'Portugal', 'Europe','7,7'),
( NULL, 'Barcelona Technologies', 'Spain', 'Europe','8,8'),
( NULL, 'Real Madrid', 'Spain', 'Europe','9,9'),
( NULL, 'Hasbro', 'USA', 'North America','10,10'),
( NULL, 'Disney', 'USA', 'North America','11,11'),
( NULL, 'Nike', 'USA', 'North America','12,12'),
( NULL, 'Adidas', 'USA', 'North America','13,13'),
( NULL, 'Pepsi', 'USA', 'North America','14,14'),
( NULL, 'Coca-Cola', 'USA', 'North America','15,15'),
( NULL, 'McDonalds', 'USA', 'North America','16,16'),
( NULL, 'KFC', 'USA', 'North America','17,17'),
( NULL, 'Samsung', 'USA', 'North America','18,18'),
( NULL, 'Apple', 'USA', 'North America','19,19'),
( NULL, 'Microsoft', 'USA', 'North America','20,20'),
( NULL, 'Google', 'USA', 'North America','21,21'),
( NULL, 'El tiempo', 'Colombia', 'South America','22,22'),
( NULL, 'El Nuevo Día', 'Colombia', 'South America','23,23'),
( NULL, 'Globant', 'Colombia', 'South America','24,24');


-- Archicteture Table `usuarios` -- Duenos de las Embarcaciones

CREATE TABLE IF NOT EXISTS `usuarios` (
    `userID` int(11) NOT NULL AUTO_INCREMENT,
    `userName` varchar(45) NOT NULL,
    'email' varchar(45) NOT NULL,
    'nameEmbarcacion' KEY (`nameEmbarcacion`),
    PRIMARY KEY (`userID`)
)
