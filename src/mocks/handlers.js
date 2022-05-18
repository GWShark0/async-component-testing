import { rest } from 'msw';

import postsFixture from './__fixtures__/posts.json';
import { POSTS_API_URL } from '../constants';

export const handlers = [
  rest.get(POSTS_API_URL, (req, res, ctx) => {
    return res(ctx.json(postsFixture));
  }),
];
