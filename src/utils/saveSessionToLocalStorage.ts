import { InitialStateType } from "../store/userSession-slise";

export const saveSessionToLocalStorage = (id: string | null) => {
  localStorage.setItem("userSession", JSON.stringify({ id: id }));
};
