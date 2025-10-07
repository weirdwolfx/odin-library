const addBookButton = document.querySelector('.add-book');
const popupModal = document.querySelector('.popup-modal');
const addBookForm = document.querySelector('.popup-modal > form');
const backdrop = document.querySelector('.backdrop');

addBookButton.addEventListener('click', () => {
    popupModal.classList.toggle('show'); 
    backdrop.classList.toggle('show');
    addBookForm.reset();
})