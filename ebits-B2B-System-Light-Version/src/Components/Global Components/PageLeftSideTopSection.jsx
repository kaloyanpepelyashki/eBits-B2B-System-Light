//Importing React hooks
import { useContext } from "react";

//Importing Context components
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

export default function PageLeftTopSection(props) {
  const { setKitAmount } = useContext(ShoppingCartFunc);

  return (
    <>
      <div className="page-left-side-top-section">
        <h1 className="text-TextXL text-primary-color ml-5">Kit</h1>
        {props.children}
      </div>
      <div className="line"></div>
    </>
  );
}
