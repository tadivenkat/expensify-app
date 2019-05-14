import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import ViewExpenses from '../components/ViewExpenses';
import ViewExpense from '../components/ViewExpense';

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={ExpenseDashboard} exact={true}/>
                    <Route path="/create" component={AddExpensePage}/>
                    <Route path="/edit/:id" component={EditExpensePage}/>
                    <Route path="/view" component={ViewExpenses} exact={true}/>
                    <Route path="/view/:id" component={ViewExpense}/>
                    <Route path="/help" component={HelpPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;