var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(newTitle, newYear) {
        console.log('Creatiang a new ReferenceItem ...');
        this.title = newTitle;
        this.year = newYear;
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year);
    };
    return ReferenceItem;
}());
var ref = new ReferenceItem("Avengers: End Game", 2019);
ref.printItem();
