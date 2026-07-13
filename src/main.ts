// let a: string = 'str';
// let b: number = 5;
// let c: boolean = true;

// let d: null = null;
// let e: undefined = undefined;

// let f: any;
// f = 123;
// f.toLowerCase();

// let g: unknown;
// g = 123;
// if (typeof g === 'string') {
//   g.toLowerCase();
// };

// interface Car {
//   readonly VIN: string;
//   engine: string;
//   color: string;
//   weight?: number;
//   number: string;
// }

// const car: Car = {
//   VIN: "EH3432h342jJ32kk",
//   engine: "v8",
//   color: "red",
//   weight: 2000,
//   number: "AX8472AA",
// };

// const carImport: Car = {
//   VIN: "EH3432h3das21jJd22kk",
//   engine: "v12",
//   color: "green",
//   number: "PL3676XC",
// };

// // car.VIN = '312321'; Error can`t change readonly

// car.color = 'red';

// let user: User | null = null;

// interface User {
//   name: string;
//   email: string;
// };

// user = {
//   name: 'dmytro',
//   email: 'some@email',
// };

// type Status = 'pending' | 'fullfiled' | 'rejected';

// let status: Status = 'pending';

// status = 'fullfiled';

// status = 'rejected';

// const numbers: number[] = [1, 2, 3];

// // const numbers1: Array<number> = [1, 2, 3];

// // const person: [string, number] = ["Alona", 35];

// type Arr = boolean | string | number;

// const arr: Arr[] = [true, "hello", 43, false];

// interface Person {
//   name: string;
//   age: number;
// };

// interface Dog {
//   color: string;
//   breed: string;
// };

// type ArrElement = Person | Dog;

// const arr1: ArrElement[] = [{ name: "Ivan", age: 21 }, { color: 'black', breed: 'buldog' }];

// interface Animal {
//   color: string;
//   name: string;
// }

// interface Animal {
//   breed: string;
// }

// const cat: Animal = {
//   color: 'black',
//   name: 'Jhon',
//   breed: 'cat',
// }

// interface AnimalPro extends Animal {
//   family: string;
// }

// const animal: AnimalPro = {
//   color: 'black',
//   name: 'Jhon',
//   breed: 'cat',
//   family: '1232',
// }

// 1. Просте додавання чисел

// Умова:
// Напиши функцію add, яка приймає два числа та повертає їх суму.

// function add(a:number, b:number):number {
//   return a + b;
// }
// add(5, 10);

// 2. Привітання користувача

// Умова:
// Функція greetUser приймає ім’я (string) і логічне значення isMorning (boolean).
// Повертає рядок "Good morning, {name}" якщо isMorning === true, і "Hello, {name}" якщо false.
// function greetUser(name:string, isMorning:boolean): string {
// if (isMorning===true) {
//   return `Good morning, ${name}`;
// } else {
//   return `Hello, ${name}`;
// }
//   return isMorning ? `Good morning, ${name}` : `Hello, ${name}`;
// }
// greetUser('Name', true)

// 3. Перевірка числа

// Умова:
// Функція isPositive приймає будь-яке значення (unknown) і повертає boolean:

// true якщо це число > 0,

// false якщо число ≤ 0 або не число.

// function isPositive(value:unknown):boolean {
//   if (typeof value !== 'number') {
//     return false
//   }
//   return value > 0

// }
// isPositive(25)

// 4. Об’єкт користувача

// Умова:
// Створи інтерфейс User з полями:

// name: string

// age: number

// email?: string (optional)

// // Функція getUserSummary приймає об’єкт User та повертає рядок "Name: {name}, Age: {age}, Email: {email}".
// // Якщо email немає — виводимо "Name: {name}, Age: {age},  Email: N/A".
// interface User {
//   name: string;
//   age: number;
//   email?: string;
// }
// function getUserSummary(user: User): string {
//   // if (user.email ) {
//   //   return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
//   // } else {
//   //   return `Name: ${user.name}, Age: ${user.age},  Email: N/A`;
//   // }
//   const email = user.email ?? 'N/A';

//   return `Name: ${user.name}, Age: ${user.age}, Email: ${email}`;
// }
// getUserSummary({ name: 'lola', age: 35 });

// // =================

// // 5. Масив чисел

// // Умова:
// // Функція sumArray приймає масив чисел number[] і повертає їхню суму.

// function sumArray(numbers: number[]): number {
//   return numbers.reduce((acc, number) => { return acc + number }, 0)
// }

// console.log(sumArray([1, 2, 3]));


// // ====================

// // 6. Масив рядків або чисел

// // Умова:
// // Функція joinArray приймає масив, елементи якого можуть бути string або number і повертає рядок з усіх елементів, розділених комою.

// function joinArray(array: (number | string)[]): string {
//   // return array.join()
//   return array.join(', ')
// }

// console.log(joinArray([123, 'asd']));

// // ====================

// // 9. Об’єднання union типів

// // Умова:
// // Функція formatValue приймає параметр value: string | number | boolean і повертає рядок:

// // якщо boolean — "true"/"false",

// // якщо number — "Number: {value}",

// // якщо string — "String: {value}".

// function formatValue(value: string | number | boolean): string {
//   if (typeof value === "string") {
//     return `String ${value}`;
//   }
//   if (typeof value === 'number') {
//     return `Number ${value}`
//   }
//   // return value ? "true" : "false"
//   return String(value)
// }

// console.log(formatValue('hello'));
// console.log(formatValue(123));
// console.log(formatValue(true));
// console.log(formatValue(false));

// =======================

// 10. Масив невідомого типу

// Умова:
// Функція countNumbers приймає масив unknown[] і повертає кількість чисел у масиві.

function countNumbers(array: unknown[]): number {
  // let numbersAmount = 0;
  // array.forEach((item) => {
  //   if (typeof item === 'number') {
  //     numbersAmount += 1;
  //   }
  // })
  // return numbersAmount;

  return array.filter((item) => typeof item === 'number').length
}

console.log(countNumbers([123, false, 'qwer', 1]));
