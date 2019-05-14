import React from 'react';
import {Link} from 'react-router-dom';

const ViewExpenses = (props) => {
    return (
        <div>
            <p>All expenses:</p>
            <ul>
                <li><Link to="/view/123">Expense One</Link></li>
                <li><Link to="/view/venkat">Expense Two</Link></li>
                <li><Link to="/view/456">Expense three</Link></li>
                <li><Link to="/view/santhi">Expense four</Link></li>
            </ul>
        </div>
    );
}

export default ViewExpenses;