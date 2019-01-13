import React from 'react';
import {shallow} from 'enzyme';

import Form from '../Form/Form';

describe('<Form />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Form />);
  });
});