// ### Задача 1: Поиск первого чётного числа
// Задача:  
// Дан массив чисел. Используйте метод find, чтобы найти первое чётное число в массиве.

// Пример:  
// Для массива [1, 3, 7, 8, 10] функция должна вернуть 8.

// const numbers1 = [1, 3, 7, 8, 10];
// const firstEven = numbers1.find(num => num % 2 === 0);
// console.log(firstEven);

// ---

// ### Задача 2: Поиск строки с длиной больше 5 символов
// Задача:  
// Создайте массив строк. Используйте метод find, чтобы найти первую строку, длина которой больше 5 символов.

// Пример:  
// Для массива ['кот', 'собака', 'тигр', 'слон'] функция должна вернуть 'собака'.

// const strings = ['кот', 'собака', 'тигр', 'слон'];
// const longString = strings.find(str => str.length > 5);
// console.log(longString); 
// ---

// ### Задача 3: Поиск числа больше 10
// Задача:  
// Дан массив чисел. Используйте метод find, чтобы найти первое число, которое больше 10.

// Пример:  
// Для массива [5, 9, 12, 3, 18] функция должна вернуть 12.

// const numbers3 = [5, 9, 12, 3, 18];
// const firstEven = numbers3.find(num => num > 10);
// console.log(firstEven); 

// ---

// ### Задача 4: Поиск объекта с определённым именем
// Задача:  
// Дан массив объектов, каждый объект представляет пользователя с полями name и age. Используйте метод find, чтобы найти объект с именем "Мария".

// Пример:  
// Для массива:
// [
//   { name: 'Алекс', age: 25 },
//   { name: 'Мария', age: 17 },
//   { name: 'Иван', age: 19 }
// ]
// Функция должна вернуть объект { name: 'Мария', age: 17 }.
// const users = [
//     { name: 'Алекс', age: 25 },
//     { name: 'Мария', age: 17 },
//     { name: 'Иван', age: 19 }
// ];

// const userMaria = users.find(user => user.name === 'Мария');
// console.log(userMaria); 

// ---

// ### Задача 5: Поиск первого отрицательного числа
// Задача:  
// Дан массив чисел. Используйте метод find, чтобы найти первое отрицательное число в массиве.

// Пример:  
// Для массива [3, 5, -2, -8, 7] функция должна вернуть -2

// const numbers5 = [3, 5, -2, -8, 7];
// const firstNegative = numbers5.find(num => num < 0);
// console.log(firstNegative);