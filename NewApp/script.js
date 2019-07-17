"use strict";

let date = new Date().getTime(),
    newYear = new Date("1 january 2020").getTime(),
    timeRemaining = ((newYear - date) / 1000),
    dateResult = Math.floor(((timeRemaining / 60) / 60) / 24);

let divBlock = document.createElement("div"),
    parent = document.body;

parent.appendChild(divBlock);
divBlock.style.fontSize = "20px";
divBlock.style.fontWeight = "bold";

function dateMessage () {
    let hours = new Date().getHours(),
        day = new Date().getDay(),
        time = new Date().toLocaleTimeString("en"),
        days = new Date();
    function getWeekDay(date) {
        let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        return days[day];
    }
    day = getWeekDay(days);

    if (hours < 12 && hours > 4) {
        hours = "утро";
    }
    if (hours < 18 && hours > 12) {
        hours = "день";
    }
    if (hours < 21 && hours > 18) {
        hours = "вечер";
    }
    if (hours < 24 && hours > 21 || hours < 4) {
        hours = "ночи";
    }
    divBlock.textContent = `Добрый(ое) ${hours},
                            Сегодня: ${day},
                            Текущее время: ${time}, 
                            До нового года осталось: ${dateResult} дней`;
}

dateMessage();