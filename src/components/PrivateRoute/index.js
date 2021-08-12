import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  role: state.user.role,
});

export default connect(mapStateToProps, null)(PrivateRoute);
