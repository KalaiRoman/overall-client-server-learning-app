import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  userData: {},
  error: "",
};

const login_Reducer = createSlice({
  name: "Login User",
  initialState,
  reducers: {
    loginLoading: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.error = action.payload;
    },
  },
});

export const { loginLoading, loginSuccess, loginFail } = login_Reducer.actions;

export default login_Reducer.reducer;
