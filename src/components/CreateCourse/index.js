import CreateCourse from './CreateCourse';
import { connect } from 'react-redux';
import { addCourse } from '../../store/courses/thunk';

const mapStateToProps = (state) => ({
  authors: state.authors.authors,
});

export default connect(mapStateToProps, { addCourse })(CreateCourse);
