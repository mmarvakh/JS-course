const validation = () => {
    const formInput = document.querySelectorAll("form>input");

    formInput.forEach((elem) => {
        elem.addEventListener("input", () => {
            if (elem.getAttribute("name") === "user_name") {
                elem.value = elem.value.replace(/[A-z\.\?,0-9\-\+=!@#№\$%\^&\*\.\/<>\?\(\)~`;:\(\)\/"']/gi, "");
            }
            if (elem.getAttribute("name") === "user_email") {
                elem.value = elem.value.replace(/[А-я]/gi, "");
            }
        });
    });
};

export default validation;