function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.getElementById("first-name").value = "Jean";
document.getElementById("last-name").value = "Dupont";
document.getElementById("email").value = "jean.dupont@example.com";
document.getElementById("birthdate").value = "1990-01-01";
document.getElementById("tournament-number").value = "2";
document.getElementById("location3").checked = true;
document.getElementById("checkbox2").checked = true;

// DOM Elements
const modalSignUp = document.querySelector(".modal--signUp");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseIcon = document.querySelectorAll('.modal__icon--close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalSignUp.style.display = "block";
}

//close modal when click on close modal icon
const closeModal =  (event) => {
  const parentModal = event.target.closest('.modal');
  if (parentModal) {
    parentModal.style.display = "none";
  }
}

// event listener on modal close icon
modalCloseIcon.forEach((icon) => icon.addEventListener("click", closeModal));


