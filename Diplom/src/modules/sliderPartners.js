const sliderPartners = () => {
    const partnersBlock = document.querySelector(".ten-partners"),
          slides = partnersBlock.querySelectorAll(".sl-slide"),
          arrowRight = document.getElementById("arrow-right"),
          arrowLeft = document.getElementById("arrow-left");
    
    let count = 0;

    if (document.documentElement.offsetWidth > 768) {
        const removePrevSlides = () => {
            slides.forEach((elem) => {
                if (count < 6) {
                    elem.style.display = "none"
                    count++;
                }
            });
    
            count = 0;
        }
        removePrevSlides();
    
        const addPrevSlides = () => {
            for (let i = 0; i < 6; i++) {
                slides[i].style.display = "block";
             };
        };
    
        const removeNextSlides = () => {
            for (let i = 6; i < slides.length; i++) {
                slides[i].style.display = "none";
             };
        };
    
        const addNextSlides = () => {
            for (let i = 6; i < slides.length; i++) {
               slides[i].style.display = "block";
            };
        };
    
        let count_1 = 0;
    
        const nextSlide = () => {
            slides[slides.length - 1 - count_1].style.display = "none";
            slides[slides.length - 7 - count_1].style.display = "block";
    
            count_1++;
    
            if (count_1 === 6) {
                count_1 = 0;

                removePrevSlides();
                addNextSlides();
            }
        };
        
        const prevSlide = () => {
           if (count_1 === 0) {
                addPrevSlides();
                removeNextSlides();
            }
    
            slides[count_1].style.display = "none";
            slides[slides.length - 6 + count_1].style.display = "block";
    
            count_1++;
    
            if (count_1 === 6) {
                count_1 = 0;
                count = 0;

                addPrevSlides();
                removePrevSlides();
            }
        };
    
        arrowRight.addEventListener("click", nextSlide);
        arrowLeft.addEventListener("click", prevSlide);
    } else if (document.documentElement.offsetWidth < 768) {
        const removePrevSlides = () => {
            slides.forEach((elem) => {
                if (count < 9) {
                    elem.style.display = "none"
                    count++;
                }
            });
    
            count = 0;
        }
        removePrevSlides();
    
        const addPrevSlides = () => {
            for (let i = 6; i < 9; i++) {
                slides[i].style.display = "block";
             };
        };
    
        const removeNextSlides = () => {
            for (let i = 9; i < slides.length; i++) {
                slides[i].style.display = "none";
             };
        };
    
        const addNextSlides = () => {
            for (let i = 9; i < slides.length; i++) {
               slides[i].style.display = "block";
            };
        };
    
        let count_1 = 0;
    
        const nextSlide = () => {

            count_1++;
    
            if (count_1 === 1) {
                removeNextSlides();
                addPrevSlides();
            } else {
                removePrevSlides();
                addNextSlides();
                count_1 = 0;
            }

        };
        
        const prevSlide = () => {
            count_1++;
    
            if (count_1  === 1) {
                removeNextSlides();
                addPrevSlides();
            } else {
                removePrevSlides();
                addNextSlides();
                count_1 = 0;
            }
        };
    
        arrowRight.addEventListener("click", nextSlide);
        arrowLeft.addEventListener("click", prevSlide);
    }
};

export default sliderPartners;