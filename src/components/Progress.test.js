import React from 'react';
import {shallow} from 'enzyme';
import Progress from './Progress';

describe('<Progress />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Progress />);
  });

  // check props
  it('Receives the correct values of props', () => {
    const wrapper = shallow(<Progress attempt='dummy-attempt' guessList='dummy-guessList'/>);
    expect(wrapper.find('ul').text()).toEqual('dummy-guessList');
    expect(wrapper.find('h2').text().includes('dummy-attempt')).toEqual(true);
  });
});