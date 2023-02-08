-- Part 1: Workin with tasks
-- * Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO tasks (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Do database homework','Database Week2 homeworks', '2023-01-01', '2023-01-01', '2023-01-10',1,1 );
-- *Change the title of a task:
UPDATE tasks
SET title='prepare hw for database week2'
WHERE id=1;
-- * Change a task due date:
UPDATE tasks
SET due_date='2023-02-01'
WHERE id=1;
-- * Change a task status:
UPDATE tasks
SET status_id=2
WHERE id=1;
-- * Mark a task as complete:
UPDATE tasks
SET status_id=3
WHERE id=1;
-- * Delete a task:
DELETE FROM tasks
WHERE id=1;

