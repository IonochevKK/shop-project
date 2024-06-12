import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";
import { userBasket } from "./fetchAllProductsUserBasket";

export const deleteProductInBasket = async (
  card: userBasket,
  userId: string,
) => {
  console.log(userId);
  if (!card.docId) {
    throw new Error("Document ID is missing in the card properties");
  }

  if (!userId) {
    throw new Error("User ID is missing");
  }

  const docRef = doc(db, "users", userId, "basket", card.docId);
  return await deleteDoc(docRef);
};

export default deleteProductInBasket;
