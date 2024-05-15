import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cards } from "../data/dataProgramm";

export interface FilterPayload {
  programms: string;
  special: string;
  time: string;
}

const initialState = cards;

const CardsStorage = createSlice({
  name: "CardsStorage",
  initialState: {
    allCards: initialState,
    filteredCards: initialState
  },
  reducers: {
    filterCards(state, action: PayloadAction<FilterPayload>) {
      const { programms, special, time } = action.payload;
      state.filteredCards = state.allCards.filter(
        (card) =>
          (programms === "all" || card.titleText === programms) &&
          (special === "all" || card.nameSpecial === special) &&
          (time === "Choose" || card.labelText === time)
      );
    },
  },
});

export const { filterCards } = CardsStorage.actions;
export default CardsStorage.reducer;
