import * as React from 'react';

export const Header: React.FC = () => {
    return <>
        <div className="header">
            <div className="title">List of expenses</div>
            <span className="euro-price">1 EUR = 4,382 PLN</span>
        </div>
    </>;
}

