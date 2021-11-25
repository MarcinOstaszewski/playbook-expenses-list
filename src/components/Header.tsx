import React from 'react';
import { observer } from 'mobx-react';

import store from '../store/store';
import axios from 'axios';

const Header: React.FC = () => {

    const getCurrentRates = () => {
        (async () => {
            await axios.get('http://api.nbp.pl/api/exchangerates/rates/a/eur/')
            .then( res => store.plnToEur = res.data.rates[0].mid);
        })();
    }

    const setPlnToEur = (value: number) => {
        return value > 0 ? value : 0.001;
    }

    return <>
        <div className="header">
            <div className="title">List of expenses</div>
            <div className="get-current-rates" onClick={getCurrentRates}>Get current rates</div>
            <div className="pln-to-eur">
                <span className="pln-to-eur-label">1 EUR =</span>
                    <input
                        type="number"
                        value={store.plnToEur}
                        onChange={ e => store.plnToEur = setPlnToEur(parseFloat(e.target.value))}
                    />
                <span className="pln-to-eur-label"> PLN</span>
            </div>
        </div>
    </>;
}

export default observer(Header);