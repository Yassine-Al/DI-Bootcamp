create table  student(id serial ,first_name varchar(50),last_name varchar(50),birth_date date);
insert into student(first_name,last_name,birth_date)
values('Marc','Benichou','	02/11/1998'),
('Yoan','Cohen','03/12/2010'),
('Lea','Benichou','27/07/1987'),
('Amelia','Dux','07/04/1996'),
('David','Grez','14/06/2003'),
('Omer','Simpson','03/10/1980')

select * from student ;

select first_name,last_name from student

SELECT  first_name,last_name FROM student WHERE id = 2;

SELECT first_name,last_name FROM student WHERE last_name = 'Benichou' AND first_name = 'Marc';

SELECT *FROM student WHERE last_name = 'Benichou' OR first_name = 'Marc';

SELECT * FROM student WHERE first_name LIKE '%a';

SELECT * FROM student WHERE SUBSTRING(first_name, LENGTH(first_name)-1, 1) = 'a';

SELECT * FROM student WHERE id IN (1, 3);

SELECT * FROM student WHERE birth_date >= '2000-01-01';