const calculator = () => {
    const totalPrice = document.getElementById("total-price"),
          mainBlock = document.querySelector(".trololo"),
          mainSelect = mainBlock.querySelector("select"),
          mainInputs = mainBlock.querySelectorAll("input");

    const priceOne = 1000,
          priceTwo = 1900,
          priceThree = 2700,
          priceFive = 4500,
          priceSeven = 6000,
          priceTen = 8000,
          priceMoreTen = 10000;

    const resultSum = () => {
        const selectValue = mainSelect.options[mainSelect.selectedIndex].value;
        
        let inputValue = 0,
            total = 0;
        
        for (let i = 0; i < mainInputs.length; i++) {
            if (mainInputs[i].checked) {
                inputValue = +mainInputs[i].value;
            }
        };

        if (selectValue === "1") {
            total = priceOne * inputValue;
        } else if (selectValue === "2") {
            total = priceTwo * inputValue;
        } else if (selectValue === "3") {
            total = priceThree * inputValue;
        } else if (selectValue === "5") {
            total = priceFive * inputValue;
        } else if (selectValue === "7") {
            total = priceSeven * inputValue;
        } else if (selectValue === "10") {
            total = priceTen * inputValue;
        } else if (selectValue === "more") {
            total = priceMoreTen * inputValue;
        }

        if (inputValue === 12) {
            total *= 0.9;
        }

        totalPrice.textContent = total;
    };

    mainBlock.addEventListener("change", (event) => {
        const target = event.target;

        if (target.matches("select") || target.matches("input")) {
            resultSum();
        }
    });
};

export default calculator;