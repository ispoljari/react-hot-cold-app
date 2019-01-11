import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('<App />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<App />);
  });
});
