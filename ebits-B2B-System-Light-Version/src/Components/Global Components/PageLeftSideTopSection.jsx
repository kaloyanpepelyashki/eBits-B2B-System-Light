//Importing React hooks
import { useContext } from "react";

//Importing Context components
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

export default function PageLeftTopSection(props) {
  const { isKit, setIsKit } = useContext(ShoppingCartFunc);

  const handleCheck = (e) => {
    setIsKit(e.target.checked);
  };

  return (
    <>
      <div className="page-left-side-top-section">
        <input
          type="checkbox"
          className="bg-gray-50 border-grey-300 focus:ring-4 focus:ring-primary-color  h-6 w-6 rounded text-primary-color text-red-600"
          onChange={(e) => handleCheck(e)}
          checked={isKit ? true : false}
        />
        <h1
          className={
            isKit
              ? "text-TextLarge text-primary-color ml-1 cursor-default"
              : "text-TextLarge text-txt-grey-color ml-1 cursor-default"
          }
        >
          Kit
        </h1>
        {props.children}
      </div>
      <div className="line"></div>
    </>
  );
}
