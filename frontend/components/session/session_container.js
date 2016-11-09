import { connect } from 'react-redux';
import Session from './session';
import { login, logout, signup } from '../../actions/session_actions';


const mapStateToProps = ({ session }) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
