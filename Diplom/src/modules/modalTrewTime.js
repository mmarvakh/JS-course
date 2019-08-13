const modalTrewTime = () => {
    const modalOffer = document.querySelector(".modal_offer"),
          allBtn = document.querySelectorAll("button"),
          targetBlock = document.getElementById("map"),
          allLinks = document.querySelectorAll("a"),
          paragraphsBlock = document.getElementById("eleven"),
          allParagraphs = paragraphsBlock.querySelectorAll("p");

    let count = 0;

    allBtn.forEach((elem) => {
        elem.addEventListener("click", () => {
            count++;
        });
    });

    allParagraphs.forEach((elem) => {
        elem.addEventListener("click", () => {
            count++;
        });
    });

    allLinks.forEach((elem) => {
        elem.addEventListener("click", () => {
            count++;
        });
    });

    const modalPopup = () => {
        modalOffer.style.display = "block";
    };

    setTimeout(() => {
        if (count === 0) {
            modalPopup();
            count++;
        }
    }, 60000);

    window.addEventListener("scroll", () => {
        if (pageYOffset > 10000 && count === 0) {
            modalOffer.style.display = "block";
            count++;
        }
    });

    targetBlock.addEventListener("mouseenter", () => {
        if (count === 0) {
            modalOffer.style.display = "block";
            count++;
        }
    });
};

export default modalTrewTime;