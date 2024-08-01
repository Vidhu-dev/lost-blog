import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      categoryName: "Technology",
      description: "All things tech-related",
      _id: "1",
    },
    {
      categoryName: "Health & Wellness",
      description: "Health and wellness topics",
      _id: "2",
    },
    {
      categoryName: "Travel Guides",
      description: "Travel tips and destination guides",
      _id: "3",
    },
    {
      categoryName: "Gourmet Food",
      description: "Recipes and food reviews",
      _id: "4",
    },
    {
      categoryName: "Fitness",
      description: "Fitness and exercise tips",
      _id: "8",
    },
    {
      categoryName: "Personal Finance",
      description: "Advice on managing your money",
      _id: "9",
    },
    {
      categoryName: "DIY Projects",
      description: "Do it yourself guides and tips",
      _id: "10",
    },
    {
      categoryName: "Art & Design",
      description: "Exploring creativity and design",
      _id: "11",
    },
  ],
  category: "All",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
