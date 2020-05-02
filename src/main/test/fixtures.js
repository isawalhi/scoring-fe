export const singleGame = {
  updatedAt: '2020-04-18T05:10:01.398Z',
  list: [
    {
      createdAt: '2020-04-18T05:10:01.398Z',
      standings: ['Mario', 'Bowser', 'Luigi', 'Villager'],
    },
  ],
};

export const threeGames = {
  input: {
    updatedAt: '2020-04-18T05:10:01.398Z',
    list: [
      {
        createdAt: '2020-04-18T05:10:01.398Z',
        standings: ['Mario', 'Bowser', 'Luigi', 'Villager'],
      },
      {
        createdAt: '2020-04-18T05:10:01.398Z',
        standings: ['Mario1', 'Bowser', 'Luigi1', 'Villager1'],
      },
      {
        createdAt: '2020-04-18T05:10:01.398Z',
        standings: ['Mario1', 'Luigi', 'Bowser', 'Villager1'],
      },
    ],
  },
  expected: [
    {
      key: 'Bowser',
      name: 'Bowser',
      numberOfGames: 3,
      score: 1008,
      scoreHistory: [
        {
          createdAt: '2020-04-18T05:10:01.398Z',
          score: 1015,
        },
        {
          createdAt: '2020-04-18T05:10:01.398Z',
          score: 1028,
        },
        {
          createdAt: '2020-04-18T05:10:01.398Z',
          score: 1008,
        },
      ],
    },
  ],
};

export const multipleGames = {
  updatedAt: '2020-04-18T05:07:40.371Z',
  list: [
    {
      createdAt: '2020-04-09T05:07:40.371Z',
      standings: ['Baby peach', 'Waluigi', 'Mario', 'Villager'],
    },
    {
      createdAt: '2020-04-10T05:07:40.371Z',
      standings: ['Baby peach', 'Luigi', 'Waluigi', 'Villager'],
    },
    {
      createdAt: '2020-04-11T05:07:40.371Z',
      standings: ['Mario', 'Luigi', 'Dry bones', 'Bowser'],
    },
    {
      createdAt: '2020-04-12T05:07:40.371Z',
      standings: ['Dry bones', 'Black shy guy', 'Waluigi', 'Villager'],
    },
    {
      createdAt: '2020-04-13T05:07:40.371Z',
      standings: ['Black shy guy', 'Mario', 'Villager', 'Baby peach'],
    },
    {
      createdAt: '2020-04-14T05:07:40.371Z',
      standings: ['Dry bones', 'Mario', 'Bowser', 'Villager'],
    },
    {
      createdAt: '2020-04-15T05:07:40.371Z',
      standings: ['Baby peach', 'Bowser', 'Black shy guy', 'Mario'],
    },
    {
      createdAt: '2020-04-16T05:07:40.371Z',
      standings: ['Dry bones', 'Villager', 'Waluigi', 'Mario'],
    },
    {
      createdAt: '2020-04-17T05:07:40.371Z',
      standings: ['Baby peach', 'Waluigi', 'Luigi', 'Black shy guy'],
    },
    {
      createdAt: '2020-04-18T05:07:40.371Z',
      standings: ['Luigi', 'Baby peach', 'Waluigi', 'Black shy guy'],
    },
  ],
};
