import usePosts from '../hooks/usePosts';
import Post from './Post';

import './PostsView.css';

export default function PostsView() {
  const posts = usePosts();

  return (
    <div className="posts-view">
      {posts.map((post) => {
        return <Post {...post} key={post.id} />;
      })}
    </div>
  );
}
