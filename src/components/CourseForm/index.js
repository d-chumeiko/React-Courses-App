import CourseForm from './CourseForm';
import { connect } from 'react-redux';
import { addAuthor } from '../../store/authors/thunk';
import { addCourse, updateCourse } from '../../store/courses/thunk';

const mapStateToProps = (state) => ({
  token: state.user.token,
});

export default connect(mapStateToProps, { addAuthor, addCourse, updateCourse })(
  CourseForm
);
