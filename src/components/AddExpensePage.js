import React from 'react';
import {connect} from 'react-redux';
import {addExpenseAction} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


const AddExpensePage = (props) => {
    return (
        <div>
            <h1>Add Expense Page</h1>
            <ExpenseForm onSubmit={(expense) => {
                props.dispatch(addExpenseAction(expense));
                props.history.push('/');
            }}/>
        </div>
    );
}

export default connect()(AddExpensePage);