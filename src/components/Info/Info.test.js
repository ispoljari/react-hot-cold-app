import React from 'react';
import {shallow, mount, ReactWrapper} from 'enzyme';

import Info from './Info';

describe('<Info />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Info />);
  });

  // should call handle show on btn click
  it('Should call handleShow on btn click and change state', () => {
    const wrapper = mount(<Info />);
    expect(wrapper.state('show')).toBe(false);
    wrapper.find('button').simulate('click', {
      preventDefault() {}
    });
    expect(wrapper.state('show')).toBe(true);
  });

  // check if handleClose functions properly
  it('Should call handleShow on btn click and change state', () => {
    const wrapper = mount(<Info />);
    expect(wrapper.state('show')).toBe(false);
    wrapper.instance().handleShow();
    expect(wrapper.state('show')).toBe(true);
    wrapper.instance().handleClose();
    expect(wrapper.state('show')).toBe(false);
  });
});