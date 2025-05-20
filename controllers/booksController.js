//book list in memory database
let books = [];
let idCounter = 1;

// add a book (POST/books)
function addBook(request, response) {
  const { title, author, read } = request.body;
  const book = { id: idCounter++, title, author, read };
  books.push(book);
  response.status(201).json(book);
}

//Get all books 
function getAllBooks(request, response) {
  response.json(books);
}

//Get a book by ID (GET /books/:id)
function getBookById(request, response) {
  const id = parseInt(request.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return response.status(404).json({ message: 'Book not found' });
  response.json(book);
}

//Edit a book (PUT /books/:id)
function updateBook(request, response) {
  const id = parseInt(request.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return response.status(404).json({ message: 'Book not found' });

  const { title, author, read } = request.body;
  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;
  if (read !== undefined) book.read = read;

  response.json(book);
}

//  Test PUT http://localhost:3000/books/1 with JSON body like:

// {
//   "title": "Updated Title",
//   "read": true
// }


// Delete book by ID (DELETE /books/:id)
function deleteBook(request, response) {
  const id = parseInt(request.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return response.status(404).json({ message: 'Book not found' });

  const deleted = books.splice(index, 1);
  response.json(deleted[0]);
}

// Export the functions
module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
};
