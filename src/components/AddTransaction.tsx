import React from 'react';
import { observer } from 'mobx-react';

import store from '../store/store';

const AddTransaction: React.FC = () => {

    return <>
        <form>
            <div className="form-row-title">
                <label>Title of transaction</label>
                <input
                    type="text"
                    value={store.newExpense.title}
                    onChange={ e => store.newExpense.title = e.target.value }/>
            </div>
            <div className="form-row-add">
                <label>Amount (in PLN)</label>
                <input
                    type="number"
                    value={store.newExpense.amount}
                    onChange={ e => store.newExpense.amount = parseFloat(parseFloat(e.target.value).toFixed(2)) }/>
                <button onSubmit={ e => store.addExpense}>Add</button>
            </div>
        </form>
    </>;
}

export default observer(AddTransaction);