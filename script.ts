interface Person {
    name: string;
    email: string;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

class UniversityLibrarian implements Librarian {

    name: string;
    email: string;
    department: string;

    constructor(name: string, email: string, department: string) {
        this.name = name;
        this.email = email;
        this.department = department;
    }
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    let favoriteLibrarian: Librarian = new UniversityLibrarian("Angelo", "angelo@witcher.com", "writer");
    favoriteLibrarian.assistCustomer("Sapcowsky");