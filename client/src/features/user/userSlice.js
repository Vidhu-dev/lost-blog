import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  username: "",
  email: "",
  fullName: "",
  avatar: null,
  coverImage: "",
  bio: "",
  userID: "",
 
};

const userSlice = createSlice({
  name: "user",
  initialState: intialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.avatar = action.payload.avatar;
      state.coverImage = action.payload.coverImage;
      state.bio = action.payload.bio;
      state.userID = action.payload._id;
    },
    clearUser: (state) => {
      state.username = "";
      state.email = "";
      state.fullName = "";
      state.avatar = null;
      state.coverImage = "";
      state.bio = "";
      state.userID = "";
      state.refreshToken = "";
    },
    setUserAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const { setUser, clearUser, setUserAvatar } = userSlice.actions;
export default userSlice.reducer;
