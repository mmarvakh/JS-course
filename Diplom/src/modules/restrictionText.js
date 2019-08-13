const restrictionText = () => {
    const newsBlock = document.getElementById("twelve"),
          leftBlock = newsBlock.querySelector(".twelve-news-left"),
          rightBlock = newsBlock.querySelector(".twelve-news-right"),
          leftImg = leftBlock.querySelector("img"),
          rightImg = rightBlock.querySelector("img"),
          leftParagraph = leftBlock.querySelectorAll("p")[0],
          rightParagraph = rightBlock.querySelectorAll("p")[0],
          nextBtnLeft = leftBlock.querySelectorAll("p")[1],
          nextBtnRight = rightBlock.querySelectorAll("p")[1];

    const cloneParagraphLeft = leftParagraph.textContent,
          cloneParagraphRight = rightParagraph.textContent;
    
    leftParagraph.textContent = leftParagraph.textContent;
};

export default restrictionText;