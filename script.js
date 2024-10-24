// Image SlideShow
let slideIndex = 0; // Start at the first slide
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.slideshow img');
  
  slides.forEach((slide, index) => {
    slide.style.display = (index === slideIndex) ? "block" : "none"; // Show the current slide
  });

  slideIndex = (slideIndex + 1) % slides.length; // Go to the next slide
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Project Cards SlideShow
let currentSlideIndex = {};

function initCarousel(carouselId) {
  currentSlideIndex[carouselId] = 0;
  showSlide(carouselId, 0);
}

function nextSlide(carouselId) {
  const slides = document.querySelectorAll(`#${carouselId} .project-card`);
  currentSlideIndex[carouselId] = (currentSlideIndex[carouselId] + 1) % slides.length;
  showSlide(carouselId, currentSlideIndex[carouselId]);
}

function prevSlide(carouselId) {
  const slides = document.querySelectorAll(`#${carouselId} .project-card`);
  currentSlideIndex[carouselId] = (currentSlideIndex[carouselId] - 1 + slides.length) % slides.length;
  showSlide(carouselId, currentSlideIndex[carouselId]);
}

function showSlide(carouselId, slideIndex) {
  const slides = document.querySelectorAll(`#${carouselId} .project-card`);
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
  });
}

// Initialize both carousels
document.addEventListener("DOMContentLoaded", function() {
  initCarousel('js-carousel');
  initCarousel('bug-carousel');
});
