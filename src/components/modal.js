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


