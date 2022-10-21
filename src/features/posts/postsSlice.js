import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "ReactJS",
    userName: "Jordan Walke",
    content:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
  },
  {
    id: "2",
    title: "Redux",
    userName: "Dan Abramov",
    content:
      "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
  },
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
