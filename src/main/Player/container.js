import { connect } from 'react-redux';
import find from 'lodash/find';
import last from 'lodash/last';
import * as model from '../model';
import Player from './components/Player';

const mapStateToProps = (state, ownProps) => {
  const sortedPlayers = model.getSortedPlayers(state);
  // TODO dispatch an action on click and get the id from there
  const playerId = ownProps.match.params.id;
  const playerData = find(sortedPlayers, ['name', playerId]) || {};
  const { score, scoreHistory, name, numberOfGames } = playerData;
  const lastSeen = scoreHistory && last(scoreHistory).createdAt;
  return {
    name,
    score,
    lastSeen,
    scoreHistory,
    numberOfGames,
  };
};

export default connect(mapStateToProps)(Player);
