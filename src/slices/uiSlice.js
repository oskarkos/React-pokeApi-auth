import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  searchInput: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSearchedInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setLoading, setSearchedInput } = uiSlice.actions;

export default uiSlice.reducer;
