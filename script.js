var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(newTitle, newYear) {
        console.log('Creatiang a new ReferenceItem ...');
        this.title = newTitle;
        this._year = newYear;
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log("" + department);
    };
    return ReferenceItem;
}());
var ref = new ReferenceItem("Avengers: End Game", 2019);
ref.printItem();
ref.publisher = "David";
console.log(ref.publisher);
var department = "Mahuchkala";
ref.printItem();
