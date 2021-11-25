import { observer } from 'mobx-react-lite';
import React from 'react';

import store from '../store/store';

const Sum: React.FC = () => {

    return <>
        <div className="sum-display">
            Sum of expenses: {store.sumExpenses().toFixed(2)} PLN ({(store.sumExpenses() / (store.plnToEur)).toFixed(2)} EUR)
        </div>
    </>
}

export default observer(Sum);