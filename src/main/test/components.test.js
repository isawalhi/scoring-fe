import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GameTable from '../GameTable/components/GameTable';

describe('<GameTable />', () => {
  const players = [
    {
      name: 'ibrahim',
      score: 1400,
      scoreHistory: [{}],
      namberOfGames: 1,
    },
    {
      name: 'batoul',
      score: 1600,
      scoreHistory: [{}],
      namberOfGames: 1,
    },
  ];
  const props = {
    loading: true,
    sortedPlayers: [],
  };

  const wrapper = shallow(<GameTable {...props} />);

  it('renders correctly - loading true - empty table', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly - loading false - empty table', () => {
    wrapper.setProps({ loading: false });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly - loading false - table with data ', () => {
    wrapper.setProps({ sortedPlayers: players });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly - loading true - table with data ', () => {
    wrapper.setProps({ loading: true });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
