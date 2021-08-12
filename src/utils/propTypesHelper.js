import PropTypes from 'prop-types';

export const createArrayOfStringsPropType = () =>
  PropTypes.arrayOf(PropTypes.string);

export const createAuthorsObjectArrayPropType = () =>
  PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  );

export const createCourseInitalInfoPropType = () =>
  PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    creationDate: PropTypes.string,
    duration: PropTypes.number,
    authors: createArrayOfStringsPropType(),
    id: PropTypes.string,
  });

export const createCoursessObjectArrayPropType = () =>
  PropTypes.arrayOf(createCourseInitalInfoPropType());
