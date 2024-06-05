import { configureStore } from "@reduxjs/toolkit";
import UserSessionReduce from "./userSession-slise";
import CookiesStorageReducer from "./cookies-slise";
import CardsStorageReducer from "./cards-slise";
import basketUserReducer from './basketUser-slise'
export const store = configureStore({
  reducer: {
    UserSession: UserSessionReduce,
    CookiesStorage: CookiesStorageReducer,
    CardsStorage: CardsStorageReducer,
    BasketUser: basketUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
