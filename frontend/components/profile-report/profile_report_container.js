import { connect } from 'react-redux';
import ProfileReport from './timeline';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileReport);
