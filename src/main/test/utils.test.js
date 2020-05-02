import { expect } from 'chai';
import { getSortedPlayers, calculateElo } from '../utils';
import { singleGame, threeGames, multipleGames } from './fixtures';

describe('getSortedPlayers()', () => {
  it('should return empty array for first time playing', () => {
    expect(getSortedPlayers(singleGame.list)).to.eql([]);
  });

  it('should return one player who played more than 2 games', () => {
    const sortedPlayer = getSortedPlayers(threeGames.input.list);
    expect(sortedPlayer).to.eql(threeGames.expected);
  });

  it('should return sorted Players who played a lot of games', () => {
    const sortedPlayer = getSortedPlayers(multipleGames.list);
    expect(sortedPlayer.length).to.eql(8);
    expect(sortedPlayer[0].name).to.eql('Baby peach');
    expect(sortedPlayer[0].score).to.eql(1109);
    expect(sortedPlayer[0].numberOfGames).to.eql(6);
  });
});

describe('calculateElo()', () => {
  it('Two players with the same score', () => {
    expect(calculateElo(1000, 1000)).to.eql({
      newScoreA: 1016,
      newScoreB: 984,
    });
  });

  it('Huge differnece between the players - the one with the highest won the game', () => {
    expect(calculateElo(1600, 1000)).to.eql({
      newScoreA: 1601,
      newScoreB: 999,
    });
  });

  it('Small differnece between the players - the one with the highest won the game', () => {
    expect(calculateElo(1050, 1020)).to.eql({
      newScoreA: 1065,
      newScoreB: 1005,
    });
  });

  it('Huge differnece between the score - the one with the lowest score won the game', () => {
    expect(calculateElo(1000, 1600)).to.eql({
      newScoreA: 1031,
      newScoreB: 1569,
    });
  });

  it('Small differnece between the score - the one with the lowest score won the game', () => {
    expect(calculateElo(1020, 1050)).to.eql({
      newScoreA: 1037,
      newScoreB: 1033,
    });
  });
});
