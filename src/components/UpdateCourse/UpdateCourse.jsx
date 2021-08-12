/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './UpdateCourse.scss';
import { UPDATE_COURSE_FORM_TYPE } from '../../constants';
import CourseForm from '../CourseForm';
import { useState } from 'react';
import {
  createAuthorsObjectArrayPropType,
  createCourseInitalInfoPropType,
} from '../../utils/propTypesHelper';

const UpdateCourse = ({
  authorsList,
  courseFetchError,
  courseInfo,
  getCourseById,
}) => {
  const params = useParams();
  const { courseId } = params;

  const [courseAuthors, setCourseAuthors] = useState([]);
  const [tmpUpdateAuthors, setTmpUpdateAuthors] = useState([]);

  const initialValues = { ...courseInfo };
  const { authors } = initialValues;

  useEffect(() => {
    getCourseById(courseId);
  }, [courseId, getCourseById]);

  useEffect(() => {
    if (authors && authorsList.length) {
      const courseAuthors = authors.map((id) =>
        authorsList.find((el) => el.id === id)
      );

      const tmpAuthors = authorsList
        .map((el) => {
          const found = courseAuthors.find(({ id }) => el.id === id);

          if (!found) {
            return el;
          }

          return null;
        })
        .filter((el) => el !== null);

      setCourseAuthors(courseAuthors);
      setTmpUpdateAuthors(tmpAuthors);
    }
  }, [authors, authorsList]);

  if (courseFetchError) {
    return <h2>{courseFetchError}</h2>;
  }

  return (
    <CourseForm
      courseId={courseId}
      type={UPDATE_COURSE_FORM_TYPE}
      authors={authorsList}
      tmpUpdateAuthors={tmpUpdateAuthors}
      courseAuthors={courseAuthors}
      initialValues={courseInfo}
      setCourseAuthors={setCourseAuthors}
    />
  );
};

UpdateCourse.propTypes = {
  authorsList: createAuthorsObjectArrayPropType(),
  courseFetchError: PropTypes.string,
  courseInfo: createCourseInitalInfoPropType(),
  getCourseById: PropTypes.func,
};

export default UpdateCourse;
