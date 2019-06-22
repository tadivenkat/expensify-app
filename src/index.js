import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './router/AppRouter';

import configureStore from './store/configureStore';
import {setTextFilterAction, setStartDateFilterAction, setEndDateFilterAction} from './actions/filters';
import moment from 'moment';
import './firebase/firebase';

const mainStore = configureStore();

mainStore.dispatch(setStartDateFilterAction(moment().startOf('month').valueOf()));
mainStore.dispatch(setEndDateFilterAction(moment().valueOf()));
mainStore.dispatch(setTextFilterAction(''));

const jsx = <Provider store = {mainStore}>
    <AppRouter/>
</Provider>

ReactDOM.render(jsx, document.getElementById('root'));