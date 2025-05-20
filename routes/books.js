const express = require('express');
const router = express.Router();

// Import controller functions
const {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} = require('../controllers/booksController');


router.post('/', addBook);
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);



module.exports = router;
