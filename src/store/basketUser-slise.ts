import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userBasket, fetchAllProductsUserBasket, Card } from "../libs/fetchAllProductsUserBasket";

export const fetchBasketItems = createAsyncThunk(
  "basket/fetchBasketItems",
  async () => {
    try {
      const userBasketData = await fetchAllProductsUserBasket();
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
    deleteItemBasket(state, action: PayloadAction<Card>) {
      return state.filter((item) => item.basketUser.id !== action.payload.id);
      
    },
    deleteItemsInBasket(state, action: PayloadAction<string[]>) {
      return state.filter((item,index) => item.basketUser.id !== action.payload[index])
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
