import React from 'react';
import Header from '../../components/Header';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
//import ReactShallowRenderer from 'react-test-renderer/shallow';

test('Testing Header component', () => {
    // Testcase using enzyme
    const wrapper = shallow(<Header/>);
    //expect(wrapper.find('h1').text()).toBe('Keilon Software Solutions Private Ltd');
    expect(toJSON(wrapper)).toMatchSnapshot();
    
    // Testcase using react-test-renderer
    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header/>);
    //expect(renderer.getRenderOutput()).toMatchSnapshot();
});