'use strict';

let money;
let income = "TAXI";
let addExpenses;
let deposit;
let mission = 1500000;
let period = 11;
let budgetDay = money / 30;
let array;

money = prompt("Ваш месячный доход?");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую:");
array = [addExpenses];
console.log(addExpenses);

deposit = confirm("Есть ли у вас депозит в банке?");

console.log(typeof money, typeof income, typeof deposit);

let costs_1 = 0;
let costs_2 = 0;
let price_1 = 0;
let price_2 = 0;

costs_1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
price_1 = prompt("Во сколько это обойдется?");
costs_2 = prompt("Какие ещё обязательные ежемесячные расходы у вас есть?");
price_2 = prompt("Во сколько это обойдется?");

let budgetMonth = money - price_1 - price_2;
console.log(budgetMonth);

console.log(Math.ceil(mission / budgetMonth));

budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);

if (budgetDay >= 800) {
    console.log("Высокий уровень дохода");
} else if (budgetDay >= 300 && budgetDay < 800) {
    console.log("Средний уровень дохода");
} else if (budgetDay >= 0 && budgetDay < 300) {
    console.log("Низкий уровень дохода");
} else if (budgetDay < 0) {
    console.log("Что-то пошло не так");
}


