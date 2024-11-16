const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const user=require('./routes/user');
const book=require('./routes/books');

require('dotenv').config();

const connectionString = process.env.connectionString;
mongoose.connect(connectionString).then(() => {
    console.log("Connected");
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use('/',user);
  app.use('/',book);

  app.listen(3001, () => {
    console.log("Server started @ "+3001);
  });
});