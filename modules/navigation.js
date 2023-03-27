// Single page execution

// Access the nav list
const bookListPage = document.getElementById('book-list-page');
const addBookPage = document.getElementById('add-book-page');
const contactPage = document.getElementById('contact-page');

// Access the sections to display or not
const booksList = document.getElementById('books-list');
const formGroup = document.getElementById('form-group');
const contactSection = document.getElementById('contact');

// Add event listeners
bookListPage.addEventListener('click', () => {
    formGroup.style.display = 'none';
    booksList.style.display = 'block';
    contactSection.style.display = 'none';
});

addBookPage.addEventListener('click', () => {
    formGroup.style.display = 'block';
    booksList.style.display = 'none';
    contactSection.style.display = 'none';
});

contactPage.addEventListener('click', () => {
    formGroup.style.display = 'none';
    booksList.style.display = 'none';
    contactSection.style.display = 'block';
});

window.addEventListener('load', () => {
    formGroup.style.display = 'none';
    booksList.style.display = 'block';
    contactSection.style.display = 'none';
});
