import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "muhsin tt" },
  { id: 2, name: "shahin pn" },
  { id: 3, name: "sajid tt" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

// export const {} = state.actions;

export default userSlice.reducer;
