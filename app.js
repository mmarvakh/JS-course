'use strict';

let money,
    cost,
    check,
    array = [],
    str = [],
    sum = 0,
    start = function () {   
    do {
        money = +prompt("Ваш месячный доход?");
    } while (isNaN(money) || money == "" || money == null);
};
start();

let appData = {
    income: {},
    itemIncome: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
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

    asking: function () {
        
        if (confirm("Есть ли у вас дополнительный источник заработка?")) {
            appData.itemIncome = prompt("Какой у вас есть дополнительный заработок?");
            while (appData.itemIncome == "" || appData.itemIncome == null) {
                appData.itemIncome = prompt("Какой у вас есть дополнительный заработок?");
            }
            appData.itemIncome = appData.itemIncome[0].toUpperCase() + appData.itemIncome.slice(1);

            let cashIncome = +prompt("Сколько вы на этом зарабатываете?");
            while (isNaN(cashIncome) || cashIncome == "" || cashIncome == null) {
                cashIncome = +prompt("Сколько вы на этом зарабатываете?");
            }
            appData[appData.itemIncome] = cashIncome;
        }

        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую:");
            appData.addExpenses = addExpenses.split(", ");

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

    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },

    getInfoDeposit: function () {
        if (appData.deposit)
            appData.percentDeposit = +prompt("Какой годовой процент?");
            while (isNaN(appData.percentDeposit) || appData.percentDeposit == "" || appData.percentDeposit == null) {
                appData.percentDeposit = +prompt("Какой годовой процент?");
            }
            appData.moneyDeposit = +prompt("Какая сумма заложена?");
            while (isNaN(appData.moneyDeposit) || appData.moneyDeposit == "" || appData.moneyDeposit == null) {
                appData.moneyDeposit = +prompt("Какая сумма заложена?");
            }
    },

    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

console.log("Расходы за месяц: " + appData.expensesMonth);

appData.targetMonth = appData.getTargetMonth(appData.mission, appData.budgetMonth);

console.log(appData.targetMonth);

console.log(appData.getStatusIncome());

for (let key in appData) {
    array.push(key + " - " + appData[key]);
}

let arrForExpenses = [];

for (let i = 0; i < appData.addExpenses.length; i++) {
    let upperText = appData.addExpenses[i][0].toUpperCase() + appData.addExpenses[i].slice(1);
    arrForExpenses.push(upperText);
}

arrForExpenses.push(appData.itemIncome);

console.log("Возможные доходы и расходы:\n" + arrForExpenses.join(", "));

console.log("Наша программа включает в себя данные:\n" + array.join(", \n"));
