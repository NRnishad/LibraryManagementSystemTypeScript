"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const LibraryItem_1 = require("./LibraryItem");
class Book extends LibraryItem_1.LibraryItem {
    constructor(id, title, author, isbn) {
        super(id, title);
        this.author = author;
        this.isbn = isbn;
    }
    getType() {
        return "Book";
    }
    getAuthor() {
        return this.author;
    }
    getIsbn() {
        return this.isbn;
    }
}
exports.Book = Book;
