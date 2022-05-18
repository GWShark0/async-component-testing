import './Post.css';

export default function Post({ title, body }) {
  return (
    <div className="post">
      <h3 className="post__author">{title}</h3>
      <div className="post__message">{body}</div>
    </div>
  );
}
