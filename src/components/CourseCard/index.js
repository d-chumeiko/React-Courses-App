import CourseCard from './CourseCard';
import { connect } from 'react-redux';
import { deleteCourse } from '../../store/courses/thunk';

const mapStateToProps = (state) => ({
  role: state.user.role,
  token: state.user.token,
});

export default connect(mapStateToProps, { deleteCourse })(CourseCard);
