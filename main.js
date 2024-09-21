"use strict";

// 1 zadanie

let price = Number(prompt('Введите цену товара'));
let money = Number(prompt('Введите ваши деньги'));

let neh = price - money;
let sd = money - price;


if (price < 0 || money < 0) {
    alert('Неверный формат')
}
else if (price == money) {
    alert('Покупка совершена');
} else if (price > money) {
    alert(`У вас нехватает ${neh}`)
} else if (price < money) {
    alert(`Ваша сдача ${sd}`)
}

// 2 zadanie

let a = prompt('Введите число');

if (a == 0) {
    alert(`0`);
} else if (a >= 1) {
    alert(`1`);
} else if (a < 0) {
    alert(`-1`);
}

// 3 zadanie

let c = Number(prompt('Введите первое число'));
let d = Number(prompt('Введите второе число'));

let result = (a + b < 4) ? 'Мало' : 'Много';

alert(result);

// 4 zadanie

let log = prompt("Роль");

let message = (log == "Сотрудник") ? "Салам" :
    (log == "Директор") ? "Приветствую" :
        (log == "") ? "Вас нет тут" : " "
alert(message);

// 5 zadanie

let logink = prompt("Напишите свой логин");

if (logink == "Админ") {
    let password = prompt("Пароль");
    if (password == "") {
        alert("Отмена");
    } else if (password == "Главный") {
        alert("Приветствую");
    } else {
        alert("Неверный пароль");
    }
} else {
    alert("Кто вы?")
}