import React from 'react';
import {shallow} from 'enzyme';

import Reset from './Reset';

describe('<Reset />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Reset />);
  });

  // check props
  it('onClick method receives the resetGame prop', () => {
    const wrapper = shallow(<Reset resetGame='fn'/>);
    expect(wrapper.find('button').props().onClick).toEqual('fn');
  });

  // check if callback gets called on click event
  it('Should call resetGame callback when button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Reset resetGame={callback}/>);
    wrapper.find('button').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});