import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";
import categoryReducer from "./features/home/categorySlice";
import createPostReducer from "./features/post/createpostSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    categories: categoryReducer,
    createPost: createPostReducer,
  },
});

export default store;
