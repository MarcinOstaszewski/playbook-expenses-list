import React from 'react';
import { observer } from 'mobx-react';

import store from '../store/store';

const TransactionsTable: React.FC = () => {
    return <>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Amount (PLN)</th>
                    <th>Amount (EUR)</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {store.expenses.map( (expense, i) => {
                    return (
                        <tr key={i}>
                            <td>{expense.title}</td>
                            <td>{expense.amount}</td>
                            <td>{(expense.amount / store.plnToEur).toFixed(3)}</td>
                            <td>
                                <div className="remove-expense">
                                    Remove
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
}

export default observer(TransactionsTable);