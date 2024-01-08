import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: null,
  category: null,
  budget: null,
  sortBy: null,
};

const filterReducer = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setFilters } = filterReducer.actions;
export default filterReducer.reducer;
