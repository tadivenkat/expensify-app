import React from 'react';
import {connect} from 'react-redux';
import {startAddExpenseAction} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import Header from './Header';

export class AddExpensePage extends React.Component {
        onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push('/dashboard');            
    }    
    render() {
        return (
            <div>
                <Header/>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (expense) => dispatch(startAddExpenseAction(expense))
    };
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);