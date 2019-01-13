import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './Feedback';

describe('<Feedback />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });
});