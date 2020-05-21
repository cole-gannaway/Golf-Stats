import * as React from 'react';
import { shallow } from 'enzyme';
import SandShotsInput from './SandShotsInput';

describe('<SandShotsInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<SandShotsInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
