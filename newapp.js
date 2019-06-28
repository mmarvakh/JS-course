/*function getMultNumber(num) {
   let mult = 1; 
   let a = 0;
    while (num) {
        a = num % 10;
        num = (num - a) / 10;
        mult *= a;
    }
    return mult;
}*/

let num = 266219;
let a = 1;
while (num > 0) {
    a *= num % 10;
    num = (num - num % 10) / 10;
}
console.log(a);


a = a ** 3;
a = String(a);
console.log(a[0] + a[1]);

