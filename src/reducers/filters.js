
const filtersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

export default (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.payload
            };
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.payload
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.payload
            };
        default: 
            return state;
    }
};