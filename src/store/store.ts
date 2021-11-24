import { makeAutoObservable } from "mobx";

export interface Expense {
    title: string;
    amount: number;
}

const addExpense = (expenses: Expense[], newExpense: Expense): Expense[] => [
    ...expenses,
    {
        title: newExpense.title,
        amount: newExpense.amount
    }
];

class Store {
    expenses: Expense[] = [];
    newExpense: Expense = {title: 'test', amount: 5}

    constructor() {
        makeAutoObservable(this);
    }

    setExpenses(expenses: Expense[]) {
        this.expenses = expenses;
    }

    addExpense() {
        this.expenses = addExpense(this.expenses, this.newExpense);
        this.newExpense = {title: '', amount: 0};
    }

    removeExpense() {

    }
}

const store = new Store();

let expenses = [{title: 'aaa', amount: 5}];

store.setExpenses(expenses);

export default store;