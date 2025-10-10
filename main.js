const addBookButton = document.querySelector('.add-book');
const popupModal = document.querySelector('.popup-modal');
const addBookForm = document.querySelector('.popup-modal > form');
const backdrop = document.querySelector('.backdrop');
const closePopupBtn = document.querySelector('.close-btn');
const submitBtn = document.querySelector('.submit-book-btn');
const themeBtn = document.querySelector('.theme-btn > span')

addBookButton.addEventListener('click', displayPopup);
closePopupBtn.addEventListener('click', displayPopup);
submitBtn.addEventListener('click', displayPopup);
themeBtn.addEventListener('click', changeTheme);


// decide what the theme icon will look like when webpage is first loaded, based on user system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeBtn.textContent = 'dark_mode';
} else {
    themeBtn.textContent = 'light_mode';
}


// display add book form
function displayPopup() {
    addBookButton.toggleAttribute('disabled'); // disable the add book button
    popupModal.classList.toggle('show');  
    backdrop.classList.toggle('show'); // show the dark backdrop when popup is open
}


// toggle between light and dark themes
function changeTheme() {
    // if user preference is dark-theme, then default will be dark...so toggle light-theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.toggle('light-theme');
    } else {
        // if user preference is light-theme
        document.body.classList.toggle('dark-theme');
    }
    // change the theme icon
    themeBtn.textContent = (themeBtn.textContent == 'light_mode') ? 'dark_mode' : 'light_mode';
}