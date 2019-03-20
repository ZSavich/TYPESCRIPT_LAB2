/ Задание 2.1 Определение интерфейсов

interface Worker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: Category;
}

const enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}

function getBookByID(worker: Worker) {

}

function PrintWorker(worker: Worker): string {
    return worker.name + " " + worker.surname + " got salary " + worker.salary;
}

const igor: Worker = {
    id: 1,
    name: 'Ivan',
    surname: 'Ivanov',
    available: true,
    salary: Category.Designer
}

console.log(PrintWorker(igor));