import { connect } from 'react-redux';
import Timeline from './timeline';
import { getPosts } from '../../actions/timeline_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    user: state.user.profile,
    timeline: state.timeline
  };
};


const mapDispatchToProps = dispatch => ({
  getPosts: (user_id) => dispatch(getPosts(user_id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
