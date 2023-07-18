import {
  bookTitle, bookAuthor, button, newBooks, navList, theDate, today, sections,
} from './modules/variables.js';
import Book from './modules/addRemoveBook.js';

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

theDate.textContent = today.toUTCString();