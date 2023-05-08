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
    deleteItem(state, action) {
      state.notesAll = state.notesAll.filter(
        (item) => item.id !== action.payload
      );
    },
    editText(state, action){ 
      // const currentItem = state.notes     
      console.log(action.payload.id);
    }
  },
});

export const notesReducer = notesSlice.reducer;

export const getNotesAll = (state) => state.notes.notesAll;

export const { addNewItem } = notesSlice.actions;
export const { deleteItem } = notesSlice.actions;
export const { editText } = notesSlice.actions;
