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
    incomeTitle = document.querySelectorAll(".income-title"),
    depositBank = document.querySelector(".deposit-bank"),
    depositAmount = document.querySelector(".deposit-amount"),
    depositPercent = document.querySelector(".deposit-percent");

let checkInput = document.querySelectorAll("input");

checkInput.forEach((item) => {
     item.addEventListener("input", () => {
        if (item.getAttribute("placeholder") === "Сумма") {
            item.value = item.value.replace(/[^0-9]/, "");
        }
        if (item.getAttribute("placeholder") === "Наименование" || item.getAttribute("placeholder") === "название") {
            item.value = item.value.replace(/[^А-я\s.,]/, "");
        }
    })
});

class appData {
    constructor (income = {}, itemIncome = 0, incomeMonth = 0, addIncome = [], expenses = {}, addExpenses = [], deposit = false, percentDeposit = 0, moneyDeposit = 0, budget = 0, budgetDay = 0, budgetMonth = 0, expensesMonth = 0, targetMonth = 0) {
    this.income = income;
    this.itemIncome = itemIncome;
    this.incomeMonth = incomeMonth;
    this.addIncome = addIncome;
    this.expenses = expenses;
    this.addExpenses = addExpenses;
    this.deposit = deposit;
    this.percentDeposit = percentDeposit;
    this.moneyDeposit = moneyDeposit;
    this.budget = budget;
    this.budgetDay = budgetDay;
    this.budgetMonth = budgetMonth;
    this.expensesMonth = expensesMonth;
    this.targetMonth = targetMonth;
}
    start () { 
        this.budget = salaryAmount.value;
        this.budget *= 1;
    
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this,this.getAdd();
        this.getInfoDeposit();
        this.getBudget();

        this.showResult();

        let blockInput = document.querySelectorAll("input");
        blockInput.forEach(function (item) {
            item.disabled = true;
        });

        buttonCancel.addEventListener("click", this.reset);
        buttonStart.style.visibility = "hidden";
        buttonCancel.style.visibility = "visible";
    };

    showResult () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(",");
        additionalIncomeValue.value = this.addIncome.join(",");
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSavedMoney();
        inputRange.addEventListener("change", () => {
            if (salaryAmount.value > 0) {
                incomePeriodValue.value = this.calcSavedMoney();
            } else {
                incomePeriodValue.value = 0;
            }
        });
    };

    addBlock () {
         buttonPlus1.onclick = function () {
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
        } 
        buttonPlus2.onclick = function () {
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
                    if (item.getAttribute("placeholder") === "Наименование" || item.getAttribute("placeholder") === "название")         {
                        item.value = item.value.replace(/[^А-я\s.,]/, "");
                        }
                })
            });
        }
    };

    getExpenses () {
        expensesItems.forEach((item) => {
            let itemExpenses = item.querySelector(".expenses-title").value,
                  cashExpenses = item.querySelector(".expenses-amount").value;
            if (itemExpenses !== "" && cashExpenses !== "") {
                this.expenses[itemExpenses] = cashExpenses;
            }
        });
    };

    reset () {
        let blockInput = document.querySelectorAll("input");
        blockInput.forEach ((item) => {
            item.value = "";
            item.disabled = false;
        });

        let blockAddIncome = document.querySelectorAll(".income-items");

        if (blockAddIncome[1]) {
            blockAddIncome[1].style.display = "none";
        } 
        
        if (blockAddIncome[2]) {
            blockAddIncome[2].style.display = "none";
        }

        buttonPlus1.style.display = "inline-block";

        let blockAddExpenses = document.querySelectorAll(".expenses-items");

        if (blockAddExpenses[1]) {
            blockAddExpenses[1].style.display = "none";
        }

        if (blockAddExpenses[2]) {
            blockAddExpenses[2].style.display = "none";
        }    

        buttonPlus2.style.display = "inline-block";
        buttonStart.disabled = true;
        inputRange.value = 1;

        let resetSelect = document.querySelector("select"),
            change = document.querySelector(".period-amount");

        checkboxDeposit.checked = false;
        depositBank.style.display = "none";
        depositAmount.style.display = "none";
        resetSelect.selectedIndex = 0;
        change.textContent = inputRange.value;
        buttonCancel.style.visibility = "hidden";
        buttonStart.style.visibility = "visible";
    };

    getIncome () {
        incomeItems.forEach((item) => {
            let itemIncome = item.querySelector(".income-title").value,
                cashIncome = item.querySelector(".income-amount").value;
            if (itemIncome !== "" && cashIncome !== "") {
                this.income[itemIncome] = cashIncome;
            }
        });
        
        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    };

    getBudget () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + Math.floor((this.moneyDeposit * this.percentDeposit) / 12);
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    };

    getTargetMonth () {
        if (Math.floor(targetAmount.value / this.budgetMonth) > 0) {
            return Math.ceil(targetAmount.value / this.budgetMonth);
        } else {
            return "Цель не будет достигнута";
        }
     };

     getStatusIncome () {
        if (this.budgetDay >= 800) {
            return("Высокий уровень дохода");
        } else if (this.budgetDay >= 300 && this.budgetDay < 800) {
            return("Средний уровень дохода");
        } else if (this.budgetDay >= 0 && this.budgetDay < 300) {
            return("Низкий уровень дохода");
        } else if (this.budgetDay < 0) {
            return("Что-то пошло не так");
        }
    };
    
    rangeChange () {
        let change = document.querySelector(".period-amount");
        change.textContent = inputRange.value;
    };

    getAdd () {
        let addExpenses = additionalExpenses.value.split(',');
        addExpenses.forEach((item) => {
            item = item.trim();
            if (item !== "") {
                this.addExpenses.push(item);
            }
        });

        additionalIncome.forEach((item) => {
            let itemValue = item.value.trim();
            if (item !== "") {
                this.addIncome.push(itemValue);
            }
        });
    };

    getExpensesMonth () {
        for (let key in this.expenses) {
            this.expenses[key] *= 1;
            this.expensesMonth += this.expenses[key];
        }
    };

    getInfoDeposit () {
        if (this.deposit) {
            this.moneyDeposit = depositAmount.value;
            this.percentDeposit = depositPercent.value;
        }
    };

    calcSavedMoney () {
        return this.budgetMonth * inputRange.value;
    };

    allEventsListener () {
        buttonStart.disabled = true;
        salaryAmount.addEventListener("input", function () {
            if (salaryAmount.value.length > 0 || salaryAmount.value.length === "undefined") {
                buttonStart.disabled = false;
            } else if (salaryAmount.value.length === 0){
                buttonStart.disabled = true;
            }
        });

        checkboxDeposit.addEventListener("change", () => {
            if (checkboxDeposit.checked) {
                depositBank.style.display = "inline-block";
                depositAmount.style.display = "inline-block";
                getBudgetData.deposit = "true";
                depositBank.addEventListener("change", function () {
                    let selectedIndex = this.options[this.selectedIndex].value;
                    if (selectedIndex === "other") {
                        depositPercent.disabled = false;
                        depositPercent.style.display = "inline-block";
                        depositPercent.value = "";
                    } else {
                        depositPercent.style.display = "none";
                        depositPercent.value = selectedIndex;
                    }
                });
            } else {
                depositBank.style.display = "none";
                depositAmount.style.display = "none";
                depositAmount.value = "";
                getBudgetData.deposit = "false";
            }
        });
    };
};

let getBudgetData = new appData();

window.onload = function () {
    getBudgetData.allEventsListener();
}

buttonStart.addEventListener("click", getBudgetData.start.bind(getBudgetData));
buttonPlus1.addEventListener("mousemove", getBudgetData.addBlock);
buttonPlus2.addEventListener("mousemove", getBudgetData.addBlock);
inputRange.addEventListener("mousemove", getBudgetData.rangeChange);










