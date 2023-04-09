//Importing React hooks
import { useContext } from "react";

//Importing Context Components
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

//Importing Components
import KitReceiptBottomSection from "../Small Components/KitBuyReceiptBottomSection";
import KitReceipt from "./KitReceipt";

export default function ReceiptHandler() {
  const { isKit } = useContext(ShoppingCartFunc);
  return (
    <>
      <KitReceipt>{isKit ? <KitReceiptBottomSection /> : ""}</KitReceipt>
    </>
  );
}
