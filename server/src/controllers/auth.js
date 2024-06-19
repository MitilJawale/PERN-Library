const { hash } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { SECRET } = require('../constants');
const { User } = require('../../models'); // Importing the User model
const sequelize = require('sequelize');

// Get Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['user_id', 'email'], // Specify which attributes to return
    });
    return res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};

// Register
exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await hash(password, 10);
    await User.create({
      email,
      password: hashedPassword,
      role: 'student',
    });

    return res.status(201).json({
      success: true,
      message: "You are registered! Let's get you some books!",
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};

// Login
exports.login = async (req, res) => {
  let user = req.user;

  let payload = {
    id: user.user_id,
    email: user.email,
    role: user.role,
  };

  try {
    const token = await sign(payload, SECRET);

    return res
      .status(200)
      .cookie('token', token, { httpOnly: true })
      .json({
        success: true,
        message: 'You are logged in now!',
      });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: err.message,
    });
  }
};

// Logout
exports.logout = async (req, res) => {
  try {
    return res
      .status(200)
      .clearCookie('token', { httpOnly: true })
      .json({
        success: true,
        message: 'Logged out successfully!',
      });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      err: err.message,
    });
  }
};



// const { hash } = require('bcryptjs');
// const db = require('../db');
// const {sign} = require('jsonwebtoken');
// const {SECRET} = require('../constants');


// exports.getUsers = async (req,res) => {
//   try {
//     const {rows} = await db.query('SELECT user_id, email FROM Users');
//     return res.status(200).json({
//       success: true,
//       users: rows,
//     })

//   } catch (err) {
//     console.error(err.message);
//   }
// };



// exports.register = async (req,res) => {
//   const {email, password, confirmPassword} = req.body;

//   try {
//     const hashedPassword = await hash(password,10);
//     await db.query('INSERT INTO Users(email, password, role) VALUES ($1, $2, $3)', [email, hashedPassword, 'student']);

//     return res.status(201).json({
//       success: true,
//       message: 'You are registered! Let\'s get you some books!',
//     });

    
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).json({
//       error: err.message,
//     });

//   }
// };




// exports.login = async (req,res) => {
//   // const {email, password, role} = req.body;
//   let user = req.user;

//   let payload = {
//     id: user.user_id,
//     email: user.email,
//     role: user.role,
//   }
//   // console.log(payload);

//   try {
//     const token = await sign(payload,SECRET);

//     return res.status(200).cookie('token', token, {httpOnly: true}).json({
//       success: true,
//       message: 'You are logged in now!',
//     });

    
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).json({
//       error: err.message,
//     });

//   }
// };


// exports.logout = async(req,res) => {
  
//   try {
//     return res
//       .status(200)
//       .clearCookie('token', {httpOnly: true})
//       .json({
//         success: true,
//         message: 'Logged out successfully!',
//       })
    
//   } catch (err) {
//     console.log(err.message)
//     return res.status(500).json({
//       err: err.message,
//     })
//   }
// }