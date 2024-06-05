import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
export interface Card {
  id: string;
  titleText: string;
  price: string;
  priceSale: string;
  HMOlabel: boolean;
  labelText: string;
  nameSpecial: string;
}
export interface userBasket {
  userUid: string;
  basketUser: Card;
}
export const fetchAllProductsUserBasket = async () => {
  const result: userBasket[] = [];
  const querySnapshot = await getDocs(collection(db, "userBasket"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const userBasketData: userBasket = {
      userUid: data.userUid,
      basketUser: data.basketUser,
    };
    result.push({ ...userBasketData });
  });
  return result.length ? result : [];
};
