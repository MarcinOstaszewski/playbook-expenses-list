import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../store/store';

const Header: React.FC = () => {
    return <>
        <div className="header">
            <div className="title">List of expenses</div>
            <div className="pln-to-eur">
                <span className="pln-to-eur-label">1 EUR =</span>
                    <input
                        type="number"
                        value={store.plnToEur}
                        onChange={ e => store.plnToEur = parseFloat(e.target.value)}
                    />
                <span className="pln-to-eur-label"> PLN</span>
            </div>
        </div>
    </>;
}

export default observer(Header);