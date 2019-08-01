const sendForm = () => {
    const errorMessage = "Что-то пошло не так...",
          loadMessage = "Происходит загрузка...",
          successMessage = "Благодарим за осталвленную заявку, в скором времени мы свяжемся с Вами";
    
    const form = document.querySelectorAll("form"),
          statusMessage = document.createElement("div");
          statusMessage.style.cssText = "font-size: 2rem;";

    const formInput = document.querySelectorAll("input"); 
    console.log(formInput);
    formInput.forEach((elem) => {
        elem.addEventListener("input", () => {
            if (elem.getAttribute("id") === "form1-name" || elem.getAttribute("id") === "form2-name" || elem.getAttribute("id") === "form3-name") {
                elem.value = elem.value.replace(/[A-z\.\?,0-9\-\+=!@#№\$%\^&\*\.\/<>\?\(\)~`;:\(\)\/"]/gi, "");
            }

            if (elem.getAttribute("id") === "form1-phone" || elem.getAttribute("id") === "form2-phone" || elem.getAttribute("id") === "form3-phone") {
                elem.value = elem.value.replace(/[A-z-А-я,\-=!@#№\$%\^&\*\.\/<>\?\(\)~`;:\(\)\/"]/gi, "");
            }

            if (elem.getAttribute("id") === "form2-message") {
                elem.value = elem.value.replace(/[A-z\.\?,0-9\-\+=!@#№\$%\^&\*\.\/<>\?\(\)~`;:\(\)\/"]/gi, "");
            }
        });
    });
          
    const clearInput = () => {
        formInput.forEach((elem) => {
            elem.value = "";
        });
    };
    
    form.forEach((elem) => {
        elem.addEventListener("submit", (event) => {
            event.preventDefault();
            elem.appendChild(statusMessage);
    
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

export default sendForm;