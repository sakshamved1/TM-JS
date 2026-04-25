// Class Book : Referencing Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    // method for displaying the book
    static displayBook(book) {                                                                             
        const books = store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
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


    static clearFields() {
        const title = document.getElementById('title').value = '';
        const author = document.getElementById('author').value = '';
        const isbn = document.getElementById('isbn').value = '';
    }

    static removeBook(book) {

        if (book.classList.contains('delete')) {
            book.parentElement.parentElement.remove();

        }
    }

    static showAlert(message, className) {

        const div = document.createElement('div');
        div.className = className;

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);


        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);

    }




}

// Store class : Handles storage
class store {
    static getBooks() {
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
        const books = store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {

        const books = store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));
    }
}


// Display Books
document.addEventListener('DOMContentLoaded', (e) => UI.displayBook());


document.getElementById('book-form').addEventListener('submit', (e) => {

    e.preventDefault();

    // Fetched values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validation
    if (title === '' || author === '' || isbn === '') {
        // alert('Please fill all the fields');
        UI.showAlert('Please fill the fields', 'alert alert-danger');
        return;
    };

    // instantiate new Book object
    const book = new Book(title, author, isbn);


    console.log(book);

    // added book to UI
    UI.addBookToList(book);

    // Add book to localStorage
    store.addBook(book);

    // show Success message
    UI.showAlert('Book added', 'alert alert-success');

    UI.clearFields();
})

document.getElementById('book-list').addEventListener('click', (e) => {
    // Remove book from UI
    UI.removeBook(e.target);

    // remove book from Store
    // console.log(store.removeBook(e.target.parentElement.previousElementSibiling.textContent));
    // store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    


    UI.showAlert('Book removed', 'alert-success');

})
