import { rest } from 'msw';
import { API_URL } from '../app/constants';
import { quoteRandom, quoteTroy } from './quotesMock';

const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    if (req.url.searchParams.get('character')) {
      return res(ctx.status(200), ctx.json(quoteTroy));
    }
    return res(ctx.status(200), ctx.json(quoteRandom));
  }),
];

export default handlers;
