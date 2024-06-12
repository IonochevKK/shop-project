import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { CardProgramProps } from "../components/CardProgram/CardProgram";

export const addProductInMyBasket = async (
  card: CardProgramProps,
  userId: string
) => {
  try {
    const userBasketRef = collection(doc(db, "users", userId), "basket");

    const docRef = await addDoc(userBasketRef, {
      basketUser: {
        ...card,
      },
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
