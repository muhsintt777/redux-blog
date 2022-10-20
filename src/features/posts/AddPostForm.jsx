import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSavePost = () => {
    dispatch(postAdded(titleInput, contentInput, userName));
    setTitleInput("");
    setContentInput("");
    setUserName("");
    navigate("/");
  };

  // const usersOptions = users.map((user) => (
  //   <option key={user.id} value={user.id}>
  //     {user.name}
  //   </option>
  // ));

  const canSave = Boolean(titleInput) && Boolean(contentInput);

  return (
    <section>
      <h2>Add New Post</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title: </label>
        <input
          id="postTitle"
          name="postTitle"
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
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
        <label htmlFor="content">Content: </label>
        <input
          id="postContent"
          name="postContent"
          type="text"
          value={contentInput}
          onChange={(e) => setContentInput(e.target.value)}
        />
        <button onClick={handleSavePost} type="button" disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
