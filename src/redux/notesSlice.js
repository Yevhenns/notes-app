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
    editText(state, action) {
      const currentItemIndex = state.notesAll.findIndex(
        (element) => element.id === action.payload.id
      );
      const currentItem = state.notesAll.find(
        (element) => element.id === action.payload.id
      );
      if (currentItem) {
        currentItem.text = action.payload.text;
        const newArray = [...state.notesAll];
        newArray.splice(currentItemIndex, 1, currentItem);
      }
    },
  },
});

export const notesReducer = notesSlice.reducer;

export const getNotesAll = (state) => state.notes.notesAll;

export const { addNewItem } = notesSlice.actions;
export const { deleteItem } = notesSlice.actions;
export const { editText } = notesSlice.actions;
