import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export class LoginPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-1">
                    <button className="btn btn-primary" onClick={this.props.startLogin}>Log In</button>
                </div>
                <div className="col-1">
                    <button className="btn btn-primary">Register</button>
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