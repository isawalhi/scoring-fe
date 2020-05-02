import { connect } from 'react-redux';
import * as model from './model';
import GameTable from './GameTable/components/GameTable';

const mapStateToProps = (state) => ({
  sortedPlayers: model.getSortedPlayers(state),
  loading: model.getLoading(state),
});

export default connect(mapStateToProps)(GameTable);
