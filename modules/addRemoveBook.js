const newBooks = document.getElementById('new-books');

export default class Book {
    bookList;

    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.getStorage();
    }

    getStorage() {
      this.bookList = JSON.parse(localStorage.getItem('booksDetails')) || [];
    }

    loadIntoStorage(node) {
      if (node) {
        localStorage.setItem('booksDetails', JSON.stringify(node));
        return;
      }
      this.getStorage();
      const book = { title: this.title, author: this.author };
      this.bookList.push(book);
      localStorage.setItem('booksDetails', JSON.stringify(this.bookList));
    }

    displayBooks() {
      newBooks.innerHTML = '';
      if (this.bookList === null) return;
      this.bookList.forEach((book, index) => {
        const shelf = `
        <div class="book">
          <p class="book-info">"${book.title}" by ${book.author}</p>
          <button id=${index} class="remove-btn">Remove</button>
        </div>
        `;

        newBooks.insertAdjacentHTML('beforeend', shelf);
      });
    }

    saveStorage() {
      this.getStorage();
      this.displayBooks();
    }

    removeBook(index) {
      this.getStorage();
      const filter = this.bookList.filter((book) => book !== this.bookList.at(index));
      this.loadIntoStorage(filter);
      this.saveStorage();
    }
}
