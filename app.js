'use strict';
// Первое задание
let arr = [];

/*for (let i = 0; i < 7; i++) {
    arr.push(prompt("Введите любое многозначное число"));
    let str = arr[i];
    if (str[0] == 2 || str[0] == 4){
        console.log(arr[i]);
    } 
}
*/
// Второе задание
forNumb:
for (var i = 2; i <= 100; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
         continue forNumb;
        }
    }
    console.log(i + " - Делители этого числа: 1 и " + i);
  }

