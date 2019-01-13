import React from 'react';
import {shallow} from 'enzyme';
import Progress from './Progress';

describe('<Progress />', () => {
  // smoke test
  it('Renders without crashing', () => {
    shallow(<Progress />);
  });

  // check props
  it('Renders with correct props', () => {
    const attempt = 'dummy-attempt';
    const guessList = 'dummy-guessList';
    const wrapper = shallow(<Progress attempt={attempt} guessList={guessList}/>);

    expect(wrapper.contains(
      <h2 className="text-center progressBar__current">
        Guess #{attempt}
      </h2>))
    .toEqual(true);

    expect(wrapper.contains(
      <ul className="progressBar__history">
        {guessList}
      </ul>))
    .toEqual(true);
  });
});