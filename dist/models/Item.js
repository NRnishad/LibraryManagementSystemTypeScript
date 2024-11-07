"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryItem = void 0;
class LibraryItem {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.available = true;
        this.dueDate = null;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    isAvailable() {
        return this.available;
    }
    getDueDate() {
        return this.dueDate;
    }
    checkOut() {
        if (this.available) {
            this.available = false;
            this.dueDate = new Date();
            this.dueDate.setDate(this.dueDate.getDate() + 14);
        }
        else {
            throw new Error("Item is not available");
        }
    }
    checkIn() {
        this.available = true;
        this.dueDate = null;
    }
}
exports.LibraryItem = LibraryItem;
