import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <header>
                <h1>Keilon Software Solutions</h1>
                <table><tr>
                    <td><NavLink activeClassName="is-active" to="/">Home</NavLink></td>
                    <td><NavLink activeClassName="is-active" to="/create">Add Expense</NavLink></td>
                    <td><NavLink activeClassName="is-active" to="/edit/x">Edit Expense</NavLink></td>
                    <td><NavLink activeClassName="is-active" to="/view">View Expenses</NavLink></td>
                    <td><NavLink activeClassName="is-active" to="/help">Help</NavLink></td>
                </tr></table>
            </header>
        </div>
    );
}

export default Header;