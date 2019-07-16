import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/dashboard"><h1>Keilon Software Solutions Private Ltd</h1></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><NavLink to="/dashboard">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/create">Add Expense</NavLink></li>
                    <li className="nav-item"><button className="btn btn-primary btn-lg" onClick={props.startLogOut}><i className="fas fa-sign-out-alt"></i>Logout</button></li>
                </ul>
            </div>
        </nav>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogOut : () => dispatch(startLogOut())
    }
};

export default connect(undefined, mapDispatchToProps)(Header);