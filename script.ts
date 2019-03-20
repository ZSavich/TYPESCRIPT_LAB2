// Задание 1.1 Базовые типы

function getAllWorkers(): Worker {
    return [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.Designer},
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Designer},
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.Designer},
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: Category.Designer}
    ];
};

// Задание 2.1 Определение интерфейсов

interface Worker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: Category;   
}

console.log(getAllWorkers());

function getBookByID(worker: Worker) {
    
}

function PrintWorker(worker: Worker): string {
    return `${worker.name} ${worker.surname} got salary ${worker.salary}`;
}

const igor: Worker = {
    id: 1,
    name: 'Ivan',
    surname: 'Ivanov',
    available: true,
    salary: Category.Designer
}

console.log(PrintWorker(igor))