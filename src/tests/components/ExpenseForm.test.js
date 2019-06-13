import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Testing ExpenseForm component snapshot', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Testing ExpenseForm component snapshot with default expense property', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render error message when the form is invalid', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should update description state when input changes', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = "Test Expense Description";
    wrapper.find('input').at(0).simulate('change', { target: {value}});
    expect(wrapper.state('description')).toBe(value);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should update note state when textarea changes', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = "Test Expense Note";
    wrapper.find('textarea').simulate('change', { target: {value}});
    expect(wrapper.state('note')).toBe(value);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should update amount state when the amount input changes', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = "30";
    wrapper.find('input').at(1).simulate('change', { target: {value}});
    expect(wrapper.state('amount')).toBe(value);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should NOT update amount state when the amount input has invalid value', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = "12.123";
    wrapper.find('input').at(1).simulate('change', { target: {value}});
    expect(wrapper.state('amount')).toBe('');
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Testing form submit with valid data', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    // No errors as the form is valid
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0]);
});

test('Should update the date property of the state on change of date', () => {
    const newDate = 4123;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find("DatePicker").prop("onChange")(newDate);
    expect(wrapper.state('createdAt')).toBe(newDate);
});