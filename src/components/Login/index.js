import Login from './Login';
import { connect } from 'react-redux';
import { login } from '../../store/user/thunk';

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  token: state.user.token,
});

export default connect(mapStateToProps, { login })(Login);
