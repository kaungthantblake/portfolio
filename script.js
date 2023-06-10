// Get the modal element
var modal = document.getElementById("myModal");

// Get the close button element
var closeBtn = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];
var images = document.getElementsByClassName("img");
var popupImage = document.getElementById("popupImage");

function openModal(imageSrc) {
  modal.style.display = "block";
  popupImage.src = imageSrc;
  
}

function closeModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    var imageSrc = this.src;
    openModal(imageSrc);
  });
}

// pointer

document.addEventListener('mousemove', function(event) {
    var tracker = document.getElementById('cursor-tracker');
    tracker.style.left = event.clientX + 'px';
    tracker.style.top = event.clientY + 'px';
  });
  