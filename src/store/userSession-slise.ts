import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface InitialStateType {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
}

const initialState: InitialStateType = {
  id: ``,
  name: ``,
  email: ``,
  createdAt: ``,
};

export const userSession = createSlice({
  name: "userSession",
  initialState,
  reducers: {
    updateUserSession(state, action: PayloadAction<InitialStateType>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
});
export const { updateUserSession } = userSession.actions;
export default userSession.reducer;
