interface Box {
    height: number;
    width: string;
}

interface Box {
    scale: number;
    // выбьет ошибку поля нефункционального типа дожны быть уникальными
    width: number;
}
// мердж двух типов произойдет автоматически под капотом - выбирается первое объявление
let box: Box = {height: 5, width: 'hjk', scale: 10};

interface Cloner {
    clone(animal: Animal): Animal;
}

interface Cloner {
    clone(animal: Sheep): Sheep;
}

interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
}

// можно делвать поля функционального типа с одинаковыми названиями - все
// они будут рассматриваться как перегрузка  функций
//перегрузка функций - это когда функция возвращает разные типы в зависимости от
// введенных аргументов

interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
    clone(animal: Sheep): Sheep;
    clone(animal: Animal): Animal;
}

