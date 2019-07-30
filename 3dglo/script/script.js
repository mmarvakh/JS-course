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
    countTimer("30 july 2019");

    // Menu
    const toggleMenu = () => {
        const menu = document.querySelector("menu"),
              menuItems = menu.querySelectorAll("ul>li"),
              bodyContainer = document.body;

        const handlerMenu = () => {
            menu.classList.toggle("active-menu");           
        ;}

        const handlerMenuExtra = () => {
            if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            } else {
                menu.style.transform = `translate(-100%)`;
            }
        };

        const checkHandler = () => {
            if (document.documentElement.offsetWidth < 768) {
                handlerMenuExtra();
            } else {
                handlerMenu();
            }
        }

        bodyContainer.addEventListener("click", (event) => {
            let targetMenuOpen = event.target,
                targetMenuSpace = event.target,
                targetMenuClose = event.target,
                target = event.target;

                targetMenuOpen = targetMenuOpen.closest(".menu");
                targetMenuClose = targetMenuClose.closest(".close-btn");
                targetMenuSpace = document.querySelector("menu");

            if (targetMenuOpen) {
                checkHandler();
            } else if (targetMenuClose) {
                checkHandler();
            } else if (targetMenuSpace !== target && menu.classList.contains("active-menu")) {
                checkHandler();
            }
        });

        // Плавный переход из меню к элементам
        menuItems.forEach((elem) => {
            let elemId = elem.querySelector("a");
                elemId.style.pointerEvents = "none";
                elem.style.cursor = "pointer";
            elem.addEventListener("click", () => {
                checkHandler();
                let elemIdHref = elemId.getAttribute("href").slice(1);
                let blockId = document.getElementById(`${elemIdHref}`);
                    blockId.scrollIntoView({behavior: "smooth"});
            });
        });
    }
    toggleMenu();

    // Popup window
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
    togglePopUp();

    // Tabs
    const tabs = () => {
        const tabHeader = document.querySelector(".service-header"),
              tab = tabHeader.querySelectorAll(".service-header-tab"),
              tabContent = document.querySelectorAll(".service-tab");
        
        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add("active");
                    tabContent[i].classList.remove("d-none");
                } else {
                    tab[i].classList.remove("active");
                    tabContent[i].classList.add("d-none");
                }
            }
        };

        tabHeader.addEventListener("click", (event) => {
            let target = event.target;
                target = target.closest(".service-header-tab");
                if (target) {
                    tab.forEach((item, i) => {
                        if (item === target) {
                            toggleTabContent(i);
                        }
                    });
                }
        });
    };
    tabs();

    // Slider
    const slider = () => {
        const slide = document.querySelectorAll(".portfolio-item"),
              portfolioDots = document.querySelector(".portfolio-dots"),
              slider = document.querySelector(".portfolio-content");

        let dotForSlider = document.createElement("li");
              dotForSlider.classList.add("dot");

        for (let i = 0; i < slide.length; i++) {
            dotForSlider = document.createElement("li");
            dotForSlider.classList.add("dot");
            if (i === 0) {
                dotForSlider.classList.add("dot-active");
            }
            portfolioDots.appendChild(dotForSlider);
        }

        const dot = document.querySelectorAll(".dot");

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, "portfolio-item-active");
            prevSlide(dot, currentSlide, "dot-active");

            currentSlide++;

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            nextSlide(slide, currentSlide, "portfolio-item-active");
            nextSlide(dot, currentSlide, "dot-active");
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener("click", (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches(".portfolio-btn, .dot")) {
                return;
            }

            prevSlide(slide, currentSlide, "portfolio-item-active");
            prevSlide(dot, currentSlide, "dot-active");

            if (target.matches("#arrow-right")) {
                currentSlide++;
            } else if (target.matches("#arrow-left")) {
                currentSlide--;
            } else if (target.matches(".dot")) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, "portfolio-item-active");
            nextSlide(dot, currentSlide, "dot-active");
        });

        slider.addEventListener("mouseover", (event) => {
            if (event.target.matches(".portfolio-btn") || event.target.matches(".dot")) {
                stopSlide();
            }
        });

        slider.addEventListener("mouseout", (event) => {
            if (event.target.matches(".portfolio-btn") || event.target.matches(".dot")) {
                startSlide();
            }
        });

        startSlide(2000);
    };
    slider();

    // Our team block
    const team = () => {
        const imagesTeam = document.querySelectorAll(".command__photo");

        const changeData = () => {
            imagesTeam.forEach((elem) => {
                let srcImg = elem.getAttribute("src");

                elem.addEventListener("mouseenter", (event) => {
                    event.target.src = event.target.dataset.img;
                });

                elem.addEventListener("mouseleave", (event) => {
                    event.target.src = srcImg;
                });
            });
        };
        changeData();
    };
    team();

    // Calculator
    const calc = (price = 100) => {
        const calcBlock = document.querySelector(".calc-block"),
              calcInput = calcBlock.querySelectorAll("input"),
              calcType = document.querySelector(".calc-type"),
              calcSquare = document.querySelector(".calc-square"),
              calcDay = document.querySelector(".calc-day"),
              calcCount = document.querySelector(".calc-count"),
              totalValue = document.getElementById("total");

        calcInput.forEach((elem) => {
            elem.addEventListener("input", () => {
                elem.value = elem.value.replace(/\D/g, "");
            });
        });

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                  squareValue = +calcSquare.value;
            
            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            let animate;
            let count = 0;

            const animateNumb = () => {
                animate = requestAnimationFrame(animateNumb);
                
                if (count <= total) {
                    totalValue.textContent = count;
                    count += 50;
                } else {
                    cancelAnimationFrame(animate);
                }
            };

            if (total > 0) {
                animate = requestAnimationFrame(animateNumb);
            }
        };

        calcBlock.addEventListener("change", (event) => {
            const target = event.target;

            if (target.matches("select") || target.matches("input")) {
                countSum();
            }
        });
    };
    calc(100);

    // send-ajax-form
    const sendForm = () => {
        const errorMessage = "Что-то пошло не так...",
              loadMessage = "Происходит загрузка...",
              successMessage = "Благодарим за осталвленную заявку, в скором времени мы свяжемся с Вами";
        
        const form = document.getElementById("form1"),
              statusMessage = document.createElement("div");
              statusMessage.style.cssText = "font-size: 2rem;";

        const formInput = form.querySelectorAll("input");
        
        formInput.forEach((elem) => {
            elem.addEventListener("input", () => {
                if (elem.getAttribute("id") === "form1-name") {
                    elem.value = elem.value.replace(/[A-z\.\?,0-9\-\+=!@#№\$%\^&\*~]/gi, "");
                }

                if (elem.getAttribute("id") === "form1-phone") {
                    elem.value = elem.value.replace(/[A-z-А-я,\-=!@#№\$%\^&\*\.\/<>\?\(\)~]/gi, "");
                }
            });
        });
              
        const clearInput = () => {
            formInput.forEach((elem) => {
                elem.value = "";
            });
        };
        
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);

            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);

            let body = {};

            formData.forEach((value, key) => {
                body[key] = value;
            });

            const resolveMessage = () => {
                statusMessage.textContent = successMessage;
                clearInput();
            };

            const rejectMessage = () => {
                statusMessage.textContent = errorMessage;
                clearInput();
            };

            postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error("status network not 200");
                        }
                        resolveMessage();
                    })
                    .catch(rejectMessage);
        });

        const postData = (body) => {
            return fetch("./server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
            });
        };
    };
    sendForm();

    // send-ajax-form-modal
    const sendFormModal = () => {
        const errorMessage = "Что-то пошло не так...",
              loadMessage = "Происходит загрузка...",
              successMessage = "Благодарим за осталвленную заявку, в скором времени мы свяжемся с Вами";
        
        const form = document.getElementById("form3"),
              statusMessage = document.createElement("div");
              statusMessage.style.cssText = "font-size: 2rem;";
              statusMessage.style.color = "white";

        const formInput = form.querySelectorAll("input");

        formInput.forEach((elem) => {
            elem.addEventListener("input", () => {
                if (elem.getAttribute("id") === "form3-name") {
                    elem.value = elem.value.replace(/[A-z\.\?,0-9\-\+=!@#№\$%\^&\*~]/gi, "");
                }

                if (elem.getAttribute("id") === "form3-phone") {
                    elem.value = elem.value.replace(/[A-z-А-я,\-=!@#№\$%\^&\*\.\/<>\?\(\)~]/gi, "");
                }
            });
        });

        const clearInput = () => {
            formInput.forEach((elem) => {
                elem.value = "";
            });
        };
        
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);

            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);

            let body = {};

            formData.forEach((value, key) => {
                body[key] = value;
            });

            const resolveMessage = () => {
                statusMessage.textContent = successMessage;
                clearInput();
            };

            const rejectMessage = () => {
                statusMessage.textContent = errorMessage;
                clearInput();
            };

            postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error("status network not 200");
                        }
                        resolveMessage();
                    })
                    .catch(rejectMessage);
        });

        const postData = (body) => {
            return fetch("./server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
            });
        };
    };
    sendFormModal();

    // send-ajax-form-footer
    const sendFormFooter = () => {
        const errorMessage = "Что-то пошло не так...",
              loadMessage = "Происходит загрузка...",
              successMessage = "Благодарим за осталвленную заявку, в скором времени мы свяжемся с Вами";
        
        const form = document.getElementById("form2"),
              statusMessage = document.createElement("div");
              statusMessage.style.cssText = "font-size: 2rem;";

        const formInput = form.querySelectorAll("input");

        formInput.forEach((elem) => {
            elem.addEventListener("input", () => {
                if (elem.getAttribute("id") === "form2-name") {
                    elem.value = elem.value.replace(/[A-z\.\?,0-9\-\+=!@#№\$%\^&\*~]/gi, "");
                }

                if (elem.getAttribute("id") === "form2-phone") {
                    elem.value = elem.value.replace(/[A-z-А-я,\-=!@#№\$%\^&\*\.\/<>\?\(\)~]/gi, "");
                }

                if (elem.getAttribute("id") === "form2-message") {
                    elem.value = elem.value.replace(/[A-z\.\?,0-9\-\+=!@#№\$%\^&\*\.\/<>\?\(\)~]/gi, "");
                }
                
            });
        });

        const clearInput = () => {
            formInput.forEach((elem) => {
                elem.value = "";
            });
        };
        
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);

            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);

            let body = {};

            formData.forEach((value, key) => {
                body[key] = value;
            });

            const resolveMessage = () => {
                statusMessage.textContent = successMessage;
                clearInput();
            };

            const rejectMessage = () => {
                statusMessage.textContent = errorMessage;
                clearInput();
            };

            postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error("status network not 200");
                        }
                        resolveMessage();
                    })
                    .catch(rejectMessage);
        });

        const postData = (body) => {
            return fetch("./server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
            });
        };
    };
    sendFormFooter();
});