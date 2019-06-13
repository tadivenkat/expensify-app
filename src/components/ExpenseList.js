import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpenses from '../selectors/expenses';
import moment from 'moment';


export const ExpenseList = (props) => {
    const {text, sortBy, startDate, endDate} = props.filters;
    return (
        <div>
            <h1>Expense List</h1>
            <h4>Filters Applied: Text: {text}, SortBy: {sortBy}, startDate: {moment(startDate).format('DD-MMM-YYYY')}, endDate: {moment(endDate).format('DD-MMM-YYYY')}</h4>
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