import * as React from 'react';
import { shallow } from 'enzyme';
import HoleSelectInput from './HoleSelectInput';

describe('<HoleSelectInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<HoleSelectInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
