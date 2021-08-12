import Registration from './Registration';
import { connect } from 'react-redux';
import { register } from '../../store/user/thunk';

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, { register })(Registration);
