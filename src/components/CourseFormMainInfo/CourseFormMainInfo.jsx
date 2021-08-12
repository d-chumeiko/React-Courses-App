import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../CourseForm/CourseForm.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { pipeDuration } from '../../utils/timeConverter';
import {
  APPLY_BUTTON_LABEL,
  CREATE_COURSE_BTN_LABEL,
  CREATE_COURSE_FORM_TYPE,
  DESCRIPTION_FIELD_LABEL,
  DESCRIPTION_FIELD_PLACEHOLDER,
  DURATION_FIELD_LABEL,
  DURATION_FIELD_PLACEHOLDER,
  TITLE_FIELD_LABEL,
  TITLE_FIELD_PLACEHOLDER,
  UPDATE_COURSE_BUTTON_LABEL,
  UPDATE_COURSE_FORM_TYPE,
} from '../../constants';
import { createCourseInitalInfoPropType } from '../../utils/propTypesHelper';

const CourseFormMainInfo = ({ handleBtnClick, type, initialValues }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');

  let applyBtnLabel = APPLY_BUTTON_LABEL;

  if (type === UPDATE_COURSE_FORM_TYPE) {
    applyBtnLabel = UPDATE_COURSE_BUTTON_LABEL;
  }

  if (type === CREATE_COURSE_FORM_TYPE) {
    applyBtnLabel = CREATE_COURSE_BTN_LABEL;
  }

  useEffect(() => {
    if (type === UPDATE_COURSE_FORM_TYPE && Object.keys(initialValues).length) {
      const { title, description, duration } = initialValues;

      setTitle(title);
      setDescription(description);
      setDuration(duration.toString());
    }
  }, [type, initialValues]);

  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionInputChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDurationInputChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <div className='course-form__top-line'>
      <div className='course-form__btn'>
        <Button
          label={applyBtnLabel}
          onClick={() => handleBtnClick(title, description, duration)}
        />
      </div>
      <div className='course-form__item'>
        <Input
          label={TITLE_FIELD_LABEL}
          placeholder={TITLE_FIELD_PLACEHOLDER}
          value={title}
          onChange={handleTitleInputChange}
          style={{ width: '12rem', borderColor: '#e69d00' }}
        />
      </div>
      <div className='course-form__item'>
        <Input
          type='textarea'
          label={DESCRIPTION_FIELD_LABEL}
          placeholder={DESCRIPTION_FIELD_PLACEHOLDER}
          value={description}
          onChange={handleDescriptionInputChange}
          rows='5'
        />
      </div>

      <div className='course-form__item'>
        <Input
          label={DURATION_FIELD_LABEL}
          placeholder={DURATION_FIELD_PLACEHOLDER}
          value={duration}
          onChange={handleDurationInputChange}
          type='number'
          style={{ width: '100%' }}
        />
        <p className='duration__converted-output'>
          <span>
            {DURATION_FIELD_LABEL}:
            <span className='bold-title'> {pipeDuration(duration)}</span>
          </span>
          <span> hours</span>
        </p>
      </div>
    </div>
  );
};

CourseFormMainInfo.propTypes = {
  handleBtnClick: PropTypes.func,
  type: PropTypes.string,
  initialValues: createCourseInitalInfoPropType(),
};

export default CourseFormMainInfo;
