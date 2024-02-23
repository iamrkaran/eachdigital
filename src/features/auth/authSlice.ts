import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: null,
    isAuthenticated: false,
  },
  reducers: {
    setUserData: (state, action) => {
      const { userData, accessToken } = action.payload;
      state.user = userData;
      state.accessToken = accessToken;
      state.isAuthenticated = true;
    },
    clearUserData: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUserData, clearUserData } = authSlice.actions;
export default authSlice.reducer;
