import { Request, Response } from 'express';
import { Library } from '../models/Library';
import { Book } from '../models/Book';
import { DVD } from '../models/DVD';

export class LibraryController {
    private library: Library;

    constructor() {
        this.library = new Library();
        this.initializeSampleData();
    }

    private initializeSampleData(): void {
        this.library.addItem(new Book("B1", "Adujeevitham", "benyamin", "978-0743273565"));
        this.library.addItem(new Book("B2", "madhilukalkkappuram", "basheer", "978-0446310789"));
        this.library.addItem(new DVD("D1", "dhrshyam", "Jos", 142));
        this.library.addItem(new Book("B2", "pathummade adu", "basheer", "978-0446310754"));
        this.library.addItem(new DVD("D1", "ARM", "Jithin", 150));
    }

    getAllItems(req: Request, res: Response): void {
        const items = this.library.getAllItems();
        res.render('index', { items });
    }

    checkOutItem(req: Request, res: Response): void {
        try {
            const { id } = req.params;
            this.library.checkOutItem(id);
            res.redirect('/');
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.status(400).send('An unknown error occurred');
            }
        }
    }

    checkInItem(req: Request, res: Response): void {
        try {
            const { id } = req.params;
            this.library.checkInItem(id);
            res.redirect('/');
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.status(400).send('An unknown error occurred');
            }
        }
    }
}