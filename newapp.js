function getMultNumber(num) {
   let mult = 1; 
   let a = 0;
    while (num) {
        a = num % 10;
        num = (num - a) / 10;
        mult *= a;
    }
    return mult;
}

let num = 266219;
num = getMultNumber(num);
console.log(num);   
console.log(num ** 3);
