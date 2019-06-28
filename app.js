let money = 93000;
let income = "taxi";
let addExpenses = "FOOD,WATER,MEDICATION";
let deposit = true;
let mission = 1500000;
let period = 11;
let budgetDay = money / 30

console.log(typeof money, typeof income, typeof deposit);
console.log(income.length);
console.log("Период", period, "месяцев");
console.log("Цель заработать", mission, "рублей");

addExpenses = addExpenses.toLowerCase();
//addExpenses = addExpenses.split([, [, 3]]);
console.log(addExpenses.slice(0,4));
console.log(addExpenses.slice(5,10));
console.log(addExpenses.slice(11,21));
console.log(budgetDay, (money % 30));   

