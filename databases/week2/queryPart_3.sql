-- Part 3: More queries
-- * Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.* FROM task
JOIN user ON task.user_id=user_id
WHERE user.email= LIKE '%@spotify.com';
-- * Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.*
FROM task
    JOIN user_task ON task.id = user_task.task_id
    JOIN  user
ON user_task.user_id = user.id
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';
-- * Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.*
FROM task
    JOIN user_task ON task.id = user_task.task_id
    JOIN  user
ON user_task.user_id = user.id
WHERE user.name = 'Maryrose Meadows' AND MONTH
(task.created) = 9;
-- * Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTH(created) as month, COUNT(*) as task_count
FROM task
GROUP BY MONTH(created);
