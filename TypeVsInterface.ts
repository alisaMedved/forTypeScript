// 1) Нельзя использовать одно имя для нескольких типов. Другими словами, нельзя расширить тип,
// а вот интерфейс можно
// ( и это может быть удобно, если нужно расширить интерфейс сторонней библиотеки).

type Box = {
    x: number;
}

// выбивает ошибку -
type Box = {
    y: number;
}

// interface Box {
//     x: number;
// }
//
// // не выбивает ошибку -
// interface Box {
//     y: number;
// }

//2) нельзя имплементироваться от типа если используется union
//
type Shape = {
    v: string;
}

type Figure = {
    z: number;
}

type Box = Shape | Figure;

// type Box = Shape;
class MyBox implements Box {
    v: string;
}