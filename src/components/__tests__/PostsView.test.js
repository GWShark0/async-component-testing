import { render, screen } from '@testing-library/react';
import PostsView from './PostsView';

it('should show some posts', async () => {
  render(<PostsView />);

  expect(
    await screen.findByRole('heading', { name: /alice/i })
  ).toBeInTheDocument();
});
