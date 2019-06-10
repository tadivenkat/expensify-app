import filtersReducer from '../../reducers/filters';

const initialState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

test('Should set text filter to Marathon', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        payload: 'Marathon'
    };
    const newState = filtersReducer(initialState, action);
    expect(newState).toEqual({
        ...initialState, text: 'Marathon'
    });
});

test('Should set sortBy to amount', () => {
    const action = {
        type: 'SET_SORT_BY',
        payload: 'amount'
    };
    const newState = filtersReducer(initialState, action);
    expect(newState).toEqual({...initialState, sortBy: 'amount'});
});

test('Should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        payload: 1000
    };
    const newState = filtersReducer(initialState, action);
    expect(newState).toEqual({...initialState, startDate: 1000});
});

test('Should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        payload: 2000
    };
    const newState = filtersReducer(initialState, action);
    expect(newState).toEqual({...initialState, endDate: 2000});
});