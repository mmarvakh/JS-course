'use strict';

let money,
    cost,
    check,
    array = [],
    sum = 0,
    start = function() {   
    do {
        money = +prompt("Ваш месячный доход?");
    } while (isNaN(money) || money == "" || money == null);
};
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 11,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    targetMonth: 0,
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);

        return appData.budgetMonth;
    },

    getTargetMonth: function (m, n) { // m - mission, n - accumulatedMonth
        if (Math.floor(m / n) > 0) {
             return "Цель будет достигнута за " + Math.floor(m / n) + " месяцев";
        } else {
            return "Цель не будет достигнута";
        }
     },

     getStatusIncome: function () {
        if (appData.budgetDay >= 800) {
            return("Высокий уровень дохода");
        } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
            return("Средний уровень дохода");
        } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
            return("Низкий уровень дохода");
        } else if (appData.budgetDay < 0) {
            return("Что-то пошло не так");
        }
    },

    asking: function() {
        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую:");
            appData.addExpenses = addExpenses.toLowerCase().split(",");
            appData.deposit = confirm("Есть ли у вас депозит в банке?");
            
            for(let i = 0; i < 2; i++) {
                if (i === 0) {
                    cost = prompt("Какие обязательные ежемесячные расходы у вас есть?");
                    while (cost == "" || cost == null) {
                        cost = prompt("Какие обязательные ежемесячные расходы у вас есть?");
                    }
                    check = +prompt("Во сколько это обойдется?");
                    while (isNaN(check) || check == "" || check == null) {
                        check = +prompt("Во сколько это обойдется?");
                    }
                } else if (i === 1) {        
                    cost = prompt("Какие ещё обязательные ежемесячные расходы у вас есть?");
                    while (cost == "" || cost == null) {
                        cost = prompt("Какие обязательные ежемесячные расходы у вас есть?");
                    }
                    check = +prompt("Во сколько это обойдется?");
                    while (isNaN(check) || check == "" || check == null) {
                        check = +prompt("Во сколько это обойдется?");
                    }
                }
                appData.expenses[cost] = check;
            }
    },

    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            sum += appData.expenses[key];
        }
        return sum;
    },
};

appData.asking();

appData.expensesMonth = appData.getExpensesMonth();

console.log("Расходы за месяц: " + appData.expensesMonth);

appData.targetMonth = appData.getTargetMonth(appData.mission, appData.getBudget());

console.log(appData.targetMonth);

console.log(appData.getStatusIncome());

for (let key in appData) {
    array.push(key);
}

console.log("Наша программа включает в себя данные:\n" + array.join(", \n"));
