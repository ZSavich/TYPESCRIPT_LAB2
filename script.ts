class ReferenceItem {

    /*title: string;
    year: number;*/

    /*constructor(newTitle: string, newYear: number) {
        console.log('Creatiang a new ReferenceItem ...');
        this.title = newTitle;
        this.year = newYear;
    }*/

    public title: string;
    private _year: number;
    private _publisher: string;

    constructor(newTitle: string, newYear: number) {
        console.log('Creatiang a new ReferenceItem ...');
        this.title = newTitle;
        this._year = newYear;
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    get publisher() {
        return this._publisher.toUpperCase();
    }

    printItem(): void {
        console.log(`${department}`);
    }
}

const ref: ReferenceItem = new ReferenceItem("Avengers: End Game", 2019);

ref.printItem();
ref.publisher = "David";
console.log(ref.publisher);

static const department = "Mahuchkala";
ref.printItem();