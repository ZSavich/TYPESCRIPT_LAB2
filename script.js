var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(newTitle, newYear) {
        console.log('Creatiang a new ReferenceItem ...');
        this.title = newTitle;
        this._year = newYear;
    }
    return ReferenceItem;
}());
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear) {
        return _super.call(this, newTitle, newYear) || this;
    }
    Encyclopedia.prototype.printCitation = function () {
        console.log(this.title + " " + this._year);
    };
    return Encyclopedia;
}(ReferenceItem));
var ref = new Encyclopedia("Batman", 2002);
ref.printCitation();
