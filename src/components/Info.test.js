import React from 'react';
import {shallow} from 'enzyme';

import Info from './Info';

describe('<Info />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Info />);
  });
});