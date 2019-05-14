import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './router/AppRouter';
import * as serviceWorker from './serviceWorker';

//////////////////////////////////////
import {createStore} from 'redux';
/////////////////////////////////////

ReactDOM.render(<AppRouter/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////// ACTION GENERATORS ///////////////////////////////////////////
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

///////////////////////////////////// REDUCER ///////////////////////////////////////////////

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