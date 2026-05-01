const Book = require('../models/book.js');

exports.addBook = async(req, res) => {
    try {
        const {title, author, price, genre} = req.body;
        const newBook = new Book({title, author, price, genre});
        await newBook.save();
        res.status(201).json({message: "Book added successfully", book: newBook});
    } catch(error) {
        console.log(error);
        res.status(500).json({error: "Failed to add book"});
    }
};

exports.getBooks = async(req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({books});
    } catch(error) {
        res.status(500).json({error: "Failed to retrieve books"});
    }
};

exports.updateBook = async(req, res) => {
    try {
        const {id} = req.params;
        const updated = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!updated) return res.status(404).json({error: "Book not found"});
        res.status(200).json({message: "Book updated successfully", book: updated});
    } catch(error) {
        res.status(500).json({error: "Failed to update book"});
    }
};

exports.deleteBook = async(req, res) => {
    try {
        const {id} = req.params;
        const deleted = await Book.findByIdAndDelete(id);
        if(!deleted) return res.status(404).json({error: "Book not found"});
        res.status(200).json({message: "Book deleted successfully"});
    }catch(error) {
        res.status(500).json({error: "Failed to delete book"});
    }
};