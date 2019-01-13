import React from 'react';
import {shallow} from 'enzyme';

import Banner from '../Banner/Banner';

describe('Banner />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Banner />);
  });
});