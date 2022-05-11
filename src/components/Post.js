import './Post.css';

export default function Post({ author, message }) {
  return (
    <div className="post">
      <h3 className="post__author">{author}</h3>
      <div className="post__message">{message}</div>
    </div>
  );
}
