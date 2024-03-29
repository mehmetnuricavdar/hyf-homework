use hyf_class2023;
-- 1 Find out how many tasks are in the task table
SELECT count(id)
FROM task;
-- 2 Find out how many tasks in the task table do not have a valid due date
SELECT count(id)
FROM task
where due_date is null;
-- 3 Find all the tasks that are marked as done
select title, status.name
from task
join status on task.status_id = status.id 
where status.name='Done';
-- 4 Find all the tasks that are not marked as done
select title, status_id
from task
where status_id = '1' or status_id = '2';
-- 5 Get all the tasks, sorted with the most recently created first
select *
from task
order by created desc;
-- 6 Get the single most recently created task
select *
from task
order by created desc
 limit 1;
-- 7 Get the title and due date of all tasks where the title or description contains database
select title
, due_date
from task
 where
(title like '%database%')
 or
(description like '%database%');
-- 8 Get the title and status (as text) of all tasks
select title, status.name as status
from task
    join status ON task.status_id = status.id;
-- 9 Get the name of each status, along with a count of how many tasks have that status
select status.name, count(task.status_id) as status_count
from task
    join status on task.status_id = status.id
group by status.name;
-- 10 Get the names of all statuses, sorted by the status with most tasks first
select status.name, count(task.status_id) as status_count
from task
    join status on task.status_id = status.id
group by status.name
order by status_count desc