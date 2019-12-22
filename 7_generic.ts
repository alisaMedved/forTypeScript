// генерик тип - динамически подстраивающийся тип массива-аргумента функции

const arrayOfNumbers: Array<number> = [1, 2, 3, 4];
const arrayOfSrings: Array<string> = ['ghtttt', 'jgerrrr'];

function reverseFunc<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(reverseFunc(arrayOfNumbers));
console.log(reverseFunc(arrayOfSrings));
