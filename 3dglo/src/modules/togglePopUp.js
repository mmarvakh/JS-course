const togglePopUp = () => {
    const popup = document.querySelector(".popup"),
          popupBtn = document.querySelectorAll(".popup-btn"),
          popupClose = document.querySelector(".popup-close"),
          linkInMain = document.querySelector("a");

    popup.style.transform = `translateY(-100%)`;

    let count = 0,
        animate;

    const animationUp = () => {
        animate = requestAnimationFrame(animationUp);
        count += 2;
        if (count <= 100) {
            popup.style.transform = `translateY(${100 - count}%)`;
        } else {
            cancelAnimationFrame(animate);
            count = 0;
        }
    };
    const animationDown = () => {
        animate = requestAnimationFrame(animationDown);
        count += 2;
        if (count <= 100) {
            popup.style.transform = `translateY(${count}%)`;
        } else {
            cancelAnimationFrame(animate);
            popup.style.transform = `translateY(-100%)`;
            popup.style.display = "none";
        }
        
    };

    popupBtn.forEach((elem) => {
        elem.addEventListener("click", () => {
            if (document.documentElement.offsetWidth < 500) {
                popup.style.display = "block";
                popup.style.transform = `translateY(0)`;
            } else {
                popup.style.display = "block";
                animate = requestAnimationFrame(animationUp);
            }
        });
    });

    popupClose.addEventListener("click", () => {
        if (document.documentElement.offsetWidth < 500) {
            popup.style.display = "none";
            popup.style.transform = `translateY(-100%)`;
        } else {
            animate = requestAnimationFrame(animationDown);
        }
    });

    popup.addEventListener("click", (event) => {
        let target = event.target;
            target = target.closest(".popup-content");
        if (!target) {
            animate = requestAnimationFrame(animationDown);
        }
    });

    // Плавный переход на следующий блок при нажатии на кнопку в main
    linkInMain.removeAttribute("href");
    linkInMain.style.cursor = "pointer";
    linkInMain.addEventListener("click", () => {
        document.querySelector("#service-block").scrollIntoView({behavior: "smooth"});
    });
};

export default togglePopUp;