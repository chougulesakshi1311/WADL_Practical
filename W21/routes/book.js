const express = require('express');
const router = express.Router();
const bookController = require('../controller/book');

router.post('/add', bookController.addBook);
router.get('/', bookController.getBooks);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;