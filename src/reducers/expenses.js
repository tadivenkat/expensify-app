
export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.payload];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.payload);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.payload.id) {
                    return {...expense, ...action.payload};
                } else {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.payload;
        default: 
            return state;
    }
};