import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { getUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user
});


const mapDispatchToProps = dispatch => ({
  getUsers: string => dispatch(getUsers(string))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
