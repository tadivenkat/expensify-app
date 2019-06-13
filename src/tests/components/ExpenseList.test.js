import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
import filters from '../fixtures/filters';

import toJSON from 'enzyme-to-json';

test('Testing ExpenseList Component Snapshot', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} filters={filters}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Testing ExpenseList Component Snapshot with empty expenses as input', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} filters={filters}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});