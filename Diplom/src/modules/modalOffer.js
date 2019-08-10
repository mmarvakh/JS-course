const modalOffer = () => {
    const modalOffer = document.querySelector(".modal_offer"),
          closeBtn = modalOffer.querySelector("img"),
          mainTryBtn = document.querySelectorAll(".main-try");

    mainTryBtn.forEach((elem) => {
        elem.addEventListener("click", () => {
            modalOffer.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modalOffer.style.display = "none";
    });

    modalOffer.addEventListener("click", (event) => {
        let target = event.target;
            target = target.closest(".modal-content");

        if (!target) {
            modalOffer.style.display = "none";
        }
    });
};

export default modalOffer;