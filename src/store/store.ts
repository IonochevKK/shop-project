import { configureStore } from "@reduxjs/toolkit";
import UserSessionReduce from "./userSession-slise";
import CookiesStorageReducer from "./cookies-slise";
export const store = configureStore({
  reducer: {
    UserSession: UserSessionReduce,
    CookiesStorage: CookiesStorageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
