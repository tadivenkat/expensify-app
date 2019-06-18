import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => {
    const {id, amount, createdAt, description, note} = props.expense;
    return (
        <div>
            <Link to={`/edit/${id}`}><h2>{description}</h2></Link>
            <p>Id: {id}</p>
            <p>Amount: {numeral(amount/100).format('$ 0,0.00')}</p>
            <p>CreatedAt: {!!createdAt ? moment(createdAt).format('DD-MMM-YYYY') : ''}</p>
            <p>Note: {note}</p>
        </div>
    );
}

export default ExpenseListItem;