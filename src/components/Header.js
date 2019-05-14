import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <header>
                <h1>Keilon Software Solutions</h1>
                <NavLink activeClassName="is-active" to="/">Home</NavLink>
                <NavLink activeClassName="is-active" to="/create">Add Expense</NavLink>
                <NavLink activeClassName="is-active" to="/edit/x">Edit Expense</NavLink>
                <NavLink activeClassName="is-active" to="/view">View Expenses</NavLink>
                <NavLink activeClassName="is-active" to="/help">Help</NavLink>
            </header>
        </div>
    );
}

export default Header;