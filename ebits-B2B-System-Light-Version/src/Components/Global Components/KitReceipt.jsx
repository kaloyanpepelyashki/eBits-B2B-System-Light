//Importing React hooks
import { useContext } from "react";

//Importing Context components
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

//Importing Components
import ProductDisplayReceipt from "../Small Components/ProductDisplayReceipt";

export default function KitReceipt(props) {
  const {
    cartProducts,
    funcs: { reduceProductAmount },
    total,
    isKit,
  } = useContext(ShoppingCartFunc);

  const handleReduceProductAmount = (product) => {
    reduceProductAmount(product);
  };

  return (
    <>
      <div className="separate-product-receipt-wrapper block px-4 py-6 mt-14 pb-51 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl max-w-screen-lg mx-auto ">
        <h1 className="text-total text-TextMid text-primary-color font-bold cursor-default">
          {isKit ? "Kit" : "Total"}
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center">
          <p className="text-primary-color text-ProductTitleSmall mr-4 -mb-8 cursor-default">
            Ex VAT
          </p>

          <p className="ReceiptPriceL text-TextBig text-primary-color cursor-default">
            {total.toFixed(2)}
          </p>

          <p className="text-primary-color font-bold text-ProductTitleSmall ml-4 mt-6 cursor-default">
            DKK.
          </p>
        </div>

        <div className="line line-3 mt-1.5"></div>

        <div
          className="product-receipt-products-display-section"
          style={{ height: isKit ? "46%" : "90%" }}
        >
          <h1 className="text-cardText text-primary-color mt-4 mr-40 mb-3 font-bold cursor-default">
            Products:
          </h1>

          <div
            className="scroll-section sm:max-h-80 md:max-h-85 lg:max-h-100 xl:max-h-104 overflow-y-auto"
            style={{ height: isKit ? "90%" : "90%" }}
          >
            {cartProducts.map((product) =>
              product.qty && product.variationQty !== 0 ? (
                <ProductDisplayReceipt
                  key={product.productBaksetUnqKey}
                  product={product}
                  handleReduceProductAmount={handleReduceProductAmount}
                />
              ) : (
                ""
              )
            )}
          </div>

          {isKit ? <div className="line line-3"></div> : ""}
        </div>

        {props.children}
      </div>
    </>
  );
}
