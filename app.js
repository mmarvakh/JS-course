'use strict';

// Первая часть
function getArgument(arg) {
    if (typeof arg !== "string") {
        return "На вход поступила не строка";
    } else {
        arg = arg.trim();
        return arg;
    }
}

let str = prompt("Введите строку или число");
if (str >= 0) {
    str *= 1;
} else {
    str = str;
}
console.log(getArgument(str));

// Вторая часть
function testArgument(testString) {
    if (testString.length > 30) {
        return testString = testString.substr(0, 31) + "...";
    } else {
        return testString;
    }
}
console.log(testArgument(str));
