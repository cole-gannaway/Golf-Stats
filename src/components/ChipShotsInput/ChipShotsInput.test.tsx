import * as React from 'react';
import { shallow } from 'enzyme';
import ChipShotsInput from './ChipShotsInput';

describe('<ChipShotsInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<ChipShotsInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
