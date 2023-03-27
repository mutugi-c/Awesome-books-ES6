import Book from './books.js';

class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('bookLibrary')) || [];
  }

  addBook = (title, author) => {
    const book = new Book(title, author);
    this.books.push(book);
    localStorage.setItem('bookLibrary', JSON.stringify(this.books));
  }

  removeBook = (index) => {
    this.books.splice(index, 1);
    localStorage.setItem('bookLibrary', JSON.stringify(this.books));
  }

  displayBooks = () => {
    const table = document.getElementById('books-table');
    table.innerHTML = '';
    table.innerHTML = this.books
      .map(
        (book, index) =>
          `<tr><td>'${book.title}' by ${book.author}</td><td><button data-index='${index}'>Remove</button></td></td></tr>`
      )
      .join('');
    this.setRemoveButtonListeners();
  }

  setRemoveButtonListeners = () => {
    const removeButtons = document.querySelectorAll('#books-table button');
    removeButtons.forEach((button) => {
      const { index } = button.dataset;

      button.addEventListener('click', () => {
        this.removeBook(index);
        this.displayBooks(); // added to update the displayed books after removing one
      });
    });
  }
}

export default Library;
