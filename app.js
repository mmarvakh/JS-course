'use strict';

let money;
let income = "TAXI";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую:");
let deposit;
let mission = 150000;
let period = 11;
let budgetDay;

deposit = confirm("Есть ли у вас депозит в банке?");

let start = function() {   
    do {
        money = prompt("Ваш месячный доход?");
        console.log(money);
    } while (isNaN(money) || money == "" || money == null);
};
start();

/*let showTypeOf = function(item) {
    console.log(typeof item);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
*/

let costs_1;
let costs_2;

let expensesMonth = function() {
    let sum = 0;
    let check;

    for(let i = 0; i < 2; i++) {
        if (i === 0) {
            costs_1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
        } else if (i === 1) {        
            costs_2 = prompt("Какие ещё обязательные ежемесячные расходы у вас есть?");
        }
        check = +prompt("Во сколько это обойдется?");
        while (isNaN(check) || check == "" || check == null) {
            check = +prompt("Во сколько это обойдется?");
        }
        sum += check;
        check = 0;
    }
    return sum;
};
let expensesAmount = expensesMonth();

let accumulatedMonth = function (a) { // a - money
    return a - expensesAmount;
}

console.log("Накопления за период: " + accumulatedMonth(money));

function getTargetMonth(m, n) { // m - mission, n - accumulatedMonth
   if (Math.floor(m / n) > 0) {
        return "Цель будет достигнута за " + Math.floor(m / n) + " месяцев";
   } else {
       return "Цель не будет достигнута";
   }
}
console.log(getTargetMonth(mission, accumulatedMonth(money)));

budgetDay = Math.floor(accumulatedMonth(money) / 30);

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
