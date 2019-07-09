import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpenseAction, startRemoveExpenseAction} from '../actions/expenses';
import Header from './Header';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpenseAction(expense);
        this.props.history.push('/dashboard'); 
    };
    onRemove = () => {
        this.props.removeExpenseAction(this.props.expense);
        this.props.history.push('/dashboard');
    };
    render() {
        return (
            <div>
                <Header/>
                <h1>Editing Expense: {this.props.match.params.id}</h1>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpenseAction: (expense) => dispatch(startEditExpenseAction(expense)),
        removeExpenseAction: (expense) => dispatch(startRemoveExpenseAction(expense))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);