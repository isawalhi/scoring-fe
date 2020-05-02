import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GameForm from '../components/GameForm';

it('renders', () => {
  const wrapper = shallow(<GameForm />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
