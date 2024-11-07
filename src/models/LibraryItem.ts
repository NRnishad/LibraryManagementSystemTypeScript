export abstract class LibraryItem {
    protected id: string;
    protected title: string;
    protected available: boolean;
    protected dueDate: Date | null;

    constructor(id: string, title: string) {
        this.id = id;
        this.title = title;
        this.available = true;
        this.dueDate = null;
    }

    abstract getType(): string;
    
    getId(): string {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    isAvailable(): boolean {
        return this.available;
    }

    getDueDate(): Date | null {
        return this.dueDate;
    }

    checkOut(): void {
        if (this.available) {
            this.available = false;
            this.dueDate = new Date();
            this.dueDate.setDate(this.dueDate.getDate() + 14);
        } else {
            throw new Error("Item is not available");
        }
    }

    checkIn(): void {
        this.available = true;
        this.dueDate = null;
    }
}