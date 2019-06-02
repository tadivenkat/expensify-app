import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = (props) => {
    const {id, amount, createdAt, description, note} = props.expense;
    return (
        <li>
            <Link to={`/edit/${id}`}><h2>{description}</h2></Link>
            <p>Id: {id}</p>
            <p>Amount: {amount}</p>
            <p>CreatedAt: {createdAt}</p>
            <p>Note: {note}</p>
        </li>
    );
}

export default ExpenseListItem;