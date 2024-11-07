import { LibraryItem } from './LibraryItem';

export class DVD extends LibraryItem {
    private director: string;
    private duration: number;

    constructor(id: string, title: string, director: string, duration: number) {
        super(id, title);
        this.director = director;
        this.duration = duration;
    }

    getType(): string {
        return "DVD";
    }

    getDirector(): string {
        return this.director;
    }

    getDuration(): number {
        return this.duration;
    }
}
