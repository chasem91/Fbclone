import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile_actions';
import ProfileActionBar from './profile_action_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileActionBar);
