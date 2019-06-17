import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './router/AppRouter';

import configureStore from './store/configureStore';
import {addExpenseAction} from './actions/expenses';
//import getFilteredExpenses from './selectors/expenses'
import {setTextFilterAction, setStartDateFilterAction, setEndDateFilterAction} from './actions/filters';
import moment from 'moment';

const mainStore = configureStore();

mainStore.subscribe(() => {
    //const state = mainStore.getState();
    //console.log(getFilteredExpenses(state.expenses, state.filters));
});

mainStore.dispatch(addExpenseAction(
    {
        amount: 30000, 
        description: 'Registration for marathon (cash-flow)', 
        note: 'Make sure you train well'
    }
));

mainStore.dispatch(addExpenseAction(
    {
        amount: 3000000, 
        description: 'Buying Celsius tokens (cash-flow)', 
        note: 'Transfer tokens to my ethereum wallet',
        createdAt: moment().add(-13, 'months').valueOf()
    }
));

mainStore.dispatch(addExpenseAction(
    {
        amount: 2000000, 
        description: 'Fix the problems for the property at Foster City (cash-flow)', 
        note: 'Includes renovation of master bed as well',
        createdAt: moment().add(-6, 'days').valueOf()
    }
));

mainStore.dispatch(addExpenseAction(
    {
        amount: 2000000, 
        description: 'Tour to England', 
        note: 'Run England Marathon',
        createdAt: moment().add(-3, 'weeks').valueOf()
    }
));

mainStore.dispatch(addExpenseAction(
    {
        amount: 200000, 
        description: 'Mortgage', 
        note: 'Pay before 5th of every month',
        createdAt: moment().add(-15, 'hours').valueOf()
    }
));

mainStore.dispatch(addExpenseAction({
    amount: 5000, 
    description: 'Junk food', 
    note: 'Restrict to once in a month and only for children',
    createdAt: moment().add(-350, 'minutes').valueOf()
}));

mainStore.dispatch(addExpenseAction({
    amount: 500000, 
    description: 'Buy groceries', 
    note: 'Note all of them which are miising',
    createdAt: moment().add(-2, 'years').valueOf()
}));

mainStore.dispatch(setStartDateFilterAction(moment().startOf('month').valueOf()));
mainStore.dispatch(setEndDateFilterAction(moment().valueOf()));
mainStore.dispatch(setTextFilterAction(''));

const jsx = <Provider store = {mainStore}>
    <AppRouter/>
</Provider>

ReactDOM.render(jsx, document.getElementById('root'));