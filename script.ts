class ReferenceItem {
    title: string;
    year: number;

    constructor(newTitle: string, newYear: number) {
        console.log('Creatiang a new ReferenceItem ...');
        this.title = newTitle;
        this.year = newYear;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
    }
}

const ref: ReferenceItem = new ReferenceItem("Avengers: End Game", 2019);
ref.printItem();