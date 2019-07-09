import React from 'react';
import ExpenseList from './ExpenseList';
import Filters from './Filters';
import Header from './Header';

class ExpenseDashboard extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Filters/>
        <ExpenseList/>
      </div>
    );
  }
}

export default ExpenseDashboard;
