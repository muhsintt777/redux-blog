import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "react", content: "its nice..." },
  { id: "2", title: "redux", content: "bamabam" },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (titleInput, contentInput, userName) => {
        return {
          payload: {
            id: nanoid(),
            title: titleInput,
            content: contentInput,
            userName: userName ? userName : "unknown user",
          },
        };
      },
    },
    editPost: {
      reducer: (state, action) => {
        const posts = state.filter((post) => post.id !== action.payload.id);
        return (state = [action.payload, ...posts]);
      },
      prepare: (titleInput, contentInput, userName, id) => {
        return {
          payload: {
            id: id,
            title: titleInput,
            content: contentInput,
            userName: userName,
          },
        };
      },
    },
    deletePost: (state, action) => {
      const posts = state.filter((post) => post.id !== action.payload);
      return (state = [...posts]);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
