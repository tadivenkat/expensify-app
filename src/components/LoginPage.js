import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export class LoginPage extends React.Component {
    render() {
        return (
            <div className="box-layout">
                <div className="box">
                    <h1>Expensify App</h1>
                    <p>Keep Your Expenses In Control By Managing Them Using Expensify App</p>
                    <button className="btn btn-primary" onClick={this.props.startLogin}>Login With Google</button>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);