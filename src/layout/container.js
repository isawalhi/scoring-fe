import { connect } from 'react-redux';
import * as model from './model';
import Layout from './components/Layout';

const mapStateToProps = (state) => ({
  showRequestLoader: model.showRequestLoader(state),
});

export default connect(mapStateToProps)(Layout);
