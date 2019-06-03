import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = (props) => {
    const {id, amount, createdAt, description, note} = props.expense;
    return (
        <div>
            <Link to={`/edit/${id}`}><h2>{description}</h2></Link>
            <p>Id: {id}</p>
            <p>Amount: {amount}</p>
            <p>CreatedAt: {!!createdAt ? moment(createdAt).format('DD-MMM-YYYY') : ''}</p>
            <p>Note: {note}</p>
        </div>
    );
}

export default ExpenseListItem;