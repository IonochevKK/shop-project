import { configureStore } from "@reduxjs/toolkit";
import UserSessionReduce from "./userSession-slise";
import CookiesStorageReducer from "./cookies-slise";
import CardsStorageReducer from "./cards-slise";
export const store = configureStore({
  reducer: {
    UserSession: UserSessionReduce,
    CookiesStorage: CookiesStorageReducer,
    CardsStorage: CardsStorageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
