const accordion = () => {
    const accordionBlock = document.querySelector(".js-ui-accordion"),
          accordionDivBlocks = accordionBlock.querySelectorAll("div>.eleven-answer"),
          accordionParagraphs = accordionBlock.querySelectorAll("p");

    const arrayForBlocks = [...accordionDivBlocks],
          arrayForParagraphs = [...accordionParagraphs];
          
    const hideBlock = () => {
        arrayForBlocks.forEach((elem) => {
            if (!elem.parentNode.matches(".d-none")) {
                elem.parentNode.classList.add("d-none");
            }
        });
    };

    arrayForParagraphs.forEach((elem) => {
        elem.addEventListener("click", () => {
            hideBlock();

            const indexOfElem = arrayForParagraphs.indexOf(elem);

            arrayForBlocks[indexOfElem].classList.remove("d-none");
            arrayForBlocks[indexOfElem].parentNode.classList.remove("d-none");
            arrayForBlocks[indexOfElem].classList.add("d-active");
        });
    });
          
};

export default accordion;