import React from 'react';
import {connect} from 'react-redux';
import {addExpenseAction} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push('/');            
    }    
    render() {
        return (
            <div>
                <h1>Add Expense Page</h1>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (expense) => dispatch(addExpenseAction(expense))
    };
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);