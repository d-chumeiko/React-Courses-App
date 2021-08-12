/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../CourseForm/CourseForm.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {
  ADD_AUTHOR_BTN_LABEL,
  ADD_AUTHOR_SECTION_HEADING,
  AUTHORS_SECTION_HEADING,
  AUTHOR_NAME_FIELD_LABEL,
  AUTHOR_NAME_FIELD_PLACEHOLDER,
  COURSE_AUTHORS_SECTION_HEADING,
  CREATE_AUTHOR_BTN_LABEL,
  CREATE_COURSE_FORM_TYPE,
  DELETE_AUTHOR_BTN_LABEL,
  EMPTY_AUTHOR_LIST_MESSAGE,
  UPDATE_COURSE_FORM_TYPE,
} from '../../constants';
import {
  createAuthorsObjectArrayPropType,
  createCourseInitalInfoPropType,
} from '../../utils/propTypesHelper';

const CourseFormAuthors = ({
  token,
  type,
  authors,
  courseAuthors,
  tmpUpdateAuthors,
  initialValues,
  addAuthor,
  setCourseAuthors,
}) => {
  const [author, setAuthor] = useState('');
  const [tmpAuthors, setTmpAuthors] = useState([]);

  useEffect(() => {
    if (type === CREATE_COURSE_FORM_TYPE) {
      setTmpAuthors([...authors]);
    }

    if (type === UPDATE_COURSE_FORM_TYPE) {
      setTmpAuthors(tmpUpdateAuthors);
    }
  }, [type, initialValues, authors, tmpUpdateAuthors]);

  const handleAuthorInputChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCreateAuthorBtnClick = async () => {
    if (author.length > 2) {
      addAuthor({ name: author }, token);
    }
  };

  const handleAddAuthorBtnClick = (id) => {
    const author = tmpAuthors.find((author) => id === author.id);
    const authors = tmpAuthors.filter((author) => id !== author.id);

    setCourseAuthors([...courseAuthors, author]);
    setTmpAuthors(authors);
  };

  const handleDeleteAuthorBtnClick = (id) => {
    const author = courseAuthors.find((author) => id === author.id);
    const authors = courseAuthors.filter((author) => id !== author.id);

    setCourseAuthors(authors);
    setTmpAuthors([...tmpAuthors, author]);
  };

  const authorsList = tmpAuthors.map(({ id, name }) => (
    <li key={id}>
      <span>{name}</span>
      <Button
        label={ADD_AUTHOR_BTN_LABEL}
        onClick={() => handleAddAuthorBtnClick(id)}
      />
    </li>
  ));

  const courseAuthorsList = courseAuthors
    ? courseAuthors.map(({ id, name }) => (
        <li key={id}>
          <span>{name}</span>
          <Button
            label={DELETE_AUTHOR_BTN_LABEL}
            onClick={() => handleDeleteAuthorBtnClick(id)}
          />
        </li>
      ))
    : '';

  return (
    <div className='course-form__bottom-line'>
      <div className='authors'>
        <div className='authors__add'>
          <h3 className='course-form__heading'>{ADD_AUTHOR_SECTION_HEADING}</h3>
          <div className='course-form__input'>
            <Input
              label={AUTHOR_NAME_FIELD_LABEL}
              placeholder={AUTHOR_NAME_FIELD_PLACEHOLDER}
              value={author}
              onChange={handleAuthorInputChange}
              style={{ width: '100%' }}
            />
          </div>
          <div className='course-form__button'>
            <Button
              label={CREATE_AUTHOR_BTN_LABEL}
              onClick={handleCreateAuthorBtnClick}
            />
          </div>
        </div>

        <div className='authors__list'>
          <h3 className='course-form__heading'>{AUTHORS_SECTION_HEADING}</h3>
          <ul>
            {authorsList.length ? (
              authorsList
            ) : (
              <li className='empty-list'>{EMPTY_AUTHOR_LIST_MESSAGE}</li>
            )}
          </ul>
        </div>

        <div className='authors__course-list'>
          <h3 className='course-form__heading'>
            {COURSE_AUTHORS_SECTION_HEADING}
          </h3>
          <ul>
            {courseAuthorsList.length ? (
              courseAuthorsList
            ) : (
              <li className='empty-list'>{EMPTY_AUTHOR_LIST_MESSAGE}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

CourseFormAuthors.propTypes = {
  token: PropTypes.string,
  type: PropTypes.string,
  authors: createAuthorsObjectArrayPropType(),
  courseAuthors: createAuthorsObjectArrayPropType(),
  tmpAuthors: createAuthorsObjectArrayPropType(),
  tmpUpdateAuthors: createAuthorsObjectArrayPropType(),
  initialValues: createCourseInitalInfoPropType(),
  addAuthor: PropTypes.func,
  setCourseAuthors: PropTypes.func,
};

export default CourseFormAuthors;
