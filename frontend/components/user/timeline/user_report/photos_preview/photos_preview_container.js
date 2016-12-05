import { connect } from 'react-redux';
import PhotosPreview from './photos_preview';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosPreview);
