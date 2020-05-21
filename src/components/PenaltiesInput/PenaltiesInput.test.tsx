import * as React from 'react';
import { shallow } from 'enzyme';
import PenaltiesInput from './PenaltiesInput';

describe('<PenaltiesInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<PenaltiesInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
