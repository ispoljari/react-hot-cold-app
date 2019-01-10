import React from 'react';
import {shallow} from 'enzyme';

import Reset from './Reset';

describe('<Reset />', () => {
  it('Renders without chrashing', () => {
    shallow(<Reset />);
  });
});