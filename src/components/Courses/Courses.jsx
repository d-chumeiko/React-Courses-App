import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Courses.scss';
import Button from '../Button/Button';
import Search from '../Search/Search';
import CoursesList from '../CoursesList/CoursesList';
import {
  createAuthorsObjectArrayPropType,
  createCoursessObjectArrayPropType,
} from '../../utils/propTypesHelper';
import { filterByIdTitle } from '../../utils/filterByIdTitle';
import {
  ADD_NEW_COURSE_BUTTON_LABEL,
  ADMIN_ROLE,
  COURSES_ADD_PATH,
} from '../../constants';

const Courses = ({ role, token, courses, authors, getCourses, getAuthors }) => {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getCourses();
    getAuthors();
  }, [getCourses, getAuthors]);

  const filteredCourses = useMemo(
    () => filterByIdTitle(courses, searchValue),
    [courses, searchValue]
  );

  return (
    <div className='courses'>
      <div className='courses__actions-line'>
        <Search setSearchValue={setSearchValue} />

        {role === ADMIN_ROLE && (
          <Button
            label={ADD_NEW_COURSE_BUTTON_LABEL}
            onClick={() => history.push(COURSES_ADD_PATH)}
          />
        )}
      </div>

      <div className='courses__list'>
        <CoursesList courses={filteredCourses} authorsList={authors} />
      </div>
    </div>
  );
};

Courses.propTypes = {
  token: PropTypes.string,
  role: PropTypes.string,
  courses: createCoursessObjectArrayPropType(),
  authors: createAuthorsObjectArrayPropType(),
  getCourses: PropTypes.func,
  getAuthors: PropTypes.func,
};

export default Courses;
