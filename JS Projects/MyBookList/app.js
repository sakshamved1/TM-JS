// Books class : reference of books
class Books {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class : Contains Ui functions
class UI {
    static displayBooks() {

        // const storedBooks = [
        //     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-0-7432-7356-5' },
        //     { title: '1984', author: 'George Orwell', isbn: '978-0-452-28423-4' },
        //     { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0-06-112008-4' }
        // ]

        const storedBooks = Store.getBook();

        storedBooks.forEach(b => UI.addBookToList(b));


    }

    static addBookToList(book) {

        const bookList = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href = '#' class = 'btn btn-danger delete'>X</a></td>
        `

        bookList.appendChild(row);




    }

    static removeBook(el) {

        // Check  If user clicking on Rmeove btn.
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearfields() {
        const title = document.getElementById('title').value = '';
        const author = document.getElementById('author').value = '';
        const isbn = document.getElementById('isbn').value = '';

    }

    static showAlerts(message, className) {

        const div = document.createElement('div');


        div.className = className;

        div.textContent = message;

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        setTimeout(() => {
            div.remove();
        }, 3000);









    }



}

// // Storage class : Local Storage
class Store {

    static getBook() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }



    static addBook(book) {
        const books = Store.getBook();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));


    }

    static removeBook(isbn) {
        const books = Store.getBook();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }

}


// Event Listners
document.addEventListener('DOMContentLoaded', () => UI.displayBooks());

// Book add
document.getElementById('book-form').addEventListener('submit', (e) => {

    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;


    if (title === '' || author === '' || isbn === '') {
        UI.showAlerts('Fill all fields', 'alert alert-danger');
        return;
    }

    // Create a instance of Book class
    const book = new Books(title, author, isbn);


    // pass the Book instance to add function
    UI.addBookToList(book);

    // Add book to local storage
    Store.addBook(book);

    // Show alert if book added/
    UI.showAlerts('Book added successfully', 'alert alert-success');

    // Clear fields
    UI.clearfields();

})

// Book remove
document.getElementById('book-list').addEventListener('click', (e) => {
    UI.removeBook(e.target);

    // Store.removeBook(e.target.parentElement.paren);

    // console.log(e.target.parentElement.previousSibling.textContent);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);




    
})