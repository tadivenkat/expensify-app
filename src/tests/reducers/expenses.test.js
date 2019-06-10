import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

const initialState = [];

test('expenseReducer: Should set default state', () => {
    const defaultState = expensesReducer(undefined, {type: '@@INIT'});
    expect(defaultState).toEqual([]);
});

test('Testing add expense action of expenses reducer', () => {
    const action = {
        type: 'ADD_EXPENSE',
        payload: expenses[0]
    };
    const newState = expensesReducer(initialState, action);
    expect(newState).toContain(expenses[0]);
});

test('Testing edit expense action of expenses reducer', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        payload: {
            id: expenses[0].id,
            description: 'pencil',
            amount: 15000,
            note: 'test note for test expense',
            createdAt: 8000
        }
    };
    const newState = expensesReducer(expenses, action);
    expect(newState[0].description).toBe('pencil');
    expect(newState[0].amount).toBe(15000);
    expect(newState[0].note).toBe('test note for test expense');
});

test('Should not edit expense if expense is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        payload: {
            id: '-1',
            description: 'pencil',
            amount: 15000,
            note: 'test note for test expense',
            createdAt: 8000
        }
    };
    const newState = expensesReducer(expenses, action);
    expect(newState).toEqual(expenses);
});

test('Testing remove expense action of expenses reducer', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const newState = expensesReducer(expenses, action);
    expect(newState).not.toContain(expenses[1]);
});

test('Testing removing an expense which is not present in the state', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    };
    const newState = expensesReducer(expenses, action);
    expect(newState.length).toBe(expenses.length);
});