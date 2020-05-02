import { connect } from 'react-redux';
import * as actions from './actions';
import GameForm from './components/GameForm';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => dispatch(actions.doSubmit(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);
