import { rest } from 'msw';
import {
  AUTHORS_ADD_PATH,
  AUTHORS_GET_ALL_PATH,
  COURSES_GET_ALL_PATH,
  USERS_ME_PATH,
} from '../constants';
import {
  MOCKED_GET_ME_RESPONSE,
  MOCKED_AUTHORS_RESPONSE,
  MOCKED_COURSES_RESPONSE,
} from './testConstants';

export const handlers = [
  rest.get(`*${USERS_ME_PATH}`, (req, res, ctx) => {
    return res(ctx.json(MOCKED_GET_ME_RESPONSE));
  }),
  rest.get(`*${COURSES_GET_ALL_PATH}`, (req, res, ctx) => {
    return res(ctx.json(MOCKED_COURSES_RESPONSE));
  }),
  rest.get(`*${AUTHORS_GET_ALL_PATH}`, (req, res, ctx) => {
    return res(ctx.json(MOCKED_AUTHORS_RESPONSE));
  }),

  rest.post(`*${AUTHORS_ADD_PATH}`, (req, res, ctx) => {
    return res(
      ctx.json({
        successful: true,
        result: { name: 'sqwqw', id: 'df0308fb-29da-405c-a42f-ee7cdea77986' },
      })
    );
  }),
];
