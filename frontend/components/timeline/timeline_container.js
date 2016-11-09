import { connect } from 'react-redux';
import Timeline from './timeline';

const mapStateToProps = state => ({
  user: state.user
});


const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
