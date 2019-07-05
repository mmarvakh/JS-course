'use strict';

let week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let date = new Date();
date = date.getUTCDay();

for (let i = 0; i < 7; i++) {
    if (i === date) {
        week[i] = week[i].bold();
    } else if (i === 0 || i === 6) {
        week[i] = week[i].italics();
    } else {
        week[i] = week[i];
    }
}

document.writeln(week.join(", <br>"));
