import * as React from 'react';
import { shallow } from 'enzyme';
import PuttsInput from './PuttsInput';

describe('<PuttsInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<PuttsInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
