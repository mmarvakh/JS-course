const scrollToNextPage = () => {
    const mainSection = document.getElementById("main"),
          secondSection = document.getElementById("menu"),
          thirdSection = document.getElementById("four"),
          fourthSection = document.getElementById("five"),
          fifthSection = document.getElementById("six"),
          sixthSection = document.getElementById("seven"),
          seventhSection = document.getElementById("eight"),
          eighthSection = document.getElementById("nine"),
          ninethSection = document.getElementById("ten"),
          tenthSection = document.getElementById("eleven"),
          eleventhSection = document.getElementById("twelve"),
          mapSection = document.getElementById("map");
    
    const smoothNext = () => {
        const buttonOne = mainSection.querySelectorAll("a"),
              buttonTwo = secondSection.querySelector("a"),
              buttonThree = thirdSection.querySelector("a"),
              buttonFour = fourthSection.querySelector("a"),
              buttonFive = fifthSection.querySelector("a"),
              buttonSix = sixthSection.querySelector("a"),
              buttonSeven = seventhSection.querySelector("a"),
              buttonEight = eighthSection.querySelector("a"),
              buttonNine = ninethSection.querySelectorAll("a")[2],
              buttonTen = tenthSection.querySelector("a"),
              buttonEleven = eleventhSection.querySelectorAll("a");

        // Переход на следующий слайд для каждой кнопки
        buttonOne.forEach((elem) => {
            if (elem.getAttribute("href") === "#menu") {
                elem.removeAttribute("href");
                elem.style.cursor = "pointer";
                elem.addEventListener("click", () => {
                    secondSection.scrollIntoView({behavior: "smooth"});
                });
            }
        });

        buttonTwo.removeAttribute("href");
        buttonTwo.style.cursor = "pointer";
        buttonTwo.addEventListener("click", () => {
            thirdSection.scrollIntoView({behavior: "smooth"});
        });

        buttonThree.removeAttribute("href");
        buttonThree.style.cursor = "pointer";
        buttonThree.addEventListener("click", () => {
            fourthSection.scrollIntoView({behavior: "smooth"});
        });

        buttonFour.removeAttribute("href");
        buttonFour.style.cursor = "pointer";
        buttonFour.addEventListener("click", () => {
            fifthSection.scrollIntoView({behavior: "smooth"});
        });

        buttonFive.removeAttribute("href");
        buttonFive.style.cursor = "pointer";
        buttonFive.addEventListener("click", () => {
            sixthSection.scrollIntoView({behavior: "smooth"});
        });

        buttonSix.removeAttribute("href");
        buttonSix.style.cursor = "pointer";
        buttonSix.addEventListener("click", () => {
            seventhSection.scrollIntoView({behavior: "smooth"});
        });

        buttonSeven.removeAttribute("href");
        buttonSeven.style.cursor = "pointer";
        buttonSeven.addEventListener("click", () => {
            eighthSection.scrollIntoView({behavior: "smooth"});
        });

        buttonEight.removeAttribute("href");
        buttonEight.style.cursor = "pointer";
        buttonEight.addEventListener("click", () => {
            ninethSection.scrollIntoView({behavior: "smooth"});
        });

        buttonNine.removeAttribute("href");
        buttonNine.style.cursor = "pointer";
        buttonNine.addEventListener("click", () => {
            tenthSection.scrollIntoView({behavior: "smooth"});
        });

        buttonTen.removeAttribute("href");
        buttonTen.style.cursor = "pointer";
        buttonTen.addEventListener("click", () => {
            eleventhSection.scrollIntoView({behavior: "smooth"});
        });

        buttonEleven.forEach((elem) => {
            if (elem.getAttribute("href") === "#map") {
                elem.removeAttribute("href");
                elem.style.cursor = "pointer";
                elem.addEventListener("click", () => {
                    mapSection.scrollIntoView({behavior: "smooth"});
                });
            }
        });
        
    };
    smoothNext();
};

export default scrollToNextPage;