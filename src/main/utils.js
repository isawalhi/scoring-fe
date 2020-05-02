import find from 'lodash/find';
import filter from 'lodash/filter';
import orderBy from 'lodash/orderBy';
import forEach from 'lodash/forEach';
import EloRank from 'elo-rank';

export const PLAYER_INITIAL_SCORE = 1000;
export const NUMBER_OF_MATCHES_TO_CONSIDER = 3;

export const createNewPlayer = (name) => {
  return {
    key: name,
    numberOfGames: 0,
    scoreHistory: [],
    score: PLAYER_INITIAL_SCORE,
    name,
  };
};

export const calculateElo = (playerA, playerB) => {
  const elo = new EloRank(32);
  // Gets expected score for first parameter
  const expectedScoreA = elo.getExpected(playerA, playerB);
  const expectedScoreB = elo.getExpected(playerB, playerA);
  // update score, 1 if won 0 if lost
  const newScoreA = elo.updateRating(expectedScoreA, 1, playerA);
  const newScoreB = elo.updateRating(expectedScoreB, 0, playerB);

  return { newScoreA, newScoreB };
};

export const calculateGamePlayersScores = (
  standings,
  createdAt,
  allPlayers
) => {
  let playerA = find(allPlayers, ['name', standings[0]]);
  if (!playerA) {
    playerA = createNewPlayer(standings[0]);
    allPlayers.push(playerA);
  }

  for (let i = 1; i < standings.length; i += 1) {
    let playerB = find(allPlayers, ['name', standings[i]]);
    if (!playerB) {
      playerB = createNewPlayer(standings[i]);
      allPlayers.push(playerB);
    }
    const updatedScoreAB = calculateElo(playerA.score, playerB.score);
    playerA.score = updatedScoreAB.newScoreA;
    playerB.score = updatedScoreAB.newScoreB;
  }
  playerA.numberOfGames += 1;
  playerA.scoreHistory.push({
    score: playerA.score,
    createdAt,
  });
  standings.splice(0, 1);
  if (standings.length > 0) {
    calculateGamePlayersScores(standings, createdAt, allPlayers);
  }
};

export const getSortedPlayers = (listOfGames, allPlayers = []) => {
  forEach(listOfGames, (game) => {
    const { createdAt, standings } = game;
    calculateGamePlayersScores([...standings], createdAt, allPlayers);
  });
  return orderBy(
    filter(
      allPlayers,
      (player) => player.numberOfGames >= NUMBER_OF_MATCHES_TO_CONSIDER
    ),
    ['score', 'numberOfGames'],
    ['desc', 'desc']
  );
};
