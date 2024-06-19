const { Book, User, UserRating } = require('../../models');
const sequelize = require('sequelize');

// Issue Book
exports.issuedBook = async (req, res) => {
  const { isbn } = req.params;
  const { borrowed_by, borrowed_at } = req.body;

  try {
    const book = await Book.findByPk(isbn);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found!',
      });
    }

    book.availability = false;
    book.borrowed_by = borrowed_by;
    book.borrowed_at = borrowed_at;

    await book.save();

    return res.status(201).json({
      success: true,
      message: 'Book has been issued!',
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};


// Get All Authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Book.findAll({
      attributes: [[sequelize.fn('DISTINCT', sequelize.col('author')), 'author']],
    });

    return res.status(200).json({
      success: true,
      users: authors,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};

// Get User ID by Email
exports.getUserId = async (req, res) => {
  const { userMail } = req.params;

  try {
    const user = await User.findOne({
      where: {
        email: userMail,
      },
      attributes: ['user_id'],
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found!',
      });
    }

    return res.status(200).json({
      success: true,
      user_id: user.user_id,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};

// Rate Book
exports.rateBook = async (req, res) => {
  const { user_id, isbn, ratings } = req.body;

  try {
    await UserRating.create({
      u_id: user_id,
      book_isbn: isbn,
      ratings,
    });

    const result = await UserRating.findOne({
      attributes: [[sequelize.fn('AVG', sequelize.col('ratings')), 'average_ratings']],
      where: {
        book_isbn: isbn,
      },
      // group: ['book_isbn'],
      raw: true,
    });

    const avg = Math.round(result.average_ratings);
    const book = await Book.findByPk(isbn);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found!',
      });
    }

    book.ratings = avg;
    await book.save();

    return res.status(201).json({
      success: true,
      message: 'Book has been rated!',
      average_rating: avg,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};

// Get All User Ratings
exports.getAllUserRatings = async (req, res) => {
  const { user_id } = req.params;

  try {
    const userRatings = await UserRating.findAll({
      where: {
        u_id: user_id,
      },
    });

    return res.status(200).json({
      success: true,
      user_ratings: userRatings,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};









// const db = require("../db");




// exports.issuedBook = async (req, res) => {
//   const {isbn} = req.params;
//   const { borrowed_by, borrowed_at } = req.body;

//   try {

//     await db.query(
//       "UPDATE Books SET Availability = $1, borrowed_by = $2, borrowed_at = $3 WHERE ISBN = $4",
//       [false, borrowed_by, borrowed_at, isbn]
//     );

//     return res.status(201).json({
//       success: true,
//       message: "Book has been Issued!",
//     });
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).json({
//       error: err.message,
//     });
//   }
// };



// exports.getAllAuthors = async (req, res) => {
//   try {
//     const { rows } = await db.query("SELECT DISTINCT Author FROM Books");

//     return res.status(200).json({
//       success: true,
//       users: rows,
//     });
//   } catch (err) {
//     console.error(err.message);
//   }
// };    

// exports.getUserId = async (req, res) => {
//   try {
//     const {userMail} = req.params;
//     const {rows} = await db.query("SELECT user_id FROM users WHERE email = $1",[userMail]);

//     return res.status(200).json({
//       success: true,
//       users: rows,
//     });
//   } catch (err) {
//     console.error(err.message);
//   }
// };



// exports.rateBook = async (req, res) => {

//   // const { user_id, isbn, ratings } = req.params;
//   const { user_id, isbn, ratings } = req.body;

//   try {

//     await db.query(
//       "INSERT INTO user_ratings(u_id, book_isbn, ratings) VALUES($1, $2, $3)",
//       [user_id, isbn, ratings]
//     );
    
//     let result = await db.query("SELECT AVG(ratings) as average_ratings from user_ratings GROUP BY book_isbn HAVING book_isbn = $1", [isbn]);
//     let avg = parseInt(result.rows[0].average_ratings);

//     await db.query(
//       "UPDATE Books SET ratings = $1 WHERE isbn = $2",
//       [avg, isbn]
//     );

//     return res.status(201).json({
//       success: true,
//       message: "Book has been Rated!",
//     });
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).json({
//       error: err.message,
//     });
//   }
// };



// exports.getAllUserRatings = async (req, res) => {
//   const {user_id} = req.params;
  
//   try {
    
//     const {rows} = await db.query("SELECT * FROM user_ratings WHERE u_id = $1",[user_id]);

//     return res.status(200).json({
//       success: true,
//       users: rows,
//     });
//   } catch (err) {
//     console.error(err.message);
//   }
// };