import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpenses from '../selectors/expenses';
import {totalExpenditure} from '../selectors/expenses';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseList = (props) => {
    const {text, sortBy, startDate, endDate} = props.filters;
    return (
        <div>
            <h1>Expense List</h1>
            <p>
                You have {props.expenses.length} {props.expenses.length === 1 ? 'expense' : 'expenses'} with a total 
                expenditure of {numeral(totalExpenditure(props.expenses)/100).format('$ 0,0.00')}
            </p>
            {props.expenses.map((expense) => <ExpenseListItem 
                                                    key={expense.id} 
                                                    expense={expense}/>)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: filterExpenses(state.expenses, state.filters),
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);