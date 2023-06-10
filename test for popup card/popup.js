// Get the modal element
var modal = document.getElementById("myModal");

// Get the close button element
var closeBtn = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener to open the modal when a specific element is clicked
document.getElementById("openModalBtn").addEventListener("click", openModal);

// Event listener to close the modal when the close button is clicked
closeBtn.addEventListener("click", closeModal);
