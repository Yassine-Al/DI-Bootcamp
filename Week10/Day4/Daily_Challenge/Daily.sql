-- 1
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id 
NOT IN (SELECT id FROM SecondTab WHERE id IS NULL)


-- 2
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5)


-- 3
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab)


-- 4
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL)

