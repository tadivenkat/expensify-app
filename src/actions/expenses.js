import uuid from 'uuid';

export const addExpenseAction = ({amount = 0, description = '', note = '', createdAt=0} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        payload: {
            id: uuid(),
            amount,
            description,
            note,
            createdAt
        }
    };
};

export const removeExpenseAction = ({id} = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id 
    }
};

export const editExpenseAction = ({id, amount, description, note, createdAt} = {}) => {
    return {
        type: 'EDIT_EXPENSE',
        payload: {
            id,
            amount,
            description,
            note,
            createdAt
        }
    }
};