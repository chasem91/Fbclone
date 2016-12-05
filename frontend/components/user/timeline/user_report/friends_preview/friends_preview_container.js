import { connect } from 'react-redux';
import FriendsPreview from './friends_preview';

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsPreview);
