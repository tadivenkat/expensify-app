import database from '../firebase/firebase';

export const addExpenseAction = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        payload: expense
    };
};

export const startAddExpenseAction = (expenseData = {}) => {
    const {description = '', amount = 0, note = '', createdAt = 0} = expenseData;
    const expense = {description, amount, note, createdAt};
    return (dispatch) => {
        return database.ref('expenses').push(expense).then((data) => {
            dispatch(addExpenseAction({
                id: data.key,
                ...expense
            }));
        }).catch((error) => {
            console.log("Error adding expense", error);
        });
    }
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

export const setExpensesAction = (expenses = []) => {
    return {
        type: 'SET_EXPENSES',
        payload: expenses
    }
};

export const startSetExpensesAction = () => {
    const expenses = [];
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpensesAction(expenses));
        }).catch((error) => {
            console.log("Error retreiving expenses", error);
        });
    };
};