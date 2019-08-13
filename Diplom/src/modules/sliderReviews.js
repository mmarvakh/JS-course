const sliderReviews = () => {
    const blockReviews = document.getElementById("ten"),
          slideReview = document.querySelectorAll(".sl2-slide"),
          arrowsRight = document.querySelectorAll(".arrow-right-two"),
          arrowsLeft = document.querySelectorAll(".arrow-left-two");

    const arraySlideReview = [...slideReview];

    const removeSlide = () => {
        for (let i = 0; i < arraySlideReview.length; i++) {
            if (i > 0) {
                arraySlideReview[i].style.display = "none"
            }
        };
    };
    removeSlide();

    let currentSlide = 0;

    const nextSlide = () => { 
        arraySlideReview[currentSlide].style.display = "none";

        currentSlide++;

        if (currentSlide === 3) {
            currentSlide = 0;
        }

        arraySlideReview[currentSlide].style.display = "block";
    };

    const prevSlide = () => {
        arraySlideReview[currentSlide].style.display = "none";

        currentSlide--;

        if (currentSlide === -1) {
            currentSlide = 2;
        }

        arraySlideReview[currentSlide].style.display = "block";
    };

    arrowsRight.forEach((elem) => {
        elem.addEventListener("click", () => {
            nextSlide();
        });
    });

    arrowsLeft.forEach((elem) => {
        elem.addEventListener("click", () => {
            prevSlide();
        });
    });
};

export default sliderReviews;