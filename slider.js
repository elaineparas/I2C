let currentIndex = 0;  // Initialize the currentIndex variable here

// Function to move the slide
function moveSlide(step) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for the buttons
document.querySelector('.prev').addEventListener('click', function() {
  moveSlide(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  moveSlide(1);
});
