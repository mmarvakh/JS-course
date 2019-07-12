"use strict";

let buttonStart = document.getElementById("start"),
    buttonCancel = document.getElementById("cancel");
    buttonCancel.style.visibility = "hidden";

let buttonPlus1 = document.getElementsByTagName("button")[0],
    buttonPlus2 = document.getElementsByTagName("button")[1];

let checkboxDeposit = document.querySelector("#deposit-check");

let additionalIncome = document.querySelectorAll(".additional_income-item");

let budgetDayValue = document.getElementsByClassName("budget_day-value")[0],
    budgetMonthValue = document.getElementsByClassName("budget_month-value")[0],
    expensesMonthValue = document.getElementsByClassName("expenses_month-value")[0],
    accumulatedMonthValue = document.getElementsByClassName("accumulated_month-value")[0],
    additionalIncomeValue = document.getElementsByClassName("additional_income-value")[0],
    additionalExpensesValue = document.getElementsByClassName("additional_expenses-value")[0],
    incomePeriodValue = document.getElementsByClassName("income_period-value")[0],
    targetMonthValue = document.getElementsByClassName("target_month-value")[0];


let salaryAmount = document.querySelector(".salary-amount"),
    expensesItems = document.querySelectorAll(".expenses-items"),
    additionalExpenses = document.querySelector(".additional_expenses-item"),
    targetAmount = document.querySelector(".target-amount"),
    inputRange = document.querySelector(".period-select"),
    incomeItems = document.querySelectorAll(".income-items"),
    incomeAmount = document.querySelector(".income-amount"),
    expensesAmount = document.querySelector(".expenses-amount"),
    incomeTitle = document.querySelectorAll(".income-title");

let checkInput = document.querySelectorAll("input");
checkInput.forEach(function (item) {
     item.addEventListener("input", function () {
        if (item.getAttribute("placeholder") === "Сумма") {
            item.value = item.value.replace(/[^0-9]/, "");
        }
        if (item.getAttribute("placeholder") === "Наименование" || item.getAttribute("placeholder") === "название") {
            item.value = item.value.replace(/[^А-я\s.,]/, "");
        }
    })
});

let appData = {
    income: {},
    itemIncome: 0,
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    targetMonth: 0,
    start: function () { 
        appData.budget = salaryAmount.value;
        appData.budget *= 1;
    
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();
        let blockInput = document.querySelectorAll("input");
        blockInput.forEach(function (item) {
            item.disabled = true;
        });
        buttonCancel.addEventListener("click", appData.reset);
        buttonStart.style.visibility = "hidden";
        buttonCancel.style.visibility = "visible";
    },

    showResult: function () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(",");
        additionalIncomeValue.value = this.addIncome.join(",");
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSavedMoney();
        inputRange.addEventListener("change", function () {
            if (salaryAmount.value > 0) {
                incomePeriodValue.value = this.calcSavedMoney();
            } else {
                incomePeriodValue.value = 0;
            }
        });
    },

    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus2);
            expensesItems = document.querySelectorAll(".expenses-items");
        if (expensesItems.length === 3) {
            buttonPlus2.style.display = "none";
        }
        cloneExpensesItem.querySelectorAll("input").forEach(function (item) {
            item.value = "";
            item.addEventListener("input", function () {
                if (item.getAttribute("placeholder") === "Сумма") {
                    item.value = item.value.replace(/[^0-9]/, "");
                    }
                if (item.getAttribute("placeholder") === "Наименование" || item.getAttribute("placeholder") === "название") {
                    item.value = item.value.replace(/[^А-я\s.,]/, "");
                }
            })
        });
    },

    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonPlus1);
            incomeItems = document.querySelectorAll(".income-items");
        if (incomeItems.length === 3) {
            buttonPlus1.style.display = "none";
        }
        cloneIncomeItem.querySelectorAll("input").forEach(function (item) {
            item.value = "";
            item.addEventListener("input", function () {
                if (item.getAttribute("placeholder") === "Сумма") {
                    item.value = item.value.replace(/[^0-9]/, "");
                    }
                if (item.getAttribute("placeholder") === "Наименование" || item.getAttribute("placeholder") === "название") {
                    item.value = item.value.replace(/[^А-я\s.,]/, "");
                }
            })
        });
    },

    getExpenses: function () {
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector(".expenses-title").value,
                cashExpenses = item.querySelector(".expenses-amount").value;
            if (itemExpenses !== "" && cashExpenses !== "") {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },

    reset: function () {
        let blockInput = document.querySelectorAll("input");
        blockInput.forEach(function (item) {
            item.value = "";
            item.disabled = false;
        });
        inputRange.value = 1;
        let change = document.querySelector(".period-amount");
        change.textContent = inputRange.value;
        buttonCancel.style.visibility = "hidden";
        buttonStart.style.visibility = "visible";
    },

    getIncome: function () {
        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector(".income-title").value,
                cashIncome = item.querySelector(".income-amount").value;
            if (itemIncome !== "" && cashIncome !== "") {
                appData.income[itemIncome] = cashIncome;
            }
        });
        
        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    },

    getBudget: function () {
        this.budgetMonth = (this.budget + this.incomeMonth) - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },

    getTargetMonth: function () {
        if (Math.floor(targetAmount.value / this.budgetMonth) > 0) {
            return Math.floor(targetAmount.value / this.budgetMonth);
        } else {
            return "Цель не будет достигнута";
        }
     },

     getStatusIncome: function () {
        if (this.budgetDay >= 800) {
            return("Высокий уровень дохода");
        } else if (this.budgetDay >= 300 && this.budgetDay < 800) {
            return("Средний уровень дохода");
        } else if (this.budgetDay >= 0 && this.budgetDay < 300) {
            return("Низкий уровень дохода");
        } else if (this.budgetDay < 0) {
            return("Что-то пошло не так");
        }
    },
    
    rangeChange: function () {
        let change = document.querySelector(".period-amount");
        change.textContent = inputRange.value;
    },

    getAddExpenses: function () {
        let addExpenses = additionalExpenses.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== "") {
                appData.addExpenses.push(item);
            }
        });
    },

    getAddIncome: function () {
        additionalIncome.forEach(function(item) {
            let itemValue = item.value.trim();
            if (item !== "") {
                appData.addIncome.push(itemValue);
            }
        });
    },

    getExpensesMonth: function () {
        for (let key in this.expenses) {
            this.expenses[key] *= 1;
            this.expensesMonth += this.expenses[key];
        }
    },

    getInfoDeposit: function () {
        if (this.deposit)
            this.percentDeposit = +prompt("Какой годовой процент?");
            while (isNaN(this.percentDeposit) || this.percentDeposit == "" || this.percentDeposit == null) {
                this.percentDeposit = +prompt("Какой годовой процент?");
            }
            this.moneyDeposit = +prompt("Какая сумма заложена?");
            while (isNaN(this.moneyDeposit) || this.moneyDeposit == "" || this.moneyDeposit == null) {
                this.moneyDeposit = +prompt("Какая сумма заложена?");
            }
    },

    calcSavedMoney: function () {
        return this.budgetMonth * inputRange.value;
    }, 
};

buttonStart.disabled = true;
salaryAmount.addEventListener("input", function () {
    if (salaryAmount.value.length > 0) {
        buttonStart.disabled = false;
    } else if (salaryAmount.value.length === 0){
        buttonStart.disabled = true;
    }
});

buttonStart.addEventListener("click", appData.start);
buttonPlus2.addEventListener("click", appData.addExpensesBlock);
buttonPlus1.addEventListener("click", appData.addIncomeBlock);
inputRange.addEventListener("mousemove", appData.rangeChange);










