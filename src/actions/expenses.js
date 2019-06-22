import database from '../firebase/firebase';

export const addExpenseAction = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        payload: expense
    };
};

export const startAddExpenseAction = (expenseData = {}) => {
    const {description, amount, note, createdAt} = expenseData;
    const expense = {description, amount, note, createdAt};
    return (dispatch) => {
        database.ref('expenses').push(expense).then((data) => {
            dispatch(addExpenseAction({
                id: data.key,
                description,
                amount,
                note,
                createdAt
            }));
        }).catch((error) => {
            console.log("Error adding expense", error);
        });
    }
}

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