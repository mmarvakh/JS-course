window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    // Timer
    const countTimer = (deadLine) => {
        let timerHours = document.querySelector("#timer-hours"),
            timerMinutes = document.querySelector("#timer-minutes"),
            timerSeconds = document.querySelector("#timer-seconds");

        const getTimeRemaining = () =>  {
            let dateStop = new Date(deadLine).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
                return {timeRemaining, hours, minutes, seconds};
        }
        
        const updateClock = () => {
            let timer = getTimeRemaining();

            if (timer.hours < 10) {
                timer.hours = "0" + timer.hours;
            }
            if (timer.minutes < 10) {
                timer.minutes = "0" + timer.minutes;
            }
            if (timer.seconds < 10) {
                timer.seconds = "0" + timer.seconds;
            }

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if (timer.timeRemaining > 0) {
                setInterval(updateClock, 1000);
            }

            if (timer.timeRemaining <= 0) {
                timerHours.textContent = "00";
                timerMinutes.textContent = "00";
                timerSeconds.textContent = "00";
            }
        }
        updateClock();
    }
    countTimer("20 july 2019");

    // Menu
    const toggleMunu = () => {
        const btnMenu = document.querySelector(".menu"),
              menu = document.querySelector("menu"),
              closeBtn = document.querySelector(".close-btn"),
              menuItems = menu.querySelectorAll("ul>li");

        const handlerMenu = () => {
           menu.classList.toggle("active-menu");
        }

        btnMenu.addEventListener("click", handlerMenu);
        closeBtn.addEventListener("click", handlerMenu);

        menuItems.forEach((elem) => {
            elem.addEventListener("click", handlerMenu);
        });
    }
    toggleMunu();

    // Popup window
    const togglePopUp = () => {
        const popup = document.querySelector(".popup"),
              popupBtn = document.querySelectorAll(".popup-btn"),
              popupClose = document.querySelector(".popup-close");

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
    };
    togglePopUp();
});
