import UpdateCourse from './UpdateCourse';
import { connect } from 'react-redux';
import { getCourseById } from '../../store/courses/thunk';

const mapStateToProps = (state) => ({
  authorsList: state.authors.authors,
  courseInfo: state.courses.courseInfo,
  courseFetchError: state.courses.courseFetchError,
});

export default connect(mapStateToProps, { getCourseById })(UpdateCourse);
