import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { mapAuthorsById } from '../../utils/authorsMapper';
import './CourseInfo.scss';
import { pipeDuration } from '../../utils/timeConverter';
import {
  BACK_TO_COURSE_LINK_TITLE,
  COURSES_PATH,
  COURSE_CARD_AUTHORS_TITLE,
  COURSE_CARD_CREATED_TITLE,
  COURSE_CARD_DURATION_TITLE,
  COURSE_CARD_ID_TITLE,
} from '../../constants';
import {
  createAuthorsObjectArrayPropType,
  createCourseInitalInfoPropType,
} from '../../utils/propTypesHelper';

const CourseInfo = ({
  authorsList,
  courseFetchError,
  courseInfo,
  getCourseById,
}) => {
  const params = useParams();

  const { courseId } = params;
  const { title, description, duration, creationDate, authors } = courseInfo;

  useEffect(() => {
    getCourseById(courseId);
  }, [getCourseById, courseId]);

  if (courseFetchError) {
    return <h2>{courseFetchError}</h2>;
  }

  return (
    <div className='courses-info'>
      <p className='courses-info__back-link'>
        <NavLink to={COURSES_PATH}>{BACK_TO_COURSE_LINK_TITLE}</NavLink>
      </p>

      <h1 className='courses-info__heading'>{title}</h1>

      <div className='courses-info__main'>
        <p className='courses-info__description'>{description}</p>

        <div className='courses-info__sidebar'>
          <div className='courses-info_item'>
            <span className='bold-title'>{COURSE_CARD_ID_TITLE}: </span>
            {courseId}
          </div>
          <div className='courses-info_item'>
            <span className='bold-title'>{COURSE_CARD_DURATION_TITLE}: </span>
            {pipeDuration(duration)}
            <span> hours</span>
          </div>
          <div className='courses-info_item'>
            <span className='bold-title'>{COURSE_CARD_CREATED_TITLE}: </span>
            {creationDate?.replaceAll('/', '.')}
          </div>
          <div className='courses-info_item'>
            <span className='bold-title'>{COURSE_CARD_AUTHORS_TITLE}: </span>
            <p>{mapAuthorsById(authors, authorsList)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseInfo.propTypes = {
  authorsList: createAuthorsObjectArrayPropType(),
  courseFetchError: PropTypes.string,
  courseInfo: createCourseInitalInfoPropType(),
  getCourseById: PropTypes.func,
};

export default CourseInfo;
