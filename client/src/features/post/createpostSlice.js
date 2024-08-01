import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { create_post } from "@/utils/api";

const initialState = {
  editor: "",

  post: {
    authorID: "",
    title: "",
    content: "",
    status: "draft", // 'draft', 'published', 'archived', 'scheduled'
    publishedAt: null,
    categoryID: "",
    coverImage: "",
    likes: 0,
  },
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const createPost = createAsyncThunk(
  "post/createPost",
  async (post, { rejectWithValue }) => {
    try {
      const response = await create_post(post);
      return response.data;
    } catch (error) {
      let errorMessage;
      if (error.code === "ERR_NETWORK") {
        errorMessage = "Unable to connect to the server";
      } else {
        errorMessage =
          error.response?.data?.message || "An unexpected error occurred";
      }
      return rejectWithValue(errorMessage);
    }
  },
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setEditor: (state, action) => {
      state.editor = action.payload;
    },

    setPostDetails: (state, action) => {
      state.post = { ...state.post, ...action.payload };
    },
    resetPost: (state) => {
      state.post = initialState.post;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.post = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setPostDetails, resetPost, setEditor } = postSlice.actions;

export default postSlice.reducer;
