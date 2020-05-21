import * as React from 'react';
import { shallow } from 'enzyme';
import OptionalAdvancedInput from './OptionalAdvancedInput';

describe('<OptionalAdvancedInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<OptionalAdvancedInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
