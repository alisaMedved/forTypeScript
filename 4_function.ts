// перегрузка для функций - это создание различных вариантов типа возвращаемого значения
// и да - кто сказал что возвращаемым типом не может быть интерфейс



// void - это тип функции, которая ничего не возвращает

// function sayMyAge(age: number): void {
//     console.log(age);
// }
// sayMyAge(12);

// never - это тип функции, которая возвращает Error или функция,
// которая никогда не завершится, она будет выполняться вечно

// function myError(messageError: string): never {
//     throw Error(messageError);
// }
// myError('not validation');

// function myInfinity(): never {
//     while (true) {
//         console.log('infinity');
//     }
// }

// myInfinity();

// elision (элисион) - ударение на э - это кастомный именнованный тип данных

// type Id = string | number;
// const id1: Id = 'ggg';
// const id2: Id = 6788;
// console.log(id1, id2);
//
// let rem: number | string = 7666;
// rem = 'meow';


// джинерик - это сложный тип данных основанных на примитивных типах данных
// комплексный джинерик - это джинерик основанных на сложных типах данных



// есть типы в TS для null и undefined

// const obj: null = null;
// const count: undefined = undefined;



// // function add(a: number, b: number): number {
// //     return a + b
// // }
// //
// // function toUpperCase(str: string): string {
// //     return str.trim().toUpperCase()
// // }
//
// interface MyPosition {
//     x: number | undefined
//     y: number | undefined
// }
//
// interface MyPositionWithDefault extends MyPosition {
//     default: string
// }
//
// function position(): MyPosition
// function position(a: number): MyPositionWithDefault
// function position(a: number, b: number): MyPosition
//
// function position(a?: number, b?: number) {
//     if (!a && !b) {
//         return {x: undefined, y: undefined}
//     }
//
//     if (a && !b) {
//         return {x: a, y: undefined, default: a.toString()}
//     }
//
//     return {x: a, y: b}
// }
//
// console.log('Empty: ', position());
// console.log('One param: ', position(42));
// console.log('Two params: ', position(10, 15));
// // lodash rxjs












// Перегрузка функции

interface StandartCard {
    name: string | undefined,
    age: number | undefined
}

interface StandartCardWithCountry extends StandartCard {
    country: string
}

function dataMan(name: string, age: number): StandartCard;
function dataMan(): StandartCard;
function dataMan(name: string): StandartCardWithCountry;

function dataMan(name?: string, age?: number) {
    if (!name && !age) {
        return {
            name: undefined,
            age: undefined
        }
    }
    if (name && !age) {
        return {
            name,
            age: undefined,
            country: 'Mordor'
        }
    }
    return {
        name,
        age
    }
}

console.log(dataMan());
console.log(dataMan('Svitla'));
console.log(dataMan('Rag', 122));











