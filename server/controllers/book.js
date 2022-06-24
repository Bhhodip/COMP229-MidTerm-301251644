/*
File Name - book.js
Student Name - Bhhodip patel
Student ID - 301251644
Date - 24-6-2022
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let book = require('../models/books');


module.exports.booklist=(req, res, next) => {
    // find all books in the books collection
    book.find( (err, books) => {
      if (err) 
      {
        return console.error(err);
      }
      else
       {
        res.render('books/index', {
          title: 'Books',
          books: books
        });
      }
    
    })};

module.exports.displaybook=(req, res, next) => {
  res.render('books/details', {title: 'Add Book' })};



module.exports.addbook=(req, res, next) => {

  let newbooks = book({
    "Title": req.body.Title,
    "Price": req.body.Price,
    "Author": req.body.Author,
    "Genre": req.body.Genre
    
});

book.create(newbooks, (err, Book) =>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        // refresh the books
        res.redirect('/books');
    }
})};

module.exports.displaycorrection=(req, res, next) => {
  let id = req.params.id;

  book.findById(id, (err, bookToEdit) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          //show the edit view
          res.render('books/edit', {title: 'Edit Book', book: bookToEdit})
      }
  });
};

module.exports.editbook=(req, res, next) => {
  let id = req.params.id

  let updatedBook = book({
      "_id": id,
      "Title": req.body.Title,
      "Price": req.body.Price,
      "Author": req.body.Author,
      "Genre": req.body.Genre
      
      
  });

  book.updateOne({_id: id}, updatedBook, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          // refresh the books
          res.redirect('/books');
      }
  });

};

module.exports.deletebook=(req, res, next) => {
  let id = req.params.id;

  book.remove({_id: id}, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
           // refresh the books
           res.redirect('/books');
      }
  });
};

