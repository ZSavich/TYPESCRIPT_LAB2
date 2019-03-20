/*
const favoriteLibrarian: Librarian = {
    name: "John",
    email: "john@hotmail.com",
    department: "sience",
    assistCustomer: function (custName: string): string {
        return this.name + " " + custName;
    }
};
*/
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian(name, email, department) {
        this.name = name;
        this.email = email;
        this.department = department;
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
var favoriteLibrarian = new UniversityLibrarian("Angelo", "angelo@witcher.com", "writer");
favoriteLibrarian.assistCustomer("Sapcowsky");
