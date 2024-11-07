import { LibraryItem } from './LibraryItem';

export class Book extends LibraryItem {
    private author: string;
    private isbn: string;

    constructor(id: string, title: string, author: string, isbn: string) {
        super(id, title);
        this.author = author;
        this.isbn = isbn;
    }

    getType(): string {
        return "Book";
    }

    getAuthor(): string {
        return this.author;
    }

    getIsbn(): string {
        return this.isbn;
    }
}
