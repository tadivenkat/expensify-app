import {setExpensesAction, addExpenseAction, startAddExpenseAction, editExpenseAction, removeExpenseAction, startSetExpensesAction} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const expenseData = {};

beforeEach(() => {
    expenses.forEach((expense) => {
        expenseData[expense.id] = {
            description: expense.description,
            amount: expense.amount,
            note: expense.note,
            createdAt: expense.createdAt
        };
    });
    database.ref('expenses').set(expenseData);
});

test('Testing removeExpenseAction', () => {
    const action = removeExpenseAction({id: '1234'});
    expect(action).toEqual({
        id: '1234',
        type: 'REMOVE_EXPENSE'
    });
});

test('Testing editExpenseAction', () => {
    const payload = {
        id: '1234',
        amount: 10000,
        description: 'test expense',
        note: 'test expense note',
        createdAt: 9876234
    };
    const action = editExpenseAction(payload);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        payload: {
            id: '1234',
            amount: 10000,
            description: 'test expense',
            note: 'test expense note',
            createdAt: 9876234
        }
    });
});

test('Should setup addExpenseAction with provided values', () => {
    const action = addExpenseAction(expenses[0]);
    expect(action). toEqual({
        type: 'ADD_EXPENSE',
        payload: expenses[0]
    });
});

test('Should add expense to database and redux store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    };
    store.dispatch(startAddExpenseAction(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            payload: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].payload.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should add expense with default values', (done) => {
    const store = createMockStore({});
    store.dispatch(startAddExpenseAction()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            payload: {
                id: expect.any(String),
                description: '',
                amount: 0,
                note: '',
                createdAt: 0
            }
        });
        return database.ref(`expenses/${actions[0].payload.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            description: '',
            amount: 0,
            note: '',
            createdAt: 0            
        });
        done();
    });
});

test('Should setup setExpensesAction with provided expenses data', () => {
    const action = setExpensesAction(expenseData);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        payload: expenseData
    });
});

test('Should set up expenses with the expenses data from the database', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpensesAction()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            payload: expenses
        });
        done();
    });
});