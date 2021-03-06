import filterAndSortExpenses from '../../selectors/expenses';
import { totalExpenditure } from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('Testing text filter', () => {
    const filters = {
        text: 'go',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = filterAndSortExpenses(expenses, filters);
    expect(result).toEqual([expenses[3]]);
});

test('Testing start date filter', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: 100,
        endDate: undefined    
    };
    const result = filterAndSortExpenses(expenses, filters);
    expect(result).toEqual([expenses[3], expenses[2], expenses[0]]);       
});

test('Testing end date filter', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: 500    
    };
    const result = filterAndSortExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[3]]);       
});

test('Testing date range filter', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: 5000,
        endDate: 10000    
    };
    const result = filterAndSortExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);       
});

test('Testing sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined    
    };
    const result = filterAndSortExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1], expenses[3]]);
});

test('Testing sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined    
    };
    const result = filterAndSortExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[3], expenses[2], expenses[0]]);
});

test('Total expenditure should be correct', () => {
    const total = totalExpenditure(expenses);
    expect(total).toEqual(76000);
});

test('Total expenditure should be zero if an empty array of expenses is passed', () => {
    const total = totalExpenditure([]);
    expect(total).toEqual(0);
});

test('Total expenditure should be correct even if array contains a single element', () => {
    const total = totalExpenditure([expenses[0]]);
    expect(total).toEqual(10000);
});