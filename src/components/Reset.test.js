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
});