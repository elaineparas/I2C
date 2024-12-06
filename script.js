// Get the modal
var modal = document.getElementById("modal");

// Get the images and insert them into the modal
var images = document.querySelectorAll(".clickable-image");
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");

// Add event listeners to images
images.forEach(image => {
  image.addEventListener("click", function() {
    modal.style.display = "block";  // Show the modal
    modalImg.src = this.src;        // Set the clicked image source to the modal image
    captionText.innerHTML = this.alt; // Optionally set a caption (if you use alt text)
  });
});

// Get the <span> element to close the modal
var span = document.getElementById("close");

// Close the modal when the <span> is clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
