import {addExpenseAction, editExpenseAction, removeExpenseAction} from '../../actions/expenses';

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

test('Testing addExpenseAction', () => {
    const payload = {
        amount: 10000,
        description: 'test expense',
        note: 'test expense note',
        createdAt: 9876234
    };
    const action = addExpenseAction(payload);
    expect(action).toEqual({
            type: 'ADD_EXPENSE',
            payload: {
                id: expect.any(String),
                amount: 10000,
                description: 'test expense',
                note: 'test expense note',
                createdAt: 9876234
            }
        }
    );
});

test('Shuold be able to add expense with default values', () => {
    const defaultExpense = {
        id: expect.any(String),
        amount: 0,
        description: '',
        note: '',
        createdAt: 0
    };
    
    const action = addExpenseAction();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        payload: defaultExpense
    });
});