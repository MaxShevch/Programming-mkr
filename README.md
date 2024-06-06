# Programming-mkr
Task 3
Оператор поширення використовується для розповсюдження елементів ітератора (наприклад, масиву чи об’єкта) у список або в інший ітератор. 
Він часто використовується для копіювання масивів, об’єднання масивів і розподілу елементів у аргументи функції.
Копіювання масиву
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // [1, 2, 3]

Конкатенація масиву
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4]

Розподіл елементів на аргументи функції:
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // 6

Копіювання об'єкта:
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log(obj2); // { a: 1, b: 2 }

Об'єднання об'єктів:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { a: 1, b: 3, c: 4 }

Оператор rest використовується для збору кількох елементів і зведення їх в один масив або об’єкт. 
Він часто використовується в списках параметрів функції для обробки невизначеної кількості аргументів і в деструктуризації об’єктів для захоплення решти властивостей.

Параметри функції:
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

Деструктуризація масиву:
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]

Деструктуризація об'єктів:
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a);    // 1
console.log(b);    // 2
console.log(rest); // { c: 3, d: 4 }

Приклад, що демонструє обидва:
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4]


function logAll(first, ...rest) {
  console.log(first);
  console.log(rest);
}
logAll(1, 2, 3, 4); // 1, [2, 3, 4]


const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3


const [first, ...others] = [1, 2, 3, 4];
console.log(first);  // 1
console.log(others); // [2, 3, 4]