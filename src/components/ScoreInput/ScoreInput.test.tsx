import * as React from 'react';
import { shallow } from 'enzyme';
import ScoreInput from './ScoreInput';

describe('<ScoreInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<ScoreInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
