import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { editPost } from "./postsSlice";
import { useEffect } from "react";

const EditPost = () => {
  const { id } = useParams();
  const posts = useSelector(selectAllPosts);
  const post = posts.find((post) => post.id === id);

  useEffect(() => {
    setTitleInput(post.title);
    setContentInput(post.content);
    setUserName(post.userName);
  }, []);

  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditPost = () => {
    dispatch(editPost(titleInput, contentInput, userName, id));
    setTitleInput("");
    setContentInput("");
    setUserName("");
    navigate("/");
  };

  const canSave = Boolean(titleInput) && Boolean(contentInput);

  return (
    <section className="post_inputs">
      <h2>Edit Post</h2>
      <form action="">
        <div>
          <label htmlFor="postTitle">Post Title: </label>
          <input
            id="postTitle"
            name="postTitle"
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="postAuthor">Author :</label>
          <select
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="muhsin">muhsin</option>
            <option value="sajid">sajid</option>
            <option value="shahin">shahin</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          <input
            id="postContent1"
            name="postContent"
            type="text"
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
          />
        </div>
        <button onClick={handleEditPost} type="button" disabled={!canSave}>
          Save Edited Post
        </button>
      </form>
    </section>
  );
};

export default EditPost;
