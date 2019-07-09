import React from 'react';
import {Header} from '../../components/Header';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
//import ReactShallowRenderer from 'react-test-renderer/shallow';

let startLogOut, wrapper;

beforeEach(() => {
    // Testcase using enzyme
    startLogOut = jest.fn();
    wrapper = shallow(<Header startLogOut = {startLogOut}/>);
});

test('The title should be correct', () => {
    expect(wrapper.find('h1').text()).toBe('Keilon Software Solutions Private Ltd');
});

test('Should match the snapshot', () => {
    
    expect(toJSON(wrapper)).toMatchSnapshot();

    // Testcase using react-test-renderer
    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header/>);
    //expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('logout method should be called when logout button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenCalled();
});