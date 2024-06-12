import { collection, getDocs, doc } from "firebase/firestore";
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
  docId?: string;
}

export const fetchAllProductsUserBasket = async (userSession: string) => {
  try {
    const userId = userSession;
    if (!userId) {
      throw new Error("User ID is missing in UserSession");
    }

    const result: (userBasket & { docId: string })[] = [];
    const userBasketRef = collection(doc(db, "users", userId), "basket");
    const querySnapshot = await getDocs(userBasketRef);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const userBasketData: userBasket = {
        userUid: userId,
        basketUser: data.basketUser as Card, 
      };
      result.push({ ...userBasketData, docId: doc.id });
    });

    return result.length ? result : [];
  } catch (error) {
    console.error("Error fetching user basket:", error);
    return [];
  }
};
