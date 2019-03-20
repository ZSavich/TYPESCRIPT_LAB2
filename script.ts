// Задание 2.3 Расширение интерфейсов

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

const favoriteAuthor: Author = {
    name: "Robert",
    email: "robert@gmail.com",
    numBooksPublished: 13
};
const favoriteLibrarian: Librarian = {
    name: "John",
    email: "john@hotmail.com",
    department: "sience",
    assistCustomer: function (custName: string): string {
        return this.name + " " + custName;
    }
};