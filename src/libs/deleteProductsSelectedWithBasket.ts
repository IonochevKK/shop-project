import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";
import { userBasket } from "./fetchAllProductsUserBasket";
const deleteProductsSelectedWithBasket = (id: userBasket[], userId: string) => {
  id.forEach(async (item) => {
    if (item.docId) {
      const docRef = doc(db, "users", userId, "basket", item.docId);
      return await deleteDoc(docRef);
    } else {
      throw new Error("docId missing");
    }
  });
};

export default deleteProductsSelectedWithBasket;
