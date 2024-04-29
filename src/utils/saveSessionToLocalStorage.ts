import { InitialStateType } from "../store/userSession-slise";

export const saveSessionToLocalStorage = (sessionData: InitialStateType) => {
  localStorage.setItem("userSession", JSON.stringify(sessionData));
};
