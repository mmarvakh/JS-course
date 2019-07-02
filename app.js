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
console.log(array);

deposit = confirm("Есть ли у вас депозит в банке?");

let showTypeOf = function(item) {
    console.log(typeof item);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let costs_1 = 0;
let costs_2 = 0;
let price_1 = 0;
let price_2 = 0;

costs_1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
price_1 = prompt("Во сколько это обойдется?");
costs_2 = prompt("Какие ещё обязательные ежемесячные расходы у вас есть?");
price_2 = prompt("Во сколько это обойдется?");

function getExpensesMonth(cost1, cost2) {
    return cost1 + cost2;
}

function getAccumulatedMonth(a, b, c) { // a - money, b - price_1, c - price_2
    return a - b - c;
}

let accumulatedMonth = getAccumulatedMonth(money, price_1, price_2);
console.log(accumulatedMonth);

function getTargetMonth(m, n) { // m - mission, n - accumulatedMonth
    return Math.floor(m / n);
}
console.log(getTargetMonth(mission, accumulatedMonth));

budgetDay = Math.floor(accumulatedMonth / 30);
console.log(budgetDay);

function getStatusIncome() {

    if (budgetDay >= 800) {
        return("Высокий уровень дохода");
    } else if (budgetDay >= 300 && budgetDay < 800) {
        return("Средний уровень дохода");
    } else if (budgetDay >= 0 && budgetDay < 300) {
        return("Низкий уровень дохода");
    } else if (budgetDay < 0) {
        return("Что-то пошло не так");
    }
}
console.log(getStatusIncome());
