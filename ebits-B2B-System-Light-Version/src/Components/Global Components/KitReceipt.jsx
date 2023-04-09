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
  } = useContext(ShoppingCartFunc);

  const handleReduceProductAmount = (product) => {
    reduceProductAmount(product);
  };

  return (
    <>
      <div className="separate-product-receipt-wrapper block px-4 py-6 mt-14 pb-56 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl ">
        <h1 className="text-total text-TextMid text-primary-color font-bold">
          Kit
        </h1>

        <div className="flex justify-center items-center">
          <p className="text-primary-color text-ProductTitleSmall mr-4 -mb-8">
            Ex VAT
          </p>

          <p className="ReceiptPriceL text-TextBig text-primary-color">
            {total.toFixed(2)}
          </p>

          <p
            className="text-primary-color font-bold text-ProductTitleSmall
                   px-4 py-2 bg-white border-white border-slate-300 rounded-xl
                  shadow-xl focus:outline-none ml-4"
          >
            DKK.
          </p>
        </div>

        <div className="line line-3 mt-1.5"></div>
        <div className="product-receipt-products-display-section">
          <h1 className="text-cardText text-primary-color mt-4 mr-40 font-bold">
            Products:
          </h1>
          <div className="scroll-section">
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
          <div className="line line-3"></div>
        </div>
        {props.children}
      </div>
    </>
  );
}
