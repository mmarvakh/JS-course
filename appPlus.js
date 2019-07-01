'use strict';

// Первое задание
let lang;
lang = prompt("Введите язык: 'ru' или 'en'");

if (lang === "ru") {
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
} else {
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

switch (lang) {
    case "ru":
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break;
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

let array = [["Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"],
             ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]];

console.log((lang === "ru") ? (array[0][0]) : (array[1][0]));



// Второе задание
let namePerson = prompt("Введите имя:");
console.log(namePerson === "Артем" ? "Директор" :
            namePerson === "Максим" ? "Преподаватель" :
            "Студент");





