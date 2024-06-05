import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { CardProgramProps } from "../components/CardProgram/CardProgram";
export const addProductInMyBasket = async (
  card: CardProgramProps,
  userId: string
) => {
  try {
    const docRef = await addDoc(collection(db, "userBasket"), {
      userUid: userId,
      basketUser: {
        ...card,
      },
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
