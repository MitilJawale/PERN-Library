const {Router} = require('express');
const { bookValidation } = require('../validators/book');
const {addBook, getAllBooks, updateBook, deleteBook, returnedBook} = require('../controllers/librarian');

const router = Router();

router.post('/dashboard', bookValidation, addBook);
router.get('/dashboard', getAllBooks );
router.put('/dashboard', updateBook );
router.delete('/dashboard/:isbn', deleteBook );
router.put('/dashboard/:isbn', returnedBook );

module.exports = router;