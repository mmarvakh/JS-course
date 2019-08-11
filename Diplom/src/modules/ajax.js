const ajax = () => {
    const errorMessage = "Что-то пошло не так...",
          loadMessage = "Происходит загрузка...",
          successMessage = "Благодарим за осталвленную заявку, в скором времени мы свяжемся с Вами";
    
    const form = document.querySelectorAll("form"),
          statusMessage = document.createElement("div");
          statusMessage.style.cssText = "font-size: 2rem;";
          statusMessage.style.color = "black";

    const formInput = document.querySelectorAll("input"),
          formText = document.querySelectorAll("textarea");
          
    const clearInput = () => {
        formInput.forEach((elem) => {
            elem.value = "";
        });

        formText.forEach((elem) => {
            elem.value = "";
        });
    };
    
    form.forEach((elem) => {
        elem.addEventListener("submit", (event) => {
            event.preventDefault();
            elem.appendChild(statusMessage);
    
            statusMessage.textContent = loadMessage;
    
            const formData = new FormData(elem);
    
            let body = {};
    
            formData.forEach((value, key) => {
                body[key] = value;
            });
    
            const resolveMessage = () => {
                statusMessage.textContent = successMessage;
                clearInput();
                setTimeout(() => {
                    statusMessage.textContent = "";
                }, 3500)
            };
    
            const rejectMessage = () => {
                statusMessage.textContent = errorMessage;
                clearInput();
                setTimeout(() => {
                    statusMessage.textContent = "";
                }, 3500)
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

export default ajax;