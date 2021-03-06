import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

import { setExpensesAction, addExpenseAction, startAddExpenseAction, 
        editExpenseAction, startEditExpenseAction, removeExpenseAction, startRemoveExpenseAction,
        startSetExpensesAction } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);
const expenseData = {};
const uid = 'testUserId';

beforeEach(() => {
    expenses.forEach((expense) => {
        expenseData[expense.id] = {
            description: expense.description,
            amount: expense.amount,
            note: expense.note,
            createdAt: expense.createdAt
        };
    });
    // Save the test data in the database
    database.ref(`users/${uid}/expenses`).set(expenseData);
});

test('Testing removeExpenseAction', () => {
    const action = removeExpenseAction({id: '1234'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        payload: '1234'
    });
});

test('Should remove expense from the database', (done) => {
    const store = createMockStore({ auth: { uid } });
    store.dispatch(startRemoveExpenseAction(expenses[0])).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            payload: expenses[0].id
        });
        // Check if the expense is removed from the database
        return database.ref(`users/${uid}/expenses/${expenses[0].id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeNull();
        done();
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

test('Should update the expense in the database', (done) => {
    const store = createMockStore({ auth: { uid } });
    // Let's change the description
    expenses[0].description = "This is changed description";
    store.dispatch(startEditExpenseAction(expenses[0])).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            payload: expenses[0]
        });
        // Fetch the updated data
        return database.ref(`users/${uid}/expenses/${actions[0].payload.id}`).once('value');
    }).then((snapshot) => {
        const {description, amount, note, createdAt} = expenses[0];
        expect(snapshot.val()).toEqual({
            description,
            amount,
            note,
            createdAt
        });
        done();
    });   
});

test('Should setup addExpenseAction with provided values', () => {
    const action = addExpenseAction(expenses[0]);
    expect(action). toEqual({
        type: 'ADD_EXPENSE',
        payload: expenses[0]
    });
});

test('Should add expense to database', (done) => {
    const store = createMockStore({ auth: { uid } });
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
        return database.ref(`users/${uid}/expenses/${actions[0].payload.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should add expense with default values', (done) => {
    const store = createMockStore({ auth: { uid } });
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
        return database.ref(`users/${uid}/expenses/${actions[0].payload.id}`).once('value');
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
    const store = createMockStore({ auth: { uid } });
    store.dispatch(startSetExpensesAction()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            payload: expenses
        });
        done();
    });
});