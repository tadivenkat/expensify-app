import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import {Filters} from '../../components/Filters';
import filters from '../fixtures/filters';

let setTextFilterAction, setStartDateFilterAction, setEndDateFilterAction, setSortByFilterAction, wrapper;
beforeEach(() => {
    setTextFilterAction = jest.fn();
    setStartDateFilterAction = jest.fn();
    setEndDateFilterAction = jest.fn();
    setSortByFilterAction = jest.fn();
    wrapper = shallow(<Filters 
                        setTextFilterAction={setTextFilterAction}
                        setStartDateFilterAction={setStartDateFilterAction}
                        setEndDateFilterAction={setEndDateFilterAction}
                        setSortByFilterAction={setSortByFilterAction}
                        filters={filters}/>);
});

test('Should render Filters component correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should handle text change', () => {
    const value = 'Marathon';
    wrapper.find('input').simulate('change', {target: {value}});
    expect(setTextFilterAction).toHaveBeenLastCalledWith(value);
});

test('Should sort by date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {target: {value}});
    expect(setSortByFilterAction).toHaveBeenLastCalledWith(value);
});

test('Should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {target: {value}});
    expect(setSortByFilterAction).toHaveBeenLastCalledWith(value);
});

test('Should handle start date change', () => {
    const value = 1000;
    wrapper.find('DatePicker').at(0).simulate('change', {date: value});
    expect(setStartDateFilterAction).toHaveBeenLastCalledWith({date: value});
});

test('Should handle end date change', () => {
    const value = 100001;
    wrapper.find('DatePicker').at(1).simulate('change', {date: value});
    expect(setEndDateFilterAction).toHaveBeenLastCalledWith({date: value});
});