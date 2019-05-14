import React from 'react';

const ViewExpense = (props) => {
    return (
        <div>
            <p>Viewing Expense Item with id {props.match.params.id}</p>
        </div>
    );
}

export default ViewExpense;