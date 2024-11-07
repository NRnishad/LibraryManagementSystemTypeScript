import { LibraryItem } from './LibraryItem';

export class Library {
    private items: Map<string, LibraryItem>;

    constructor() {
        this.items = new Map();
    }

    addItem(item: LibraryItem): void {
        this.items.set(item.getId(), item);
    }

    getItem(id: string): LibraryItem | undefined {
        return this.items.get(id);
    }

    getAllItems(): LibraryItem[] {
        return Array.from(this.items.values());
    }

    checkOutItem(id: string): void {
        const item = this.items.get(id);
        if (item) {
            item.checkOut();
        } else {
            throw new Error("Item not found");
        }
    }

    checkInItem(id: string): void {
        const item = this.items.get(id);
        if (item) {
            item.checkIn();
        } else {
            throw new Error("Item not found");
        }
    }
}