document.addEventListener("DOMContentLoaded", () => {
    const carouselItems = document.querySelector("#carusell");
    const arrowLeft = document.querySelector("#arrorleftrectangle");
    const arrowRight = document.querySelector("#arrorrightrectangle");
  
    let currentIndex = 0;
    const slides = document.querySelectorAll(
      "#applerectangle, #ytrectangle, #spotifyrectangle"
    );
    const totalSlides = slides.length;
  
    const updateCarousel = () => {
      slides.forEach((slide, index) => {
        if (index === currentIndex) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
    };
  
    arrowLeft.addEventListener("click", () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
      updateCarousel();
    });
  
    arrowRight.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });
  
    updateCarousel();
  });


let startTime = Date.now();
 function updateTimer() {
    let elapsedTime = Date.now() - startTime;
    let seconds = Math.floor(elapsedTime / 1000);
    console.clear();
    console.log(`You have been sus for: ${seconds} seconds`);
}
setInterval(updateTimer, 1000);