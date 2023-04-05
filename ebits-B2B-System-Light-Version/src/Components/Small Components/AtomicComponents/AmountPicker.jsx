//Importing React hooks
import { useContext } from "react";

//Importing Context components
import { ShoppingCartFunc } from "../../Context Components/ShoppingCartFuncContext";

export default function AmountPicker() {
  const { setKitAmount } = useContext(ShoppingCartFunc);

  return (
    <>
      <div className="page-left-side-top-section-amount-window-holder font-bold">
        <p className="font-bold text-primary-color ml-5 mt-2">Amount</p>
        <input
          type="number"
          onChange={(e) => {
            setKitAmount(e.target.value);
          }}
          className="kit-amount-window text-primary-color font-bold text-CardText 
         px-2 py-2 bg-white border-white border-slate-300 rounded-xl
         shadow-xl focus:outline-none space-x-5"
          min={1}
        />
      </div>
    </>
  );
}
