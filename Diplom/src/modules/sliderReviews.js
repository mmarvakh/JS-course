const sliderReviews = () => {
    const blockReviews = document.getElementById("ten"),
          slideReview = document.querySelectorAll(".sl2-slide"),
          arrowRight = document.getElementById("arrow-right-two"),
          arrowLeft = document.getElementById("arrow-left-two");

    const removeSlide = () => {
        for (let i = 0; i < slideReview.length; i++) {
            if (i > 0) {
                slideReview[i].style.display = "none"
            }
        };
    };
    removeSlide();
};

export default sliderReviews;