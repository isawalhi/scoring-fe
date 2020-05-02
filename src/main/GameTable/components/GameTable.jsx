import React from 'react';
import { Link } from 'react-router-dom';
import { Table as AntTable } from 'antd';

const GameTable = ({ sortedPlayers, loading }) => {
  const columns = [
    {
      title: 'Player Name',
      dataIndex: 'name',
      key: 'name',
      // TODO get path from routes
      // eslint-disable-next-line react/display-name
      render: (text) => <Link to={`player/${text}`}>{text}</Link>,
    },
    {
      title: 'Number of Games',
      dataIndex: 'numberOfGames',
      key: 'numberOfGames',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
  ];
  return (
    <AntTable
      pagination={{ pageSize: 10 }}
      columns={columns}
      dataSource={sortedPlayers}
      loading={sortedPlayers.length === 0 && loading}
    />
  );
};

export default GameTable;
