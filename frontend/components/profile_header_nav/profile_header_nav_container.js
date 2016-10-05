import { connect } from 'react-redux';
import ProfileHeaderNav from './profile_header_nav';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeaderNav);
