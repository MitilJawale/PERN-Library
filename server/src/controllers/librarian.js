const { Book } = require('../../models');
const sequelize = require('sequelize');


// Add Book
exports.addBook = async (req, res) => {
  const {
    isbn,
    title,
    author,
    description,
    category,
    publisher,
    publicationDate,
    ratings,
    pageCount,
    coverImage,
  } = req.body;

  try {
    await Book.create({
      isbn,
      title,
      author,
      description,
      category,
      publisher,
      publication_date: publicationDate,
      ratings,
      page_count: pageCount,
      cover_image: coverImage,
    });

    return res.status(201).json({
      success: true,
      message: 'Book has been added!',
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};

// Get All Books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json({
      success: true,
      books,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};

// Update Book
exports.updateBook = async (req, res) => {
  const { title, author, description, page_count, isbn } = req.body;
  console.log(isbn);
  
  try {
    const [updatedRowsCount] = await Book.update(
      {
        title,
        author,
        description,
        page_count,
      },
      {
        where: {
          isbn,
        },
      }
    );

    if (updatedRowsCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Book not found!',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Book has been updated!',
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};

// Delete Book
exports.deleteBook = async (req, res) => {
  const { isbn } = req.params;

  try {
    const deletedBookCount = await Book.destroy({
      where: {
        isbn,
      },
    });

    if (deletedBookCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Book not found!',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Book has been deleted!',
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};

// Return Book (Update Availability)
exports.returnedBook = async (req, res) => {
  const { isbn } = req.params;

  try {
    const [updatedRowsCount] = await Book.update(
      {
        availability: true,
      },
      {
        where: {
          isbn,
        },
      }
    );

    if (updatedRowsCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Book not found!',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Book has been returned!',
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};












// const db = require("../db");

// exports.addBook = async (req, res) => {
//   const {
//     isbn,
//     title,
//     author,
//     description,
//     category,
//     publisher,
//     publicationDate,
//     ratings,
//     pageCount,
//     coverImage,
    
//   } = req.body;


//   try {
//     await db.query(
//       "INSERT INTO books(isbn, title, author, description, category, availability, publisher, publication_date, ratings, page_count, cover_image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
//       [
//         isbn,
//         title,
//         author,
//         description,
//         category,
//         true,
//         publisher,
//         publicationDate,
//         ratings,
//         pageCount,
//         coverImage,
//       ]
//     );

//     return res.status(201).json({
//       success: true,
//       message: "Book has been added!",
//     });
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).json({
//       error: err.message,
//     });
//   }
// };

// exports.getAllBooks = async (req, res) => {
//   try {
//     const { rows } = await db.query("SELECT * FROM Books;");

//     return res.status(200).json({
//       success: true,
//       users: rows,
//     });
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// exports.updateBook = async (req, res) => {
//   const { isbn, title, author, description, page_count } = req.body;

//   try {
//     await db.query(
//       "UPDATE Books SET title = $1, author = $2, description = $3, page_count = $4 WHERE ISBN = $5",
//       [title, author, description, page_count, isbn]
//     );

//     return res.status(201).json({
//       success: true,
//       message: "Book has been Updated!",
//     });
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).json({
//       error: err.message,
//     });
//   }
// };

// // delete book
// exports.deleteBook = async (req, res) => {
//   const { isbn } = req.params;

//   try {
//     await db.query("DELETE FROM user_ratings WHERE book_isbn = $1", [isbn]);
//     await db.query("DELETE FROM Books WHERE isbn = $1", [isbn]);

//     return res.status(201).json({
//       success: true,
//       message: "Book has been Deleted!",
//     });
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).json({
//       error: err.message,
//     });
//   }
// };

// exports.returnedBook = async (req, res) => {

//   const { isbn } = req.params;

//   try {
//     await db.query("UPDATE Books SET availability = $1 WHERE isbn = $2", [
//       true,
//       isbn,
//     ]);

//     return res.status(201).json({
//       success: true,
//       message: "Book has been Returned!",
//     });
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).json({
//       error: err.message,
//     });
//   }
// };




