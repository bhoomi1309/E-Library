const express = require('express');
const Products = require('../models/bookSchema');

const router = express.Router();

router.get("/books", async (req, res) => {
  try {
    const books = await Products.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books", error });
  }
});

router.get("/books/:ISBN", async (req, res) => {
  try {
    const book = await Products.find({
      ISBN: req.params.ISBN,
    });

    if (!book || book.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch the book", error });
  }
});

router.delete("/books/:ISBN", async (req, res) => {

  try {

    const deletedBook = await Products.findOneAndDelete({ ISBN: req.params.ISBN });

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete the book", error });
  }
});

router.post("/books", async (req, res) => {
  const {
    ISBN,
    Title,
    Author,
    YearOfPublication,
    Publisher,
    imageURL
  } = req.body;

  try {

    if (
      !ISBN ||
      !Title ||
      !Author ||
      !YearOfPublication ||
      !Publisher ||
      !imageURL
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }


    const newBook = new Products({
      ISBN,
      Title,
      Author,
      YearOfPublication,
      Publisher,
      imageURL
    });


    const savedBook = await newBook.save();

    res.status(201).json({ message: "Book added successfully", book: savedBook });
  } catch (error) {
    res.status(500).json({ message: "Failed to add book", error });
  }
});


module.exports = router;
