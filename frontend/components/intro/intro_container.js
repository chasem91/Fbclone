import { connect } from 'react-redux';
import Intro from './intro';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);
