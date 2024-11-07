"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.items = new Map();
    }
    addItem(item) {
        this.items.set(item.getId(), item);
    }
    getItem(id) {
        return this.items.get(id);
    }
    getAllItems() {
        return Array.from(this.items.values());
    }
    checkOutItem(id) {
        const item = this.items.get(id);
        if (item) {
            item.checkOut();
        }
        else {
            throw new Error("Item not found");
        }
    }
    checkInItem(id) {
        const item = this.items.get(id);
        if (item) {
            item.checkIn();
        }
        else {
            throw new Error("Item not found");
        }
    }
}
exports.Library = Library;
