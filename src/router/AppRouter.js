import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import {createBrowserHistory} from 'history';
//import {PrivateRoute} from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = (props) => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/" component={LoginPage} exact={true}/>
                    <Route path="/dashboard" component={ExpenseDashboard} exact={true}/>
                    <Route path="/create" component={AddExpensePage}/>
                    <Route path="/edit/:id" component={EditExpensePage}/>
                    <Route path="/help" component={HelpPage} exact={true}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;