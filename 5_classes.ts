// классы в TS

// class Point {
//     x: number;
//     y: number;
//
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//
//     move(x: number, y: number) {
//         // разрешает переписывать поля в методах класса, а не только в контсрукторе как поля readonly
//         this.x += x;
//         this.y += y;
//     }
// }
//
// const obj = new Point(10, 20);
// console.log(obj);
// obj.move(10, 20);
// console.log(obj);
//
// // про поля readonly в классе
//
// class Car {
//     readonly model: string;
//     constructor(theModel: string) {
//         this.model=theModel
//     }
//     // changeModel(newModel: string) {
//         // поля readonly перезаписываются только в конструкторе
//     //     this.model=newModel;
//     // }
// }
//
// const car1 = new Car('volga');
// console.log(car1);
//
// // выбивает ошибку при перезаписывании так как readonly поле
// // car1.model = 'sammuer';
//
// // более короткий синтаксис для полей readonly
// // и для полей с дефолтным значением в классах
//
// class Car1 {
//     readonly numberOfCar: number = 4 ;
//     constructor(readonly model: string) {}
// }

// интерфейс для класса c конструктором
// в чем секрет? конструктор не пишут в интерфейсе - его нельзя там писать

// interface IPoint{
//     x: number
//     y: number
//
//     move(x: number, y: number): void
// }
//
// class Point implements IPoint {
//     x: number;
//     y: number;
//
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//
//     move(x: number, y: number): void {
//         this.x += x;
//         this.y += y;
//     }
// }
//
// const obj = new Point(10, 20);
// console.log(obj);
// obj.move(10, 20);
// console.log(obj);

// модификаторы для класса

// private - доступно только внутри класса-родителя
// protected - поле доступно внутри класса-родителя и классу-ребенку, а инстанцу класса-ребенка - не доступно
// public - поле достпуно внутри класса-родителя, классу-ребенку, инстанцу класса-ребенка
// по умолчанию у поля автоматом устанавливается public
//
class Animal {
    protected voice: string = 'purrrr';
    public color: string = 'black';
    constructor() {
        this.go()
    }
    private go() {
       console.log('go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string) {
        console.log(this.voice, ' ', voice);
        this.voice = voice;
    }
}

const cat1 = new Cat;
// выбивает ошибку ибо поле voice - protected - не доступно инстанцу
// console.log(cat1.voice);

// не выбивает ошибку - это поле public - оно видно всем
console.log(cat1.color);

// интересный случай до public метода setVoice дотянутся можем
// а значит и вызвать его можем
// но этот метод выводит поле voice не инстанца cat1 (лично у инстанца этого поля нет)
// а поле voice класса-ребенка Cat
cat1.setVoice('meow');

// да protected поле доступно ребенку-классу Cat, но только внутри класса Cat
// а не снаружи
// console.log(Cat.voice);

// а если объектов однотипных много или еще какая причина можно через интерфейс
// можно через elios

// описание объекта через интерфейс

// interface Man {
//     name: string,
//     age: number,
//     id: number | string
// }
//
// const Marta: Man = {
//     name: 'Marta',
//     age: 200,
//     id: '8855gjil'
// };
//
// // описание объекта через элиос
//
// type Man1 = {
//     name: string,
//     age: number,
//     id: number | string
// };
//
// const Stark: Man1 = {
//     name: 'Stark',
//     age: 200,
//     id: '8855gjil'
// };


// абстрактные классы

// Абстрактные классы ни во что не компилируются - то есть в файлике JS их тупо не будет
// (если настроено на ES6)

// Абстрактные классы нужны только на этапе разработки - дабы от них наследовать абстрактные методы
// вот как описывать классовые компоненты и их метод render - ии вернее они так расписаны
// внутри исходников реакта

// abstract class Component {
//     abstract render(): void
//     abstract info(): string
// }
//
// class AppComponent extends Component {
//     render(): void {
//         console.log('Component on render')
//     }
//
//     info(): string {
//         return 'This is info';
//     }
// }
//
// // абстрактные методы в классе-ребенке - это динамические методы созданные в классе-ребенке
//
// AppComponent.prototype.render();
// console.log(AppComponent.prototype.info());
