'use strict';

let dateNull = function (a, b) { // a - day, b - month
    b += 1;

    if (a > 0 && a < 10) {
        a = "0" + a;
    }
    if (b > 0 && b < 10) {
        b = "0" + b;
    }
    return a + "." + b;
}

let date = new Date();

document.write(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + dateNull(date.getDate(), date.getMonth()) + "." + date.getFullYear());

