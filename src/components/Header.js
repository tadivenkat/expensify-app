import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';

export const Header = (props) => {
    return (
        <div>
            <header>
                <h1>Keilon Software Solutions Private Ltd</h1>
                <table><tbody><tr>
                    <td><NavLink activeClassName="is-active" to="/dashboard">Home</NavLink></td>
                    <td><NavLink activeClassName="is-active" to="/create">Add Expense</NavLink></td>
                    <td><button onClick={props.startLogOut}>Log Out</button></td>
                </tr></tbody></table>
            </header>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogOut : () => dispatch(startLogOut())
    }
};

export default connect(undefined, mapDispatchToProps)(Header);