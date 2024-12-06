// JavaScript for handling the hover interaction on images

const slides = document.querySelectorAll('.slide');  // Get all the slides
let currentIndex = 0;

function changeImageOnHover() {
  slides.forEach((slide, index) => {
    // Detect hover on each slide
    slide.addEventListener('mouseenter', () => {
      currentIndex = index;  // Set the current index to the hovered image
      updateSlider();
    });
  });
}

function updateSlider() {
  const slider = document.querySelector('.slider');
  const offset = -currentIndex * 100; // Calculate the offset for the current slide
  slider.style.transform = `translateX(${offset}%)`;  // Move the slider to the current slide
}

// Initialize the hover interaction
changeImageOnHover();
