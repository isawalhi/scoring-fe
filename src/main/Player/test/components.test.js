import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Player from '../components/Player';
import LineChart from '../components/LineChart';

it('renders <Player />', () => {
  const wrapper = shallow(<Player />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders <LineChart />', () => {
  const wrapper = shallow(<LineChart />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
