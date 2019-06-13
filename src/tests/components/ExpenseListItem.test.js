import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Testing ExpenseListItem Component Snapshot', () => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[0]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});