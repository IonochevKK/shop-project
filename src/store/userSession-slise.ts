import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
// import { getSessionFromToLocalStorage } from "../utils/getSessionFromToLocalStorage";
export interface InitialStateType {
  id: string | null;
  name: string | null;
  email: string | null;
  createdAt?: string | null;
}

const initialState: InitialStateType = {
  id: null,
  name: null,
  email: null,
  createdAt: null,
};

export const getSessionFromToLocalStorage = () => {
  return (dispatch: any) => {
    const sessionDataString = localStorage.getItem("userSession");
    if (sessionDataString) {
      const sessionData: InitialStateType = JSON.parse(sessionDataString);
      console.log(sessionData)
      dispatch(updateUserSession(sessionData));
    }
  };
};

export const userSession = createSlice({

  name: "userSession",
  initialState,
  reducers: {
    updateUserSession(state, action: PayloadAction<InitialStateType>) {
      return action.payload
    },
  },
});
export const { updateUserSession } = userSession.actions;
export default userSession.reducer;
