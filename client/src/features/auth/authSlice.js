import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
import { clearUser, setUser } from "../user/userSlice";

const initialState = {
  isAuthenticated: false,
  loading: false,
  refreshToken: null,
  accessToken: null,
  error: null,
};

export const setAuthTrue = createAsyncThunk(
  "auth/setAuthTrue",
  async (_, thunkAPI) => {
    try {
      localStorage.setItem("isAuth", "Yes");
      return { isAuthenticated: true };
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to set authentication");
    }
  },
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ data }, thunkAPI) => {
    console.log(data);
    try {
      const response = await api.signup(data);
      thunkAPI.dispatch(setUser(response.data.data.user));
      localStorage.setItem("isAuth", "Yes");
      return response.data.data;
    } catch (error) {
      let errorMessage;
      if (error.code === "ERR_NETWORK") {
        errorMessage = "Unable to connect to the server";
      } else {
        errorMessage =
          error.response?.data?.message || "An unexpected error occurred";
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ data }, thunkAPI) => {
    try {
      const response = await api.login(data);
      console.log(response);
      thunkAPI.dispatch(setUser(response.data.data.user));
      localStorage.setItem("isAuth", "Yes");
      return response.data.data;
    } catch (error) {
      let errorMessage;
      if (error.code === "ERR_NETWORK") {
        errorMessage = "Unable to connect to the server";
      } else {
        errorMessage =
          error.response?.data?.message || "An unexpected error occurred";
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

export const logout = createAsyncThunk(
  "auth/logout",
  async ({ data }, thunkAPI) => {
    localStorage.setItem("isAuth", "No");
    try {
      const response = await api.logout(data);
      thunkAPI.dispatch(clearUser());
      localStorage.setItem("isAuth", "No");
      return response.data.data;
    } catch (error) {
      let errorMessage;
      if (error.code === "ERR_NETWORK") {
        errorMessage = "Unable to connect to the server";
      } else {
        errorMessage =
          error.response?.data?.message || "An unexpected error occurred";
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.refreshToken = action.payload.refreshToken;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload;
      });
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.refreshToken = action.payload.refreshToken;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.refreshToken = null;
        state.accessToken = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(setAuthTrue.fulfilled, (state) => {
        state.isAuthenticated = true;
      })
      .addCase(setAuthTrue.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
