const closeConfirmBtn = document.querySelector('.btn-close-confirm');

// close confirmation modal when click on close button
const closeConfirmModal = () => {
    const modal = document.querySelector('.modal--confirm');
    modal.style.display = "none";
}

closeConfirmBtn.addEventListener('click', closeConfirmModal);