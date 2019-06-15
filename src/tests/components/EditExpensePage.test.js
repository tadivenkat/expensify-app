import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseAction, removeExpenseAction, history, match, wrapper;

beforeEach(() => {
    editExpenseAction = jest.fn();
    removeExpenseAction = jest.fn();
    history = {push: jest.fn()};
    match = {params: {id: expenses[0].id}};
    wrapper = shallow(<EditExpensePage 
                        expense={expenses[0]} 
                        history={history} 
                        match={match}
                        editExpenseAction={editExpenseAction}
                        removeExpenseAction={removeExpenseAction}/>);
});

test('Should render EditExpense page correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should handle submit event', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[3]);
    expect(editExpenseAction).toHaveBeenLastCalledWith(expenses[3]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle remove event', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpenseAction).toHaveBeenLastCalledWith(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});