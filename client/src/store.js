import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";
// import categoryReducer from "./features/categories/categorySlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    // categories: categoryReducer,
  },
});

export default store;
