import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
});

test('Should render AddExpensePage correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should handle onSubmit event', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[2]);
});