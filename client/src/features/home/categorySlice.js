import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      categoryName: "All",
      description: "All posts",
      _id: "0",
    },
    {
      categoryName: "Technology",
      description: "All things tech-related",
      _id: "1",
    },
    {
      categoryName: "Health",
      description: "Health and wellness topics",
      _id: "2",
    },
    {
      categoryName: "Travel",
      description: "Travel tips and destination guides",
      _id: "3",
    },
    { categoryName: "Food", description: "Recipes and food reviews", _id: "4" },
    {
      categoryName: "Health",
      description: "Health and wellness topics",
      _id: "4",
    },
    {
      categoryName: "Travel",
      description: "Travel tips and destination guides",
      _id: "5",
    },
    { categoryName: "Food", description: "Recipes and food reviews", _id: "6" },
  ],
  category: "All",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
