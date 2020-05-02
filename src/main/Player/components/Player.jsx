import React from 'react';
import { Card } from 'antd';
import styles from './player.module.css';
import Chart from './LineChart';

const Player = ({ scoreHistory, name, lastSeen, numberOfGames, score }) => {
  return (
    <div className={styles.playerContainer}>
      <Card title={name} bordered={false}>
        <p>Number of played games: {numberOfGames}</p>
        <p>Player score: {score}</p>
        <p>Last seen: {lastSeen}</p>
      </Card>
      <Chart data={scoreHistory} score={score} />
    </div>
  );
};

export default Player;
