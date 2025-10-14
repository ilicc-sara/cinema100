import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "" };

const nameSlice = createSlice({
  name: "fullName",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { setName } = nameSlice.actions;

export default nameSlice.reducer;
