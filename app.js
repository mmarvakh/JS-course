'use strict';

let week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let date = new Date();
date = date.getUTCDay();
console.log(date);
for (let i = 0; i < 7; i++) {
    if (i === date) {
        console.log(week[i].bold());
    } else if (i === 0 || i === 6) {
        console.log(week[i].italics());
    } else {
        console.log(week[i]);
    }
}