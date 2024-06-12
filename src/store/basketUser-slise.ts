import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  userBasket,
  fetchAllProductsUserBasket,
} from "../libs/fetchAllProductsUserBasket";

export const fetchBasketItems = createAsyncThunk(
  "basket/fetchBasketItems",
  async (userId: string) => {
    try {
      const userBasketData = await fetchAllProductsUserBasket(userId);
      return userBasketData;
    } catch (error) {
      throw Error("Failed to fetch basket items");
    }
  }
);

const initialState: userBasket[] = [];

export const basketUser = createSlice({
  name: "BasketUser",
  initialState,
  reducers: {
    addItemBasket(state, action: PayloadAction<userBasket>) {
      state.push(action.payload);
    },
    deleteItemBasket(state, action: PayloadAction<userBasket>) {
      return state.filter(
        (item) => item.basketUser.id !== action.payload.basketUser.id
      );
    },
    deleteItemsInBasket(state, action: PayloadAction<userBasket[]>) {
      return state.filter(
        (item) =>
          !action.payload.some(
            (payloadItem) => payloadItem.basketUser.id === item.basketUser.id
          )
      );
    },
    setBasketItems(state, action: PayloadAction<userBasket[]>) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBasketItems.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {
  addItemBasket,
  deleteItemBasket,
  deleteItemsInBasket,
  setBasketItems,
} = basketUser.actions;

export default basketUser.reducer;
