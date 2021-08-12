/* Common */
export const MINUTES_IN_HOUR = 60;
export const ADMIN_ROLE = 'admin';

/* Header */
export const SITE_NAME = 'Courses';
export const LOGO_ALT_TEXT = 'Logo';
export const USER_NAME = 'Admin';

// Paths & API
export const API_PATH = 'http://localhost:3000/';
export const SUCCESS_STATUS = 200;

export const LOGIN_PATH = '/login';
export const REGISTRATION_PATH = '/registration';
export const REGISTRATION_API_PATH = '/register';
export const LOGOUT_API_PATH = '/logout';

export const COURSES_PATH = '/courses';
export const COURSES_GET_ALL_PATH = `${COURSES_PATH}/all`;
export const COURSES_ADD_PATH = `${COURSES_PATH}/add`;
export const COURSES_UPDATE_PATH = `${COURSES_PATH}/update`;

export const AUTHORS_PATH = '/authors';
export const AUTHORS_GET_ALL_PATH = `${AUTHORS_PATH}/all`;
export const AUTHORS_ADD_PATH = `${AUTHORS_PATH}/add`;

export const USERS_PATH = '/users';
export const USERS_ME_PATH = `${USERS_PATH}/me`;

/* Auth */
export const LOGIN_TITLE = 'Login';
export const REGISTRATION_TITLE = 'Registration';

export const NAME_LABEL = 'Name';
export const EMAIL_LABEL = 'Email';
export const PASSWORD_LABEL = 'Password';

export const NAME_FIELD_PLACEHOLDER = 'Enter name';
export const EMAIL_FIELD_PLACEHOLDER = 'Enter email';
export const PASSWORD_FIELD_PLACEHOLDER = 'Enter password';

const HAVE_ACCOUNT_REGISTRATION_MESSAGE = 'If you have an account you can ';
const HAVE_NOT_ACCOUNT_LOGIN_MESSAGE = 'If you have NOT an account you can ';

export const NAME_AUTH_FIELD = {
  label: NAME_LABEL,
  placeholder: NAME_FIELD_PLACEHOLDER,
  type: 'text',
};

export const EMAIL_AUTH_FIELD = {
  label: EMAIL_LABEL,
  placeholder: EMAIL_FIELD_PLACEHOLDER,
  type: 'email',
};

export const PASSWORD_AUTH_FIELD = {
  label: PASSWORD_LABEL,
  placeholder: PASSWORD_FIELD_PLACEHOLDER,
  type: 'password',
};

export const LOGIN_MESSAGE = {
  text: HAVE_NOT_ACCOUNT_LOGIN_MESSAGE,
  title: REGISTRATION_TITLE,
  link: REGISTRATION_PATH,
};

export const REGISTRATION_MESSAGE = {
  text: HAVE_ACCOUNT_REGISTRATION_MESSAGE,
  title: LOGIN_TITLE,
  link: LOGIN_PATH,
};

/* Courses */

// Courses action labels
export const SEARCH_PLACEHOLDER = 'Enter course name...';
export const SEARCH_BUTTON_LABEL = 'Search';
export const ADD_NEW_COURSE_BUTTON_LABEL = 'Add new course';
export const UPDATE_COURSE_BUTTON_LABEL = 'Update course';
export const APPLY_BUTTON_LABEL = 'Apply';

// Courses card
export const COURSE_CARD_ID_TITLE = 'ID';
export const COURSE_CARD_AUTHORS_TITLE = 'Authors';
export const COURSE_CARD_DURATION_TITLE = 'Duration';
export const COURSE_CARD_CREATED_TITLE = 'Created';
export const COURSE_CARD_SHOW_COURSE_BTN_LABEL = 'Show course';
export const MAX_SYMBOLS_IN_DESCRIPTION = 400;

// CourseForm
export const ADD_AUTHOR_SECTION_HEADING = 'Add author';
export const AUTHORS_SECTION_HEADING = 'Authors';
export const DURATION_SECTION_HEADING = 'Duration';
export const COURSE_AUTHORS_SECTION_HEADING = 'Course authors';

export const TITLE_FIELD_LABEL = 'Title';
export const DESCRIPTION_FIELD_LABEL = 'Description';
export const AUTHOR_NAME_FIELD_LABEL = 'Author name';
export const DURATION_FIELD_LABEL = 'Duration';

export const TITLE_FIELD_PLACEHOLDER = 'Enter title...';
export const DESCRIPTION_FIELD_PLACEHOLDER = 'Enter description...';
export const AUTHOR_NAME_FIELD_PLACEHOLDER = 'Enter author name...';
export const DURATION_FIELD_PLACEHOLDER = 'Enter duration in minutes...';

export const CREATE_COURSE_BTN_LABEL = 'Create Course';
export const CREATE_AUTHOR_BTN_LABEL = 'Create Author';
export const ADD_AUTHOR_BTN_LABEL = 'Add Author';
export const DELETE_AUTHOR_BTN_LABEL = 'Delete Author';

export const UPDATE_COURSE_FORM_TYPE = 'UPDATE_COURSE';
export const CREATE_COURSE_FORM_TYPE = 'CREATE_COURSE';

export const MIN_INPUT_TEXT_LENGTH = 2;
export const MIN_DURATION_VALUE = 1;

// Courses info
export const BACK_TO_COURSE_LINK_TITLE = '< Back to courses';

// Messages
export const EMPTY_AUTHOR_LIST_MESSAGE = 'Authors list is empty';
export const FILL_IN_ALL_FIELDS_MESSAGE = 'Please, fill in all fields';
