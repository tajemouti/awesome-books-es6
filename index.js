import {
  bookTitle, bookAuthor, button, newBooks, navList, theDate, sections,
} from './modules/variables.js';
import Book from './modules/addRemoveBook.js';
import { DateTime } from './modules/luxon.js';

const shelf = new Book();
shelf.saveStorage();

button.addEventListener('click', (e) => {
  e.preventDefault();

  const title = bookTitle.value;
  const author = bookAuthor.value;

  if (!title || !author) return;
  const book = new Book(title, author);

  book.loadIntoStorage();
  book.saveStorage();
});

newBooks.addEventListener('click', (e) => {
  const remBtnId = e.target.getAttribute('id');
  shelf.removeBook(remBtnId);
});

navList.addEventListener('click', (e) => {
  const { main } = e.target.dataset;
  sections.forEach((link) => link.classList.remove('display'));
  document.querySelector(`.main${main}`).classList.add('display');
});

const now = DateTime.now();
theDate.textContent = now.toLocaleString(DateTime.DATETIME_MED);