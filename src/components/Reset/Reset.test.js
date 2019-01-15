import React from 'react';
import { shallow, mount} from 'enzyme';

import Reset from './Reset';

describe('<Reset />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Reset />);
  });

  // check if callback gets called on click event
  it('Should call resetGame callback when button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<Reset resetGame={callback}/>);
    wrapper.find('button').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});