const modalSupport = () => {
    const modalSupport = document.querySelector(".modal_support"),
          supportBtn = document.querySelector(".main-support"),
          closeBtn = modalSupport.querySelector("img");

    if (document.documentElement.offsetWidth < 768) {
        supportBtn.style.transform = "translateX(0)";
    }
    let count = 0;

    supportBtn.addEventListener("click", () => {
        count++;

        if (document.documentElement.offsetWidth < 768 && count === 1) {
            supportBtn.style.transform = "translateX(-60%)";
        } else if (count === 2 || document.documentElement.offsetWidth > 768) {
            modalSupport.style.display = "block";
            supportBtn.style.transform = "translateX(0)";
            count = 0;
        }
    });

    closeBtn.addEventListener("click", () => {
        modalSupport.style.display = "none";
        supportBtn.style.transform = "translateX(0)";
    });

    modalSupport.addEventListener("click", (event) => {
        let target = event.target;
            target = target.closest(".modal-content");

        if (!target) {
            modalSupport.style.display = "none";
            supportBtn.style.transform = "translateX(0)";
        }
    });
};

export default modalSupport;