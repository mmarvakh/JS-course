const modalSupport = () => {
    const modalSupport = document.querySelector(".modal_support"),
          supportBtn = document.querySelector(".main-support"),
          closeBtn = modalSupport.querySelector("img");

    supportBtn.addEventListener("click", () => {
        modalSupport.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modalSupport.style.display = "none";
    });

    modalSupport.addEventListener("click", (event) => {
        let target = event.target;
            target = target.closest(".modal-content");

        if (!target) {
            modalSupport.style.display = "none";
        }
    });
    
};

export default modalSupport;