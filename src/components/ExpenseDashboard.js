import React from 'react';
import ExpenseList from './ExpenseList';
import Filters from './Filters';

class ExpenseDashboard extends React.Component {
  render() {
    return (
      <div>
        <Filters/>
        <ExpenseList/>
      </div>
    );
  }
}

export default ExpenseDashboard;
