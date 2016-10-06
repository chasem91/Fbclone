import { connect } from 'react-redux';
import Timeline from './timeline';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentProfile: state.profile.currentProfile
});


const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
