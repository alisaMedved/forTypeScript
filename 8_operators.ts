// вспомогательные операторы, которые помогают в взаимодействии с типами

// оператор keyof

interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person; // 'name' | 'age'

let keyRR: PersonKeys = 'name';
keyRR = 'age';

//выбрасывает ошибку
// keyRR = 'mir';

class PersonCl {
    remembered: boolean;
    valueRem: string;

    constructor(newRemenber: boolean, newValue: string) {
        this.remembered = newRemenber;
        this.valueRem = newValue;
    }

    getValue(): void {
        console.log('value:  ', this.valueRem);
    }
}

type keysPersonCl = keyof PersonCl;
const murr: keysPersonCl = 'remembered';
const murr1: keysPersonCl = 'valueRem';
const murr2: keysPersonCl = 'getValue';

const mas: Array<number> = [1, 56, 44];
// mas не тип - выбивает ошибку
// type masKey = keyof mas;
console.log(mas);

type Obj = {
    [key: string]: string
}
const obj: Obj = {
    mur: 'cat',
    vaf: 'dog',
    pii: 'mouse'
};

// объект не тип - выбивает ошибку
// type Mir = keyof obj;

// ключевые слова Exclude и  Pick

type User = {
    id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeyExclude = Exclude<keyof User, 'id' | 'createdAt'> // 'name' | 'email'
type UserKeyPick = Pick<User, 'id' | 'createdAt'> // 'id' | 'createdAt'

const uuu: UserKeyExclude = 'name';
// const uuu1: UserKeyExclude = 'id';
// const uuu2: UserKeyPick = 'name';
// const uuu3: UserKeyPick = 'id';

// дополнительная удобная эдакая алидация по названиям ключей что приходят с API

