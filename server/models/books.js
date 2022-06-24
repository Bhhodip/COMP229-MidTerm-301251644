/*
File Name - books.js
Student Name - Bhhodip patel
Student ID - 301251644
Date - 24-6-2022
*/


let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Price: String,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('book', Book);
