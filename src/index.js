import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './router/AppRouter';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

import configureStore from './store/configureStore';
import {addExpenseAction} from './actions/expenses';
import getFilteredExpenses from './selectors/expenses'

////////////////////////////////// SIMPLE REDUX EXAMPLE //////////////////////////////////////////////////////////
const person = {
    firstName: 'Kanaka Durga',
    lastName: 'Tadi',
    location: 'Siriwada'
}

const user = {
    ...person,
    userName: 'tadi-kanaka-durga',
    location: 'Hyderabad'
}
console.log(user);

const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
};

const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
};

const setCount = ({count = 0} = {}) => {
    return {
        type: 'SET',
        count
    }
};

const resetCount = () => {
    return {
        type: 'RESET'
    }
};

const countReducer = (currentState = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                count: currentState.count + action.incrementBy
            };
        } 
        case 'DECREMENT': {
            return {
                count: currentState.count - action.decrementBy
            };
        }
        case 'SET': {
            return {
                count: action.count
            }
        }
        case 'RESET': {
            return {
                count: 0
            };
        }
        default: {
            return currentState;
        }
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(`Store state changed: ${store.getState().count}`);
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 2}));

store.dispatch(incrementCount({incrementBy: 10}));

store.dispatch(decrementCount({decrementBy: 6}));

store.dispatch(resetCount());

store.dispatch(setCount({count: 200}));

unsubscribe();

////////////////////////////////////////////////////////////////////////////////////////////

const mainStore = configureStore();

mainStore.subscribe(() => {
    const state = mainStore.getState();
    console.log(getFilteredExpenses(state.expenses, state.filters));
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
        createdAt: 3000
    }
));

mainStore.dispatch(addExpenseAction(
    {
        amount: 2000000, 
        description: 'Fix the problems for the property at Foster City (cash-flow)', 
        note: 'Includes renovation of master bed as well',
        createdAt: 6000
    }
));

mainStore.dispatch(addExpenseAction(
    {
        amount: 2000000, 
        description: 'Tour to England', 
        note: 'Run England Marathon',
        createdAt: 6000
    }
));

mainStore.dispatch(addExpenseAction(
    {
        amount: 200000, 
        description: 'Mortgage', 
        note: 'Pay before 5th of every month',
        createdAt: 90000
    }
));

mainStore.dispatch(addExpenseAction({
    amount: 5000, 
    description: 'Junk food', 
    note: 'Restrict to once in a month and only for children',
    createdAt: 12000
}));

mainStore.dispatch(addExpenseAction({
    amount: 500000, 
    description: 'Buy groceries', 
    note: 'Note all of them which are miising',
    createdAt: 2000
}));

const jsx = <Provider store = {mainStore}>
    <AppRouter/>
</Provider>

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();