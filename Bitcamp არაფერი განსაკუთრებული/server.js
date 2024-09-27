const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Dummy data to simulate a database
let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
];

app.use(bodyParser.json());

// Endpoint to get all books
app.get('/books', (req, res) => {
    res.json({ books });
});

// Endpoint to get a specific book by ID
app.get('/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(book => book.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

// Endpoint to create a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


console.log (x)
let x = 10 + 50;


console.log('ia');