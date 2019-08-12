const modalTrewTime = () => {
    const modalOffer = document.querySelector(".modal_offer"),
          allBtn = document.querySelectorAll("button");

    let count = 0;

    allBtn.forEach((elem) => {
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
        }
    }, 60000);

    window.addEventListener("scroll", () => {
        if (pageYOffset > 10500 && count === 0 ) {
            modalOffer.style.display = "block";
            count++;
        }
    });
};

export default modalTrewTime;