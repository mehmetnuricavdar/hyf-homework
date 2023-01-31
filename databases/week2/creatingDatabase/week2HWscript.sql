CREATE TABLE `customers`
  (
     `customerid` INT(10) UNSIGNED NOT NULL auto_increment,
     `firstname`  VARCHAR(50) NOT NULL,
     `lastname`   VARCHAR(50) NOT NULL,
     `email`      VARCHAR(50) NOT NULL UNIQUE,
     `phone`      VARCHAR(20) NOT NULL,
     `createdat`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     PRIMARY KEY (`customerid`)
  )
engine=innodb
DEFAULT charset=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `orders`
  (
     `orderid`   INT(10) UNSIGNED NOT NULL auto_increment,
     `orderdate` DATE NOT NULL,
     PRIMARY KEY (`orderid`)
  )
engine=innodb
DEFAULT charset=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `customerorder`
  (
     `orderid`     INT(10) UNSIGNED NOT NULL,
     `customerid`  INT(10) UNSIGNED NOT NULL,
     `orderstatus` ENUM('pending', 'shipped', 'delivered', 'cancelled') NOT NULL
     DEFAULT 'pending',
     PRIMARY KEY (`orderid`),
     CONSTRAINT `customerorder_customerid` FOREIGN KEY (`customerid`) REFERENCES
     `customers` (`customerid`) ON DELETE CASCADE ON UPDATE CASCADE,
     CONSTRAINT `customerorder_orderid` FOREIGN KEY (`orderid`) REFERENCES
     `orders` (`orderid`) ON DELETE CASCADE ON UPDATE CASCADE
  )
engine=innodb
DEFAULT charset=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `country`
  (
     `countryid`   INT(10) UNSIGNED NOT NULL auto_increment,
     `countryname` VARCHAR(50) NOT NULL,
     PRIMARY KEY (`countryid`)
  )
engine=innodb
DEFAULT charset=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `brand`
  (
     `brandid`   INT(10) UNSIGNED NOT NULL auto_increment,
     `brandname` VARCHAR(50) NOT NULL,
     `countryid` INT(10) UNSIGNED NOT NULL,
     PRIMARY KEY (`brandid`),
     CONSTRAINT `brand_countryid` FOREIGN KEY (`countryid`) REFERENCES `country`
     (`countryid`) ON DELETE CASCADE ON UPDATE CASCADE
  -- FOREIGN KEY (countryID) REFERENCES country(countryID)
  )
engine=innodb
DEFAULT charset=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `item`
  (
     `itemid`    INT(10) UNSIGNED NOT NULL auto_increment,
     `itemname`  VARCHAR(50) NOT NULL,
     `itemprice` DECIMAL(10, 2) NOT NULL,
     `brandid`   INT(10) UNSIGNED NOT NULL,
     PRIMARY KEY (`itemid`),
     CONSTRAINT `item_brandid` FOREIGN KEY (`brandid`) REFERENCES `brand` (
     `brandid`) ON DELETE CASCADE ON UPDATE CASCADE
  -- FOREIGN KEY (brandID) REFERENCES brand(brandID)
  )
engine=innodb
DEFAULT charset=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `city`
  (
     `cityid`    INT(10) UNSIGNED NOT NULL auto_increment,
     `cityname`  VARCHAR(50) NOT NULL,
     `countryid` INT(10) UNSIGNED NOT NULL,
     PRIMARY KEY (`cityid`),
     CONSTRAINT `city_countryid` FOREIGN KEY (`countryid`) REFERENCES `country`
     (`countryid`) ON DELETE CASCADE ON UPDATE CASCADE
  -- FOREIGN KEY (countryID) REFERENCES country(countryID)
  )
engine=innodb
DEFAULT charset=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `store`
  (
     `storeid`   INT(10) UNSIGNED NOT NULL auto_increment,
     `storename` VARCHAR(50) NOT NULL,
     `cityid`    INT(10) UNSIGNED NOT NULL,
     `countryid` INT(10) UNSIGNED NOT NULL,
     PRIMARY KEY (`storeid`),
     CONSTRAINT `store_countryid` FOREIGN KEY (`countryid`) REFERENCES `country`
     (`countryid`) ON DELETE CASCADE ON UPDATE CASCADE,
     CONSTRAINT `store_cityid` FOREIGN KEY (`cityid`) REFERENCES `city` (
     `cityid`) ON DELETE CASCADE ON UPDATE CASCADE
  -- FOREIGN KEY (countryID) REFERENCES country(countryID),
  -- FOREIGN KEY (cityID) REFERENCES city(cityID)
  )
engine=innodb
DEFAULT charset=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `orderitem`
  (
     `orderid`      INT(10) UNSIGNED NOT NULL,
     `itemid`       INT(10) UNSIGNED NOT NULL,
     `itemquantity` INT(10) NOT NULL,
     PRIMARY KEY (`orderid`, `itemid`),
     CONSTRAINT `orderitem_orderid` FOREIGN KEY (`orderid`) REFERENCES `orders`
     (`orderid`) ON DELETE CASCADE ON UPDATE CASCADE,
     CONSTRAINT `orderitem_itemid` FOREIGN KEY (`itemid`) REFERENCES `item` (
     `itemid`) ON DELETE CASCADE ON UPDATE CASCADE
  -- FOREIGN KEY (orderID) REFERENCES `order`(orderID)
  -- FOREIGN KEY (itemID) REFERENCES item(itemID)
  )
engine=innodb
DEFAULT charset=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `salesadvisor`
  (
     `advisorid`        INT(10) UNSIGNED NOT NULL auto_increment,
     `advisorfirstname` VARCHAR(50) NOT NULL,
     `advisorlastname`  VARCHAR(50) NOT NULL,
     `storeid`          INT(10) UNSIGNED NOT NULL,
     PRIMARY KEY (`advisorid`),
     CONSTRAINT `salesadvisor_storeid` FOREIGN KEY (`storeid`) REFERENCES
     `store` (`storeid`) ON DELETE CASCADE ON UPDATE CASCADE
  -- FOREIGN KEY (storeID) REFERENCES store(storeID)
  )
engine=innodb
DEFAULT charset=utf8mb4
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `orderadvisor`
  (
     `orderid`   INT(10) UNSIGNED NOT NULL,
     `advisorid` INT(10) UNSIGNED NOT NULL,
     PRIMARY KEY (`orderid`, `advisorid`),
     CONSTRAINT `orderadvisor_orderid` FOREIGN KEY (`orderid`) REFERENCES
     `orders` (`orderid`) ON DELETE CASCADE ON UPDATE CASCADE,
     CONSTRAINT `orderadvisor_advisorid` FOREIGN KEY (`advisorid`) REFERENCES
     `salesadvisor` (`advisorid`) ON DELETE CASCADE ON UPDATE CASCADE
  -- FOREIGN KEY (orderID) REFERENCES `order`(orderID),
  -- FOREIGN KEY (advisorID) REFERENCES salesAdvisor(advisorID)
  )
engine=innodb
DEFAULT charset=utf8mb4
COLLATE=utf8mb4_unicode_ci; 