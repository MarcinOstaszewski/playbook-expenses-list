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
    newExpense: Expense = {title: '', amount: 0};
    plnToEur: number = 4.382;


    constructor() {
        makeAutoObservable(this);
    }

    setExpenses(expenses: Expense[]) {
        this.expenses = expenses;
    }

    addExpense() {
        if (this.newExpense.title.length < 3) {
            return // TODO: --> show error message: Title too short;
        }
        this.expenses = addExpense(this.expenses, this.newExpense);
        console.log(this.expenses, this.newExpense);
        store.setExpenses(this.expenses);


        this.newExpense = {title: '', amount: 0};
        // TODO: --> show message: Expense added
    }

    removeExpense() {

    }

    sumExpenses() {
        let sum = 0;
        this.expenses.forEach( exp => sum += exp.amount );
        return sum;
    }
}

const store = new Store();

export default store;