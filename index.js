import Library from "./modules/library.js";
import "./modules/navigation.js";

const library = new Library();
library.displayBooks();

document.getElementById("add-book-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const form = document.getElementById("books-form");
  const title = form.elements.title.value.trim();
  const author = form.elements.author.value.trim();
  if (title !== "" && author !== "") {
    library.addBook(title, author);
    library.displayBooks();
    form.reset();
  }
});

// Display current time
const currentTime = document.getElementById("time");
const now = new Date();
const date = now.toDateString();
const time = now.toLocaleTimeString();
currentTime.innerHTML = `${date} ${time}`;
