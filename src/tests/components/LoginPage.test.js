import React from 'react';
import {LoginPage} from '../../components/LoginPage';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

let startLogin, wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin = {startLogin}/>);
});
test('Should render LoginPage correctly', () => {
    // Testcase using enzyme
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should call startLogin when button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(startLogin).toHaveBeenCalled();
});