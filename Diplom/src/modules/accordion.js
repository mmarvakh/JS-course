const accordion = () => {
    const accordionBlock = document.querySelector(".js-ui-accordion"),
          accordionDivBlocks = accordionBlock.querySelectorAll("div"),
          accordionParagraphs = accordionBlock.querySelectorAll("p");

    const arrayForBlocks = [...accordionDivBlocks],
          arrayForParagraphs = [...accordionParagraphs] ;
          
    const hideBlock = () => {
        arrayForBlocks.forEach((elem) => {
            elem.classList.add("d-none");
        });
    };

    arrayForParagraphs.forEach((elem) => {
        elem.addEventListener("click", () => {
            const indexOfElem = arrayForParagraphs.indexOf(elem);
            console.log(arrayForBlocks[indexOfElem]);
        });
    });
          
};

export default accordion;