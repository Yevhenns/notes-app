import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notesAll: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewItem(state, action) {
      state.notesAll = [...state.notesAll, action.payload];
    },
  },
});

export const notesReducer = notesSlice.reducer;

export const getNotesAll = (state) => state.notes.notesAll;

export const { addNewItem } = notesSlice.actions;
