/*
File Name - books.js
Student Name - Bhhodip patel
Student ID - 301251644
Date - 24-6-2022
*/



// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');
let bookController = require('../controllers/book');

/* GET books List page. READ */
router.get('/',bookController.booklist);

//  GET the Book Details page in order to add a new Book
router.get('/add', bookController.displaybook);

// POST process the Book Details page and create a new Book - CREATE
router.post('/add',bookController.addbook );

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', bookController.displaycorrection);

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', bookController.editbook);

// GET - process the delete by user id
router.get('/delete/:id', bookController.deletebook);


module.exports = router;
