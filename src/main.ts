let a: string = 'str';
let b: number = 5;
let c: boolean = true;

let d: null = null;
let e: undefined = undefined;

let f: any;
f = 123;
f.toLowerCase();

let g: unknown;
g = 123;
if (typeof g === 'string') {
  g.toLowerCase();
};

interface Car {
  readonly VIN: string;
  engine: string;
  color: string;
  weight?: number;
  number: string;
}

const car: Car = {
  VIN: "EH3432h342jJ32kk",
  engine: "v8",
  color: "red",
  weight: 2000,
  number: "AX8472AA",
};

const carImport: Car = {
  VIN: "EH3432h3das21jJd22kk",
  engine: "v12",
  color: "green",
  number: "PL3676XC",
};

// car.VIN = '312321'; Error can`t change readonly

car.color = 'red';

let user: User | null = null;

interface User {
  name: string;
  email: string;
};

user = {
  name: 'dmytro',
  email: 'some@email',
};

type Status = 'pending' | 'fullfiled' | 'rejected';

let status: Status = 'pending';

status = 'fullfiled';

status = 'rejected';

const numbers: number[] = [1, 2, 3];

// const numbers1: Array<number> = [1, 2, 3];

// const person: [string, number] = ["Alona", 35];

type Arr = boolean | string | number;

const arr: Arr[] = [true, "hello", 43, false];

interface Person {
  name: string;
  age: number;
};

interface Dog {
  color: string;
  breed: string;
};

type ArrElement = Person | Dog;

const arr1: ArrElement[] = [{ name: "Ivan", age: 21 }, { color: 'black', breed: 'buldog' }];

interface Animal {
  color: string;
  name: string;
}

interface Animal {
  breed: string;
}

const cat: Animal = {
  color: 'black',
  name: 'Jhon',
  breed: 'cat',
}

interface AnimalPro extends Animal {
  family: string;
}

const animal: AnimalPro = {
  color: 'black',
  name: 'Jhon',
  breed: 'cat',
  family: '1232',
}