import { connect } from 'react-redux';
import Intro from './intro';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);
