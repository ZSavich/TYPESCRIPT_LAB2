abstract class ReferenceItem {

    public title: string;
    private _year: number;

    constructor(newTitle: string, newYear: number) {
        console.log('Creatiang a new ReferenceItem ...');
        this.title = newTitle;
        this._year = newYear;
    }

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {

    constructor(newTitle: string, newYear: number) {
        super(newTitle, newYear);
    }

    printCitation(): void {
        console.log(`${this.title} ${this._year}`);
    }
}

let ref: Encyclopedia = new Encyclopedia("Batman", 2002);

ref.printCitation();