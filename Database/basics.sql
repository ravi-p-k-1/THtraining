-- ORDER BY CLAUSE

select * from employees order by employee_id;

select first_name, length(first_name) len from employees order by len desc;

select first_name, length(first_name) len from employees order by len desc nulls first;

select first_name, length(first_name) len from employees order by len desc nulls last;



-- DISTINCT CLAUSE

select Distinct(first_name) from employees;

select distinct first_name, last_name from employees;



-- WHERE CLAUSE

select * from employees where first_name = 'Jane' and last_name='harbinger';

select * from employees where first_name = 'Jane' or last_name='harbinger';

select * from employees where first_name in ('Jane', 'Alice');

select * from employees where first_name like 'J%n%';

select * from employees where length(first_name) between 5 and 6;

select * from employees where first_name != 'Jane';



-- LIMIT CLAUSE

select * from employees order by employee_id asc limit 3;

select * from employees order by employee_id asc limit 1 offset 1;



-- FETCH CLAUSE this is similar to LIMIT but it is more compatible with other systems according to SQL standards.

select * from employees order by employee_id asc offset 1 row fetch first 2 row only;



-- LIKE CLAUSE

select * from employees where string LIKE pattern ESCAPE escape_character;



-- JOIN CLAUSE

select a.employee_id, b.department_id from employees a inner join employee_departments b on a.employee_id = b.employee_id;

select a.employee_id, b.department_id from employees a left join employee_departments b on a.employee_id = b.employee_id;

select a.employee_id, b.department_id from employees a right join employee_departments b on a.employee_id = b.employee_id;

select a.employee_id, b.department_id from employees a full outer join employee_departments b on a.employee_id = b.employee_id;



