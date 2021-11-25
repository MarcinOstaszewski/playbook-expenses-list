import { makeAutoObservable } from "mobx";

export interface Expense {
    id: number;
    title: string;
    amount: number;
}

const addExpense = (expenses: Expense[], newExpense: Expense): Expense[] => [
    ...expenses,
    {
        id: newExpense.id,
        title: newExpense.title,
        amount: newExpense.amount
    }
];

const removeExpense = (expenses: Expense[], id: number): Expense[] => {
    return expenses.splice(id, 1);
}

class Store {
    expenses: Expense[] = [];
    newExpense: Expense = {id: 0, title: '', amount: 0};
    plnToEur: number = 4.382;

    constructor() {
        makeAutoObservable(this);
    }

    setExpenses(expenses: Expense[]) {
        this.expenses = expenses;
    }

    addExpense() {
        if (this.newExpense.title.length < 3) {

            // TODO: --> show error message: Title too short;
            return;
        }
        this.expenses = addExpense(this.expenses, this.newExpense);
        this.newExpense.title = '';
        this.newExpense.amount = 0;
        this.newExpense.id++;
        store.setExpenses(this.expenses);

        // TODO: --> show message: Expense added
    }

    removeExpense(e: any, id: number) {
        this.expenses.forEach( exp => {
            if (exp.id === id) {
                console.log(this.expenses.indexOf(exp))
                removeExpense(this.expenses, this.expenses.indexOf(exp))
            }
        });
    }

    sumExpenses() {
        let sum = 0;
        this.expenses.forEach( exp => sum += exp.amount );
        return sum;
    }
}

const store = new Store();

export default store;