import React from 'react';

const EditExpensePage = (props) => {
    return (
        <div>
            <p>Editing Expense Item with id {props.match.params.id}</p>
        </div>
    );
}

export default EditExpensePage;