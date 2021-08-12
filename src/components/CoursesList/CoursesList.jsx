import React from 'react';
import CourseCard from '../CourseCard/';
import { pipeDuration } from '../../utils/timeConverter';
import { mapAuthorsById } from '../../utils/authorsMapper';
import { MAX_SYMBOLS_IN_DESCRIPTION } from '../../constants';
import { truncateStringByLength } from '../../utils/stringConverter';
import {
  createCoursessObjectArrayPropType,
  createAuthorsObjectArrayPropType,
} from '../../utils/propTypesHelper';

const CoursesList = ({ courses, authorsList }) => (
  <ul>
    {courses.map(
      ({ id, title, description, authors, duration, creationDate }) => {
        const truncatedDescription = truncateStringByLength(
          description,
          MAX_SYMBOLS_IN_DESCRIPTION
        );
        const mappedAuthors = mapAuthorsById(authors, authorsList);

        const convertedDuration = `${pipeDuration(duration)} hours`;
        const convertedDate = creationDate.replaceAll('/', '.');

        return (
          <li key={id}>
            <CourseCard
              id={id}
              title={title}
              description={truncatedDescription}
              authors={mappedAuthors}
              duration={convertedDuration}
              creationDate={convertedDate}
            />
          </li>
        );
      }
    )}
  </ul>
);

CoursesList.propTypes = {
  courses: createCoursessObjectArrayPropType(),
  authorsList: createAuthorsObjectArrayPropType(),
};

export default CoursesList;
