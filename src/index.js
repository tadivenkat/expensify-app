import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
//import 'normalize.css/normalize.css';
//import './styles/styles.scss';

import AppRouter, {history} from './router/AppRouter';

import configureStore from './store/configureStore';
import {setTextFilterAction, setStartDateFilterAction, setEndDateFilterAction} from './actions/filters';
import {startSetExpensesAction} from './actions/expenses';
import {loginAction, logoutAction} from './actions/auth';
import moment from 'moment';
import {firebase} from './firebase/firebase';

const store = configureStore();

store.dispatch(setStartDateFilterAction(moment().startOf('month').valueOf()));
store.dispatch(setEndDateFilterAction(moment().valueOf()));
store.dispatch(setTextFilterAction(''));

ReactDOM.render('Loading...', document.getElementById('root'));

const jsx = <Provider store = {store}>
    <AppRouter/>
</Provider>

let isRendered = false;
const renderApp = () => {
    if(!isRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        isRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("Logged In. User Id is", user.uid);
        store.dispatch(loginAction({uid: user.uid}));
        store.dispatch(startSetExpensesAction()).then(() => {
           renderApp(); 
        });
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    } else {
        console.log("Not Logged In");
        store.dispatch(logoutAction());
        renderApp();
        history.push('/');
    }
});
