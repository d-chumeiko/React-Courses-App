import Courses from './Courses';
import { connect } from 'react-redux';
import { getCourses } from '../../store/courses/thunk';
import { getAuthors } from '../../store/authors/thunk';

const mapStateToProps = (state) => ({
  courses: state.courses.courses,
  authors: state.authors.authors,
  isAuth: state.user.isAuth,
  token: state.user.token,
  role: state.user.role,
});

export default connect(mapStateToProps, { getCourses, getAuthors })(Courses);
