import * as React from 'react';
import { shallow } from 'enzyme';
import GirInput from './GirInput';

describe('<GirInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<GirInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
