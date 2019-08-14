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

    window.addEventListener("resize", () => {
        if (document.documentElement.offsetWidth < 768) {
            arrowsRight.forEach((elem) => {
                elem.style.marginLeft = "10%";
            })

            arrowsLeft.forEach((elem) => {
                elem.style.marginRight = "10%";
            })
        } else {
            arrowsRight.forEach((elem) => {
                elem.style.marginLeft = "30%";
            })

            arrowsLeft.forEach((elem) => {
                elem.style.marginRight = "30%";
            })
        }
    });

    let currentSlide = 0;

    const nextSlide = () => { 
        arraySlideReview[currentSlide].style.display = "none";

        currentSlide++;

        if (currentSlide === 3) {
            currentSlide = 0;
        }

        arraySlideReview[currentSlide].style.opacity = 0;
        arraySlideReview[currentSlide].style.display = "block";
        arraySlideReview[currentSlide].classList.add("d-active");
    };

    const prevSlide = () => {
        arraySlideReview[currentSlide].style.display = "none";

        currentSlide--;

        if (currentSlide === -1) {
            currentSlide = 2;
        }

        arraySlideReview[currentSlide].style.opacity = 0;
        arraySlideReview[currentSlide].style.display = "block";
        arraySlideReview[currentSlide].classList.add("d-active");
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