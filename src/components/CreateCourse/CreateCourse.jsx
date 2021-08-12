import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CourseForm from '../CourseForm/';
import './CreateCourse.scss';

import { CREATE_COURSE_FORM_TYPE } from '../../constants';
import { createAuthorsObjectArrayPropType } from '../../utils/propTypesHelper';

const CreateCourse = ({ token, authors, addCourse }) => {
  const [courseAuthors, setCourseAuthors] = useState([]);

  return (
    <CourseForm
      type={CREATE_COURSE_FORM_TYPE}
      courseAuthors={courseAuthors}
      setCourseAuthors={setCourseAuthors}
      authors={authors}
    />
  );
};

CreateCourse.propTypes = {
  token: PropTypes.string,
  authors: createAuthorsObjectArrayPropType(),
  addCourse: PropTypes.func,
};

export default CreateCourse;
