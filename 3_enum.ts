// enum позволяет нам описать структуру и
// достукиваться до значений ее полей

// Создают для однотипных компонентов

enum Membership {
 Simple,
 Standart,
 Premium
}

// достучаться до значения
const memb = Membership.Standart;

// достучаться до ключа - enumReverse
const membReverse = Membership[2];
console.log(memb);
console.log(membReverse);

// в значение можно класть что-нибудь
enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM;
console.log(social);

/**
до значения поля enum стучишься как в объекте JS <имя Enum>.<имя поля>
до ключа enum стучишься как в массиве JS <имя Enum>.[<индекс поля>]
 Забавно
 **/


// enum позволяет лучше структурировать ваш код если есть много однотипных элементов
// и у него есть два типа записи

// первый тип записи enum

// Зачем нужен enum? Он нужен в Graph QL - для схем и для экшионов в mobX


