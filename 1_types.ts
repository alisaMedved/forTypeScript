const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const otriz: number = -43;
const num: number = 3e10;

const message: string = 'Hello';

const family: string[] = ['father', 'mother', 'daughter', 'son'];
// массив это по факту джинерик - сложный тип данных состоящий из простых типов данных
// для джинериков в TS походу существует своя форма записи через вот такие вот скобочки <>
// у нас в TS есть глобальный встроенный класс Array

let food: Array<string> = ['tomato', 'potatoes', 'currot', 'milk'];
food = ['cat', 'dog', 'house'];

const numberArray: number[] = [1, 2, 3, 4];
const numberMas: Array<number> = [1, 27, 67];

// Tuple - это тип данных представляющий собой массив из разных типов данных

const visitka: [string, number, string, number, boolean, string, number] = ['Alice', 23, 'dev', 1, true, 'meow', 6];


// any - это один из базовых типов данных, представляющий собой тип данных который может менять свое значение

let auth: any = 'login';
// при последующих переименнованиях можно не указывать тип

auth = [1, 3, 4];
// Tuple
const concat: [string, number] = ['Vladil', 178];

let value: any = [1, 2, 3];
value = 'meow';
value = true;

function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Хайзенберг');

// Never
function throwError(message: string): never {
    throw new Error(message);
}
//
// function innfinite(): never {
//     while (true) {
//         console.log('meow');
//     }
// }
function Meow(trim: number): number {
    return trim + 1;
}

throwError('this Error!!');
console.log(Meow(3));

type Login = string;
const login: Login = 'admin';
type ID = string | number
const id1: ID = 123;

type SomeType = string | null | undefined;







