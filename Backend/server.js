require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/dbConnection');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3500;

connectDB();

// app.use('/' ,require('../src/'))
//
app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/register', require('./routes/register'));
app.use('/logout', require('./routes/logout'));
app.use('/createPost', require('./routes/blog/createPost'));

mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB');
  app.listen(PORT, () => console.log(`Server running on port${PORT}`));
});
