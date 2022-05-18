import { render, screen } from '@testing-library/react';
import PostsView from '../PostsView';

it('should render some posts', async () => {
  render(<PostsView />);

  expect(
    await screen.findByRole('heading', { name: /post a/i })
  ).toBeInTheDocument();
  expect(
    await screen.findByText(/this is the body of post a./i)
  ).toBeInTheDocument();
});
