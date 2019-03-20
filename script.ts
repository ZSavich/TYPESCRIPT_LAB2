class ReferenceItem {

    public title: string;
    private _year: number;

    constructor(newTitle: string, newYear: number) {
        console.log('Creatiang a new ReferenceItem ...');
        this.title = newTitle;
        this._year = newYear;
    }

    printItem(): void {
        console.log(`${this.title}`);
    }
}

class Encyclopedia extends ReferenceItem {
    public _edition: number;

    constructor(newTitle: string, newYear: number, edition: number) {
        super(newTitle,newYear);
        this._edition = edition;
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this._edition} (${this._year})`)
    }
}

let refBook: Encyclopedia = new Encyclopedia("Avatar", 2012, 24);
refBook.printItem();