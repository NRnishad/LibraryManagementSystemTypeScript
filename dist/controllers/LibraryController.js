"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryController = void 0;
const Library_1 = require("../models/Library");
const Book_1 = require("../models/Book");
const DVD_1 = require("../models/DVD");
class LibraryController {
    constructor() {
        this.library = new Library_1.Library();
        this.initializeSampleData();
    }
    initializeSampleData() {
        this.library.addItem(new Book_1.Book("B1", "Adujeevitham", "benyamin", "978-0743273565"));
        this.library.addItem(new Book_1.Book("B2", "madhilukalkkappuram", "basheer", "978-0446310789"));
        this.library.addItem(new DVD_1.DVD("D1", "dhrshyam", "Jos", 142));
        this.library.addItem(new Book_1.Book("B2", "pathummade adu", "basheer", "978-0446310754"));
        this.library.addItem(new DVD_1.DVD("D1", "ARM", "Jithin", 150));
    }
    getAllItems(req, res) {
        const items = this.library.getAllItems();
        res.render('index', { items });
    }
    checkOutItem(req, res) {
        try {
            const { id } = req.params;
            this.library.checkOutItem(id);
            res.redirect('/');
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message);
            }
            else {
                res.status(400).send('An unknown error occurred');
            }
        }
    }
    checkInItem(req, res) {
        try {
            const { id } = req.params;
            this.library.checkInItem(id);
            res.redirect('/');
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message);
            }
            else {
                res.status(400).send('An unknown error occurred');
            }
        }
    }
}
exports.LibraryController = LibraryController;
