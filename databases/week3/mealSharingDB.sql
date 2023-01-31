CREATE DATABASE meal_sharing;

USE meal_sharing;

CREATE TABLE reservation (
    reservationid INT(10) UNSIGNED NOT NULL auto_increment,
    numberofguests INT (50) NOT NULL,
    mealid INT (10) UNSIGNED,
    createddate DATE,
    contactphonenumber VARCHAR (20),
    contactname VARCHAR (20),
    contactemail VARCHAR (20),
    PRIMARY KEY (reservationid),
    CONSTRAINT `reservation_mealid` FOREIGN KEY (`mealid`) REFERENCES `meal` (`mealid`) ON
    DELETE CASCADE ON
    UPDATE CASCADE
) engine = innodb DEFAULT charset = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE meal (
    mealid INT(10) UNSIGNED NOT NULL auto_increment,
    title VARCHAR (50),
    description TEXT (255),
    location VARCHAR (50),
    time DATETIME,
    max_reservations INT (50),
    price DECIMAL,
    created_date DATE,
    PRIMARY KEY (mealid)
) engine = innodb DEFAULT charset = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE review (
    reviewid INT(10) UNSIGNED NOT NULL auto_increment,
    title VARCHAR (50),
    description TEXT (255),
    mealid INT (10) UNSIGNED,
    stars INT (5),
    created_date DATE,
    PRIMARY KEY (reviewid),
    CONSTRAINT `review_mealid` FOREIGN KEY (`mealid`) REFERENCES `meal` (`mealid`) ON
            DELETE CASCADE ON
            UPDATE CASCADE
) engine = innodb DEFAULT charset = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Ref: "Reservation"."meal_id" > "Meal"."id",
-- Ref: "Review"."meal_id" > "Meal"."id"