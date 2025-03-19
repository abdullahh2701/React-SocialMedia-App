import { MdDeleteSweep } from "react-icons/md";
const Post = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag">#{tag}</span>
        ))}

        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDeleteSweep />
        </span>
      </div>
    </div>
  );
};
export default Post;
