// Get all the image elements in the collage
const images = document.querySelectorAll('.clickable-image');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

// When an image is clicked, show the modal with the clicked image
images.forEach((image) => {
  image.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.textContent = this.alt; // Set caption as the alt text
  });
});

// Close the modal when the user clicks the close button
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close the modal if the user clicks outside the image
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
