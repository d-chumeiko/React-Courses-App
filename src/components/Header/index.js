import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../store/user/thunk';

const mapStateToProps = (state) => ({
  name: state.user.name,
  isAuth: state.user.isAuth,
  token: state.user.token,
});

export default connect(mapStateToProps, { logout })(Header);
