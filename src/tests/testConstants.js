export const MOCKED_COURSES = [
  {
    title: 'title',
    description: 'description',
    creationDate: '9/3/2021',
    duration: 30,
    authors: [
      '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
      '1c972c52-3198-4098-b6f7-799b45903199',
    ],
    id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
  },
  {
    title: 'title2',
    description: 'description',
    creationDate: '20/3/2021',
    duration: 30,
    authors: [
      '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
      '072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
      '40b21bd5-cbae-4f33-b154-0252b1ae03a9',
    ],
    id: '66cc289e-6de9-49b2-9ca7-8b543d6467',
  },
  {
    title: 'title3',
    description: 'description3',
    creationDate: '7/8/2020',
    duration: 3333,
    authors: [
      '5e0b0f18-32c9-4933-b142-50459b47f09e',
      '9987de6a-b475-484a-b885-622b8fb88bda',
      'cfe194ee-a0b8-4519-9fbc-15f2d076230d',
      '40b21bd5-cbae-4f33-b154-0252b1ae03a9',
      '072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
    ],
    id: '66cc289e-6de9-49b2-9ca7-6456467',
  },
];

export const MOCKED_COURSES_RESPONSE = {
  data: {
    successful: true,
    result: MOCKED_COURSES,
  },
};

export const MOCKED_AUTHORS = [
  { name: 'author', id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36' },
  { name: 'author2', id: '1c972c52-3198-4098-b6f7-799b45903199' },
  { name: 'author3', id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed' },
  { name: 'author4', id: '40b21bd5-cbae-4f33-b154-0252b1ae03a9' },
  { name: 'author5', id: '5e0b0f18-32c9-4933-b142-50459b47f09e' },
];

export const MOCKED_AUTHORS_RESPONSE = {
  data: {
    successful: true,
    result: MOCKED_AUTHORS,
  },
};

export const MOCKED_AUTHOR = {
  name: 'Mocked author',
  id: '5e0bdsd0f18-32c9-4933-b142-50459b4127f09e',
};

export const MOCKED_CARD_INFO = {
  title: 'title',
  description: 'description',
  duration: '00:30 hours',
  authors: ['author', ', author2'],
  creationDate: '9.3.2021',
};

export const MOCKED_GET_ME_RESPONSE = {
  data: {
    successful: true,
    result: {
      name: 'Admin',
      email: 'admin@gmail.com',
      password: 'password',
      role: 'admin',
    },
  },
};

export const MOCKED_TOKEN = 'fake_token';
export const MOCKED_AUTHOR_VALUE = 'Random Author';
