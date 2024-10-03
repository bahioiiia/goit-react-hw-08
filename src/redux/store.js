import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "../redux/contacts/slice";
import filterReducer from "../redux/filters/slice";
import authReducer from "./auth/slice";
// import  persistStore from "redux-persist/es/persistStore";
// import persistReducer from "redux-persist/es/persistReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tasksReducer } from './tasks/slice';

const persistAuthConfig = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["token"],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    tasks: tasksReducer,
    filters: filterReducer,
    auth: persistAuthConfig,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
