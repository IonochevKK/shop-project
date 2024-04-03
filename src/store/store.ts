import { configureStore } from "@reduxjs/toolkit";
import UserSessionReduce from "./userSession-slise";

export const store = configureStore({
  reducer: {
    UserSession: UserSessionReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;