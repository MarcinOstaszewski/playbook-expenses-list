import React from 'react';
import { observer } from 'mobx-react';

import store from '../store/store';

const AddTransaction: React.FC = () => {

    return <>
        <div className="form">
            <div className="form-row-title">
                <label>Title of transaction</label>

                <div className="error-message">
                <input
                    type="text"
                    value={store.newExpense.title}
                    onChange={ e => store.newExpense.title = e.target.value }
                />
                <span>Nazwa za krótka</span>
            </div>
            </div>
            <div className="form-row-add">
                <label>Amount (in PLN)</label>

                <div className="error-message">
                    <input
                        type="number"
                        value={store.newExpense.amount}
                        onChange={ e => store.newExpense.amount = parseFloat(parseFloat(e.target.value).toFixed(2)) }
                    />
                    <span>Do dwóch miejsc po przecinku</span>
                </div>

                <div
                    className="button"
                    onClick={ (e) => store.addExpense() } >
                    Add
                </div>
            </div>
        </div>
    </>;
}

export default observer(AddTransaction);