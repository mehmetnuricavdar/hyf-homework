USE meal_sharing;
-- ********************** Meal **********************
-- Get all meals
SELECT*FROM meal;
-- Add a new meal
INSERT INTO meal VALUES(
        'Margarita',
        'one of the classics',
        'Copenhagen',
        '2023-04-01 14:10:10',
        6,
        14.90,
        '2023-04-01 14:10:10' );

-- Get a meal with any id, fx 1
SELECT*FROM meal WHERE meal_id=1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET max_reservations=16 WHERE meal_id=1;
-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE meal_id=1;
-- **********************Reservation **********************
-- Get all reservations
SELECT*FROM reservation;
-- Add a new reservation
INSERT INTO reservation VALUES (4,1,'2023-04-01 14:10:10','+45123123123','Mehmet','mehmet@email.com');
-- Get a reservation with any id, fx 1
SELECT*FROM reservation WHERE reservation_id=2;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET number_of_guests=5 WHERE reservation_id=2;
-- Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE reservation_id=2;
-- ********************** Review **********************
-- Get all reviews
SELECT*FROM review;
-- Add a new review
INSERT INTO review VALUES ('Fantastic','Like my mom cooked',1,5,'2023-04-01 14:10:10');
-- Get a review with any id, fx 1
SELECT*FROM review WHERE  review_id=1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET title='it is fantastic' WHERE  review_id=1;
-- Delete a review with any id, fx 1
DELETE FROM review WHERE review_id=1;
-- ********************** Additional queries **********************
-- Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries
INSERT INTO meal VALUES ('Mediterranean','sea wiew','Athens','2023-04-05 14:10:10',10,17.90,'2023-04-05 14:10:10');
INSERT INTO review VALUES('Cool','felt the sea',2,3,'2023-04-06 14:10:10');
-- Functionality
-- Get meals that has a price smaller than a specific price fx 90
SELECT*FROM meal WHERE price<20;
-- Get meals that still has available reservations
SELECT m.*FROM meal m
    JOIN reservation r
    ON m.meal_id=r.meal_id
WHERE m.max_reservations-r.number_of_guests>0;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT*FROM meal WHERE title LIKE '%gar%';
-- Get meals that has been created between two dates
SELECT*FROM meal WHERE created_date BETWEEN '2023-01-01' AND '2023-07-01';
-- Get only specific number of meals fx return only 5 meals
SELECT*FROM meal LIMIT 3;
-- Get the meals that have good reviews
SELECT*FROM meal m
    JOIN review r
    ON m.meal_id=r.review_id
WHERE  r.stars>4;
-- Get reservations for a specific meal sorted by created_date
SELECT title FROM meal
    JOIN reservation r
    ON meal.meal_id = r.meal_id
WHERE  m.title LIKE 'Margarita'
ORDER  BY r.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title,
    Avg(review.stars)
FROM meal
    LEFT JOIN review
    ON review.meal_id = meal.meal_id
GROUP  BY meal.meal_id
ORDER  BY Avg(review.stars); 