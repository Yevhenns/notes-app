import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import { notesReducer } from "./notesSlice";

const persistConfig = {
  key: "notes",
  storage,
};

export const store = configureStore({
  reducer: {
    notes: persistReducer(persistConfig, notesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
