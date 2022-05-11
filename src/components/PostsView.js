import { useEffect, useState } from 'react';
import Post from './Post';

import './PostsView.css';

export default function PostsView() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/posts');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="posts-view">
      {posts.map((post) => {
        return <Post {...post} key={post.id} />;
      })}
    </div>
  );
}
