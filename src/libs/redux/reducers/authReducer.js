import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    },
    updateCurrentUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    logout: (state) => {
      return {
        ...state,
        token: null,
        user: null,
      };
    },
  },
});

export const { loginUser, logout, updateCurrentUser } = authReducer.actions;
export default authReducer.reducer;
