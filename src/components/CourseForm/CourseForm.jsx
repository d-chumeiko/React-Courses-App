import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CourseForm.scss';
import CourseFormMainInfo from '../CourseFormMainInfo/CourseFormMainInfo';
import CourseFormAuthors from '../CourseFormAuthors/CourseFormAuthors';
import {
  COURSES_PATH,
  CREATE_COURSE_FORM_TYPE,
  FILL_IN_ALL_FIELDS_MESSAGE,
  MIN_DURATION_VALUE,
  MIN_INPUT_TEXT_LENGTH,
  UPDATE_COURSE_FORM_TYPE,
} from '../../constants';
import {
  createAuthorsObjectArrayPropType,
  createCourseInitalInfoPropType,
} from '../../utils/propTypesHelper';

const CourseForm = ({
  courseId,
  type,
  token,
  authors,
  tmpUpdateAuthors,
  courseAuthors,
  initialValues,
  addAuthor,
  addCourse,
  updateCourse,
  setCourseAuthors,
}) => {
  const history = useHistory();

  const handleBtnClick = async (title, description, duration) => {
    if (
      title.length < MIN_INPUT_TEXT_LENGTH ||
      description.length < MIN_INPUT_TEXT_LENGTH ||
      duration < MIN_DURATION_VALUE ||
      courseAuthors.length === 0
    ) {
      alert(FILL_IN_ALL_FIELDS_MESSAGE);
      return;
    }

    const data = {
      title,
      description,
      duration: parseInt(duration),
      authors: courseAuthors.map(({ id }) => id),
    };

    if (type === CREATE_COURSE_FORM_TYPE) {
      await addCourse(data, token);
    }

    if (type === UPDATE_COURSE_FORM_TYPE) {
      await updateCourse(courseId, data, token);
    }

    history.push(COURSES_PATH);
  };

  return (
    <div className='course-form'>
      <CourseFormMainInfo
        type={type}
        initialValues={initialValues}
        handleBtnClick={handleBtnClick}
      />
      <CourseFormAuthors
        token={token}
        type={type}
        authors={authors}
        courseAuthors={courseAuthors}
        tmpUpdateAuthors={tmpUpdateAuthors}
        initialValues={initialValues}
        addAuthor={addAuthor}
        setCourseAuthors={setCourseAuthors}
      />
    </div>
  );
};

CourseForm.propTypes = {
  courseId: PropTypes.string,
  type: PropTypes.string,
  token: PropTypes.string,
  authors: createAuthorsObjectArrayPropType(),
  tmpUpdateAuthors: createAuthorsObjectArrayPropType(),
  courseAuthors: createAuthorsObjectArrayPropType(),
  initialValues: createCourseInitalInfoPropType(),
  addAuthor: PropTypes.func,
  addCourse: PropTypes.func,
  updateCourse: PropTypes.func,
  setCourseAuthors: PropTypes.func,
};

export default CourseForm;
