const express = require('express');
const app = express();
const { PORT, CLIENT_URL } = require('./constants')
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require('cors');


require('./middlewares/passport-middleware')


// middleware initialization
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: CLIENT_URL, credentials: true}));
app.use(passport.initialize());

const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/librarian');
const studentRoutes = require('./routes/student');

app.use('/api', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', studentRoutes);



//app start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The library is hosted at http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error(`Error: ${err.message}`)
  }
}

appStart()
module.exports = app;
