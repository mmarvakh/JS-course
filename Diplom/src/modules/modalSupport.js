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
    
};

export default modalSupport;