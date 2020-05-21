import * as React from 'react';
import { shallow } from 'enzyme';
import FairwayInput from './FairwayInput';

describe('<FairwayInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<FairwayInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
