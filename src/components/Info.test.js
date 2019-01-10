import React from 'react';
import {shallow} from 'enzyme';

import Info from './Info';

describe('<Info />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Info />);
  });

  // check if handleShow gets called on btn click
  it('Should call handleShow on btn click and change state', () => {
    const wrapper = shallow(<Info />);
    expect(wrapper.state('show')).toBe(false);
    wrapper.find('button').simulate('click', {
      preventDefault() {}
    });
    expect(wrapper.state('show')).toBe(true);
  });
});