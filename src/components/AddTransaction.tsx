import React from 'react'

export const AddTransaction: React.FC = () => {
    return <>
        <form>
            <div className="form-row-title">
                <label>Title of transaction</label>
                <input type="text" />
            </div>
            <div className="form-row-add">
                <label>Amount (in PLN)</label>
                <input type="text" />
                <button>Add</button>
            </div>
        </form>
    </>;
}
