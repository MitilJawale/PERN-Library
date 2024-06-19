const { check } = require('express-validator');
const db = require('../db');




  
// isbn
const isbn = check('isbn')
  .isLength({ min: 2})
  .withMessage('ISBN has to be 13 digits long.')






//check if isbn exists
const isbnExists = check('isbn').custom(async (value) => {
  const { rows } = await db.query('SELECT * from books WHERE isbn = $1', [
    value,
  ])

  if (rows.length) {
    throw new Error('ISBN already exists.')
  }
})



//check if book exists
// TODO: check for lowercase and upper case edge cases.
const bookExists = check('title').custom(async (value) => {
  const { rows } = await db.query('SELECT * from books WHERE title = $1', [
    value,
  ])

  if (rows.length) {
    throw new Error('Book with same title exists.')
  }
})





module.exports = {
  bookValidation: [isbn, isbnExists, bookExists],
}
