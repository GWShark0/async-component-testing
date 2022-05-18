import { useEffect, useState } from 'react';

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(POSTS_API_URL);
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return posts;
}
