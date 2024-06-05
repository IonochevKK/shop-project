import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
