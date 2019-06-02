import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpenseAction, removeExpenseAction} from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Editing Expense: {props.match.params.id}</h1>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log(expense);
                    props.dispatch(editExpenseAction(expense));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpenseAction(props.expense));
                props.history.push("/");
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);