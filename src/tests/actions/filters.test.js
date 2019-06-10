import {setTextFilterAction, setSortByFilterAction, setStartDateFilterAction, setEndDateFilterAction} from '../../actions/filters';

test('Testing setTextFilterAction', () => {
    const action = setTextFilterAction('Marathon');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: 'Marathon'
    });
});

test('Testing setTextFilterAction() without argument', () => {
    const action = setTextFilterAction();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: ''
    });
});

test('Testing setSortByFilterAction - sorty by date', () => {
    const action = setSortByFilterAction('date');
    expect(action).toEqual({
        type: 'SET_SORT_BY',
        payload: 'date'
    });
});

test('Testing setSortByFilterAction - sorty by amount', () => {
    const action = setSortByFilterAction('amount');
    expect(action).toEqual({
        type: 'SET_SORT_BY',
        payload: 'amount'
    });
});

test('Testing setStartDateFilterAction', () => {
    const action = setStartDateFilterAction(1000);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        payload: 1000
    });
});

test('Testing setEndDateFilterAction', () => {
    const action = setEndDateFilterAction(2000);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        payload: 2000
    });
});