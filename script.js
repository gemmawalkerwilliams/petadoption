var myButton = document.getElementById("my-button");
myButton.addEventListener("click", function() {
    alert("Please call or email about our pets - 01245 789789 or pets@adoption.com");
});

// Get the modal
var modal = document.getElementById("myModal");

// Get all images in the gallery
var images = document.querySelectorAll(".gallery-container img");

// Get the modal image and caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through each image and attach a click event listener
images.forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

