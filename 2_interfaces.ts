// interface Rect {
//     readonly id: string
//     color?: string
//     size: {
//         width: number
//         height: number
//     }
// }
//
// const rect1: Rect = {
//     id: '123',
//     size: {
//         width: 12,
//         height: 78,
//     }
// };
//
// rect1.color = '#ccc';
//
// // жесткая привязка к константе типа через ключевое слова as
// const rect2 = {} as Rect;
//
// // интерфейс для объекта
// const rect3 = <Rect>{};
//
// // наследование интерфейсов
//
// interface RectWithArea extends Rect {
//     getArea: () => number
// }
// const rect6: RectWithArea = {
//     id: '123',
//     size: {
//         width: 12,
//         height: 78,
//     },
//     getArea(): number {
//         return this.size.width * this.size.height
//     }
// };
//
// // интерфейсы для классов
//
// interface IClock {
//     time: Date
//     setTime(date: Date): void
// }
//
// class Clock implements IClock {
//     time: Date = new Date()
//     setTime(date: Date): void {
//        this.time = date
//     }
// }
//
// // указание типа всем полям и значениям интерфейса
// interface Styles {
//     [key: string]: string
// }
//
// const css: Styles = {
//     border: '1px solid black',
//     marginTop: '2px'
// };



// интерфейс - это тип для классов и объектов
interface Detention {
    icimd: string,
    businesName?: string,
    name: string
}

interface Term {
    code: string,
    name: string
}

interface Organization {
    icimd: string,
    businesName?: string,
    name: string,
    detention: Array<Detention>,
    termTypes: Array<Term>
}

const MyLab: Organization = {
    icimd: '67876-ytrdd77',
    name: 'LIS',
    detention: [
        {
            icimd: '778966-hgdswe',
            name: 'HIS'
        }
    ],
    termTypes: [
        {
            code: 'materials',
            name: 'материалы'
        }
    ]
}


type Frai = number | boolean;
const ggg: [number, string] = [777, 'hj'];

interface Rect {
    readonly id: string,
    color?: string,
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    }
}

rect1.color = '#ccc';
// выкидывает ошибку так как readonly поле
// rect1.id = '6785';

// жесткая привязка к типу - даже если объект по своим полям вообще не подходит к этому типу
// Не знаю зачем это - по мне так это просто хак какой-то жесткий

// не жалуется что у него нет обязательных полей id, size
const rect3 = {} as Rect;
const rect4 = <Rect>{};

// выкидывпет ошибку отстутствия обязательных полей
// const rect5: Rect = {};

const mas: Array<number> = [1, 56];

////////////////////////////

// Наследование интерфейсов - это чтобы лишний раз длинную протянку не писать
// при создании нового интерфейса - а просто добавить к существующему пару новфх своитсв

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect6: RectWithArea = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    getArea(): number {
        return this.sixe.width * this.size.height;
    }
};

function GetMyNameLength(name: string): number {
    return name.length;
}

// Теперь про интерфейсы - как про типы для классов

// заметка частенько интерфейсы для классов называют через ILogin  и т.д. все через I

interface IComponent {
    state: {
        count: number,
    },
    setCount(): void,
    // мы не знаем какой тип у функции возвращающий JSX
    render: () => any
}

class TableStandart implements IComponent {
    state: {
       count: 78
    }
    setCount(): void {
        this.state.count = 78;
    }
    render(): any {
        return 89;
    }
}

const tableNew = new TableStandart;
console.log(tableNew);
console.log(tableNew.render());



// есть подобие tuple для объектов

interface Styles {
[key: string]: string | number
}

const css: Styles = {
    border: '1px',
    margin: 10,
};
