import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// setup requests interception using the given handlers.
export const server = setupServer(...handlers);
