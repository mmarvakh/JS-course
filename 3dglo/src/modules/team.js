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

export default team;