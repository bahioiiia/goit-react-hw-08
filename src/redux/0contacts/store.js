import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});


/* import { configureStore } from "@reduxjs/toolkit";
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
import contactsReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";

const persistConfig = {
  key: "contacts",
  storage,
  whiteList: ["items"],
};
const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
 */