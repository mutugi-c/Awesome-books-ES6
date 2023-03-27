// Single page execution

// Access the nav list
const bookListPage = document.getElementById('book-list-page');
const addBookPage = document.getElementById('add-book-page');
const contactPage = document.getElementById('contact-page');

// Access the sections to display or not
const booksList = document.getElementById('books-list');
const formGroup = document.getElementById('form-group');
const contactSection = document.getElementById('contact');


const displayBooksList = () => {
    formGroup.style.display = 'none';
    booksList.style.display = 'block';
    contactSection.style.display = 'none';
};

const displayForm = () => {
    formGroup.style.display = 'block';
    booksList.style.display = 'none';
    contactSection.style.display = 'none';
};

const displayContact = () => {
    formGroup.style.display = 'none';
    booksList.style.display = 'none';
    contactSection.style.display = 'block';
};


bookListPage.addEventListener('click', displayBooksList);
addBookPage.addEventListener('click', displayForm);
contactPage.addEventListener('click', displayContact);

window.addEventListener('load', displayBooksList);