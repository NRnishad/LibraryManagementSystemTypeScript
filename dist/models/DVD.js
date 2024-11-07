"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = void 0;
const LibraryItem_1 = require("./LibraryItem");
class DVD extends LibraryItem_1.LibraryItem {
    constructor(id, title, director, duration) {
        super(id, title);
        this.director = director;
        this.duration = duration;
    }
    getType() {
        return "DVD";
    }
    getDirector() {
        return this.director;
    }
    getDuration() {
        return this.duration;
    }
}
exports.DVD = DVD;
