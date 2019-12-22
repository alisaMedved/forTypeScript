// Гварды - это некоторые вспомгательные конструкции в TS которые также позволяют нам работать с типами

// Гварды - это вспомогательные конструкции для более удобной работы с типами

// Например функция-гвард, которая в зависимости от типа аргумента выполняет разный алгоритм

function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim()
}

console.log(strip('  meow '));
console.log(strip(8));

// Функция-гвард, которая в зависимости от конструктора инстанца-аргумента выполняет разный алгоритм

class MyResponse {
    header = 'response header';
    result = 'response result';
}
class MyError{
    header = 'error header';
    message = 'error message';
}

function hanle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

const errorT = new MyError;
const resp = new MyResponse;

console.log(hanle(errorT));
console.log(hanle(resp));

// функция-гвард, которая в зависимости от значения выполняет разный алгоритм

// вот здесь элиос не по типам а по значениям

type AlertType = 'sucsess' | 'danger' | 'warning';

function setAlertType(type: AlertType) {
    //
}
setAlertType('sucsess');
setAlertType('danger');

// // выбрасывает ошибку
// setAlertType('default');
