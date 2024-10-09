import { get_categories } from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  status: "idle",
  categories: [],
};

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (_, { rejectWithValue }) => {
    console.log("getting categories");
    try {
      const response = await get_categories();
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);


export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
