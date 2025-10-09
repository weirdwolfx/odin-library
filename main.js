const addBookButton = document.querySelector('.add-book');
const popupModal = document.querySelector('.popup-modal');
const addBookForm = document.querySelector('.popup-modal > form');
const backdrop = document.querySelector('.backdrop');
const closePopupBtn = document.querySelector('.close-btn');
const submitBtn = document.querySelector('.submit-book-btn');

addBookButton.addEventListener('click', displayPopup);
closePopupBtn.addEventListener('click', displayPopup);
submitBtn.addEventListener('click', displayPopup);


function displayPopup() {
    addBookButton.toggleAttribute('disabled');
    popupModal.classList.toggle('show'); 
    backdrop.classList.toggle('show');
    addBookForm.reset();
}