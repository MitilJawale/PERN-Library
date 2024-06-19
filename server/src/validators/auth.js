const { check } = require('express-validator');
const db = require('../db');
const { compare } = require('bcryptjs');



  
//password
const password = check('password')
  .isLength({ min: 6, max: 15 })
  .withMessage('Password has to be between 6 and 15 characters.')


// confirm password
const confirmPassword = check('confirmPassword')
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords does not match');
    }
    return true;
  });



//email
const email = check('email')
  .isEmail()
  .withMessage('Please provide a valid email.')


//check if email exists
const emailExists = check('email').custom(async (value) => {
  const { rows } = await db.query('SELECT * from users WHERE email = $1', [
    value,
  ])

  if (rows.length) {
    throw new Error('Email already exists.')
  }
})




//login validation
const loginFieldsCheck = check('email').custom(async (value, { req }) => {
  const user = await db.query('SELECT * from users WHERE email = $1', [value])


  if (!user.rows.length) {
    throw new Error('Email does not exist.')
  }

  // dont allow an empty role
  if(req.body.role == '') {
    throw new Error('Please select a role');
  }


  // role
  if(user.rows[0].role !== req.body.role.toLowerCase()) {
    throw new Error('Wrong Role');
  }

  // below compare method is imported from bcrypt lib to compare (password, hashedPassword)
  const validPassword = await compare(req.body.password, user.rows[0].password)
  
  if (!validPassword) {
    throw new Error('Wrong password')
  }

  req.user = user.rows[0]
})


module.exports = {
  registerValidation: [email, password, emailExists, confirmPassword],
  loginValidation: [loginFieldsCheck],
}
