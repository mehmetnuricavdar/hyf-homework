CREATE DATABASE meal_sharing;
USE meal_sharing;
CREATE TABLE reservation (
    reservation_id INT(10) UNSIGNED NOT NULL auto_increment,
    number_of_guests INT (50) NOT NULL,
    meal_id INT (10) UNSIGNED,
    created_date DATE,
    contact_phone_number VARCHAR (20),
    contact_name VARCHAR (20),
    contact_email VARCHAR (20),
    PRIMARY KEY (reservation_id),
    CONSTRAINT `reservation_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`meal_id`) ON
    DELETE CASCADE ON
    UPDATE CASCADE
) engine = innodb DEFAULT charset = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE meal (
    meal_id INT(10) UNSIGNED NOT NULL auto_increment,
    title VARCHAR (50),
    description TEXT (255),
    location VARCHAR (50),
    time DATETIME,
    max_reservations INT (50),
    price DECIMAL,
    created_date DATE,
    PRIMARY KEY (meal_id)
) engine = innodb DEFAULT charset = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE review (
    review_id INT(10) UNSIGNED NOT NULL auto_increment,
    title VARCHAR (255),
    description TEXT (255),
    meal_id INT (10) UNSIGNED,
    stars INT (5),
    created_date DATE,
    PRIMARY KEY (review_id),
    CONSTRAINT `review_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`meal_id`) ON
            DELETE CASCADE ON
            UPDATE CASCADE
) engine = innodb DEFAULT charset = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Ref: "Reservation"."meal_id" > "Meal"."id",
-- Ref: "Review"."meal_id" > "Meal"."id"