import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import UserActionBar from './user_action_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserActionBar);
