import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './CourseCard.scss';
import Button from '../Button/Button';
import {
  COURSE_CARD_AUTHORS_TITLE,
  COURSE_CARD_DURATION_TITLE,
  COURSE_CARD_CREATED_TITLE,
  COURSE_CARD_SHOW_COURSE_BTN_LABEL,
  COURSES_PATH,
  ADMIN_ROLE,
  COURSES_UPDATE_PATH,
} from '../../constants';
import IconButton from '../IconButton/IconButton';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { createArrayOfStringsPropType } from '../../utils/propTypesHelper';

const CourseCard = ({
  id,
  title,
  description,
  duration,
  creationDate,
  authors,
  role,
  token,
  deleteCourse,
}) => {
  const history = useHistory();

  const showCourseBtnHandler = () => history.push(`${COURSES_PATH}/${id}`);

  const openEditCourse = () => {
    history.push(`${COURSES_UPDATE_PATH}/${id}`);
  };

  const removeCourseBtnHandler = async () => {
    try {
      await deleteCourse(id, token);
    } catch (e) {
      console.warn(e.response);
    }
  };

  return (
    <div className='course-card'>
      <div className='course-card__main'>
        <h2 className='course-card__title'>{title}</h2>
        <p className='course-card__description'>{description}</p>
      </div>
      <div className='course-card__details'>
        <p className='course-card__details__item course-card__details__authors'>
          <span className='bold-title'>{COURSE_CARD_AUTHORS_TITLE}:</span>
          <span> {authors}</span>
        </p>
        <p className='course-card__details__item'>
          <span className='bold-title'>{COURSE_CARD_DURATION_TITLE}: </span>
          <span> {duration}</span>
        </p>
        <p className='course-card__details__item'>
          <span className='bold-title'>{COURSE_CARD_CREATED_TITLE}:</span>
          <span> {creationDate}</span>
        </p>

        <p className='course-card__details__button'>
          <Button
            label={COURSE_CARD_SHOW_COURSE_BTN_LABEL}
            onClick={showCourseBtnHandler}
          />
          {role === ADMIN_ROLE && (
            <>
              <IconButton icon={faPen} onClick={openEditCourse} />
              <IconButton icon={faTrashAlt} onClick={removeCourseBtnHandler} />
            </>
          )}
        </p>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.string,
  creationDate: PropTypes.string,
  role: PropTypes.string,
  authors: createArrayOfStringsPropType(),
  fetchData: PropTypes.func,
};

export default CourseCard;
