import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";


// Thunk for fetching user data from the API
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get_userData();
      console.log(response);
      return response.data.user;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  username: "",
  email: "",
  fullName: "",
  avatar: null,
  coverImage: "",
  bio: "",
  userID: "",
  status: 'idle', // Track the state of the API call
  error: null, // Track errors
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
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
    },
    setUserAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading'; // API call is in progress
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded'; // API call succeeded
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.fullName = action.payload.fullName;
        state.avatar = action.payload.avatar;
        state.coverImage = action.payload.coverImage;
        state.bio = action.payload.bio;
        state.userID = action.payload._id;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed'; // API call failed
        state.error = action.payload; // Store the error message
      });
  },
});

export const { setUser, clearUser, setUserAvatar } = userSlice.actions;
export default userSlice.reducer;
