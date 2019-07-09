"use strict";

let button = document.getElementById("#start");

let buttonPlus1 = document.getElementsByTagName("button")[0],
    buttonPlus2 = document.getElementsByTagName("button")[1];

let checkboxDeposit = document.querySelector("#deposit-check");

let additionalIncome = document.querySelectorAll(".additional_income-item");

let budgetDay = document.getElementsByClassName("budget_day-value")[0],
    budgetMonth = document.getElementsByClassName("budget_month-value")[0],
    expensesMonth = document.getElementsByClassName("expenses_month-value")[0],
    accumulatedMonth = document.getElementsByClassName("accumulated_month-value")[0],
    additionalIncomeValue = document.getElementsByClassName("additional_income-value")[0],
    additionalExpensesValue = document.getElementsByClassName("additional_expenses-value")[0],
    incomePeriod = document.getElementsByClassName("income_period-value")[0],
    targetMonth = document.getElementsByClassName("target_month-value")[0];


let salaryAmount = document.querySelector(".salary-amount"),
    incomeTitle = document.querySelector(".income-title"),
    incomeAmount = document.querySelector(".income-amount"),
    expensesTitle = document.querySelector(".expenses-title"),
    expensesAmount = document.querySelector(".expenses-amount"),
    additionalExpenses = document.querySelector(".additional_expenses-item"),
    target = document.querySelector(".target-amount"),
    inputRange = document.querySelector(".period-select");






