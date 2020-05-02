import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Layout from '../components/Layout';

it('renders', () => {
  const wrapper = shallow(<Layout />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
