import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './router/AppRouter';

import configureStore from './store/configureStore';
import {setTextFilterAction, setStartDateFilterAction, setEndDateFilterAction} from './actions/filters';
import {startSetExpensesAction} from './actions/expenses';
import moment from 'moment';
import './firebase/firebase';

const mainStore = configureStore();

mainStore.dispatch(setStartDateFilterAction(moment().startOf('month').valueOf()));
mainStore.dispatch(setEndDateFilterAction(moment().valueOf()));
mainStore.dispatch(setTextFilterAction(''));

ReactDOM.render('Loading...', document.getElementById('root'));

const jsx = <Provider store = {mainStore}>
    <AppRouter/>
</Provider>

mainStore.dispatch(startSetExpensesAction()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
});
