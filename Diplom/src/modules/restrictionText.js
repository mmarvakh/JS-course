const restrictionText = () => {
    const newsBlock = document.getElementById("twelve"),
          leftBlock = newsBlock.querySelector(".twelve-news-left"),
          rightBlock = newsBlock.querySelector(".twelve-news-right"),
          leftImg = leftBlock.querySelector("img"),
          rightImg = rightBlock.querySelector("img"),
          leftParagraph = leftBlock.querySelector("p"),
          rightParagraph = rightBlock.querySelector("p"),
          nextBtnLeft = newsBlock.querySelectorAll("a")[0],
          nextBtnRight = newsBlock.querySelectorAll("a")[1];

    const cloneParagraphLeft = leftParagraph.textContent,
          cloneParagraphRight = rightParagraph.textContent;
    
    leftParagraph.textContent = leftParagraph.textContent.slice(0, 55) + "...";
    rightParagraph.textContent = rightParagraph.textContent.slice(0, 55) + "...";

    let countLeft = 0,
        countRight = 0;

    nextBtnLeft.addEventListener("click", (event) => {
        event.preventDefault();

        if (countLeft === 0) {
            leftImg.style.display = "none";
            leftParagraph.textContent = cloneParagraphLeft;
            nextBtnLeft.textContent = "Свернуть";

            countLeft++;
        } else {
            nextBtnLeft.textContent = "читать далее";
            leftImg.style.display = "block";
            leftParagraph.textContent = cloneParagraphLeft.slice(0, 55) + "...";

            countLeft = 0;
        }
    });

    nextBtnRight.addEventListener("click", (event) => {
        event.preventDefault();

        if (countRight === 0) {
            rightImg.style.display = "none";
            rightParagraph.textContent = cloneParagraphRight;
            nextBtnRight.textContent = "Свернуть";

            countRight++;
        } else {
            nextBtnRight.textContent = "читать далее";
            rightImg.style.display = "block";
            rightParagraph.textContent = cloneParagraphRight.slice(0, 55) + "...";

            countRight = 0;
        }
    });
};

export default restrictionText;