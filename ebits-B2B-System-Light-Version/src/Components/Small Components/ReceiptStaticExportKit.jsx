//Importing React hooks
import { useContext } from "react";

//Importing Context components
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";

//Importing Components
import ProductDisplayReceipt from "../Small Components/ProductDisplayReceipt";
import ProductDisplayStaticReceipt from "./AtomicComponents/ProductDisplayNameKit";

export default function ReceiptStaticExportKit(props) {
  const { cartProducts, total, isKit } = useContext(ShoppingCartFunc);

  return (
    <>
      <div className="separate-product-receipt-wrapper name-it-receipt-wrapper  block px-4 py-6 mt-14 pb-56 text-sm  max-w-screen-lg mx-auto ">
        <FontAwesomeIcon
          className="name-it-receipt-icon text-primary-color"
          icon={faBoxesStacked}
        />
        <div className="product-receipt-products-display-section name-it-receipt-static-products-display-section">
          <h1 className="text-cardText text-primary-color mt-4 mr-40 font-bold">
            Products:
          </h1>

          <div className="receipt-static-scroll scroll-section sm:max-h-72   ">
            {cartProducts.map((product) =>
              product.qty && product.variationQty !== 0 ? (
                <ProductDisplayStaticReceipt
                  key={product.productBaksetUnqKey}
                  product={product}
                />
              ) : (
                ""
              )
            )}
          </div>

          <div className="line line-thick bg-primary-color"></div>
        </div>
        <h1 className="text-total text-TextMid text-primary-color font-bold">
          Total
        </h1>

        <div className="name-it-receipt-static-price-holder flex flex-col sm:flex-row justify-center items-center">
          <p className="ReceiptPriceL text-TextBig text-primary-color">
            {total.toFixed(2)} DKK
          </p>
        </div>
      </div>
    </>
  );
}
