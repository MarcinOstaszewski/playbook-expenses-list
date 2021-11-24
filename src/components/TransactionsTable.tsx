import React from 'react';

import store from '../store/store';

export const TransactionsTable: React.FC = () => {
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
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
}