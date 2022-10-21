import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p className="username">
        by {post.userName ? post.userName : "unknown user"}
      </p>
      <p className="content">{post.content}</p>
      <div className="buttons">
        <Link to={`/editPost/${post.id}`}>
          <button>Edit</button>
        </Link>
        <button
          onClick={() => {
            dispatch(deletePost(post.id));
          }}
        >
          Delete
        </button>
      </div>
    </article>
  ));
  return (
    <section>
      <h2>POSTS</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
