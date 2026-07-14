// enum Role {
//   Admin = 'admin',
//   Guest = 'guest',
//   User = 'user'
// }

// function handleGreetMessage(role: Role, name: string): string {
//   switch (role) {
//     case Role.Admin:
//       return `Hello Admin, ${name}`
//     case Role.Guest:
//       return `Hello Guest, ${name}`
//     case Role.User:
//       return `Hello ${name}`
//   }
// }

// handleGreetMessage(Role.Admin, 'Dmytro');

//! =========================================

// Задача 1. Узагальнена функція wrapInArray
// Умова

// Є функція:

// function wrapInArray(value) {
//   return [value];
// }

// Зараз вона не типізована.

// Завдання

// Зроби функцію узагальненою

function wrapInArray<T>(value: T): T[] {
  return [value];
}

wrapInArray<number>(1);

//! =========================================

// Задача 2. Узагальнена функція getLastElement
// Умова

// Створи функцію getLastElement, яка:

// приймає масив будь-якого типу

// повертає останній елемент масиву

// Зроби функцію узагальненою.

function getLastElement<T>(array: T[]): T {
  return array[array.length - 1];
}

getLastElement<string | number>(['1', 2, '3']);

//! =========================================

// Задача 3. Узагальнена функція pair
// Умова

// Створи функцію pair, яка:

// приймає два значення, які можуть бути різного типу

// повертає їх як 1) масив /  2)кортеж

// Зроби функцію узагальненою

//!variant 1

function pair1<T, Y>(value1: T, value2: Y): (T | Y)[] {
  return [value2, value1];
}

pair1<number, string>(123, 'str');

//!variant 2

function pair2<T, Y>(value1: T, value2: Y): [T, Y] {
  return [value1, value2];
}
