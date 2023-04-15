import { useContext, useState } from "react";
import { ShoppingCartFunc } from "../../Context Components/ShoppingCartFuncContext";

export default function ProductAmountHandler(props) {
  const { product, handleIncreaseProductAmount, handleReduceProductAmount } =
    props;

  const [amountValue, setAmountValue] = useState(product.qty);
  const {
    funcs: {
      addProduct,
      reduceProductAmount,
      increaseProductAmount,
      removeProduct,
      handleDirectAmountInput,
    },
  } = useContext(ShoppingCartFunc);

  const handleUserDirectInput = (product, amount) => {
    handleDirectAmountInput(product, amount);
    setAmountValue(amount);
  };
  return (
    <>
      <div className="product-amount-handler-component-wrapper flex items-center">
        <button
          className="inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 -mr-2"
          onClick={() => {
            handleReduceProductAmount(product);
          }}
        >
          -
        </button>
        {/*  
        <h2 className="final-check-product-table-price text-ProductAmountIndex mt-1 mx-2">
          <b>{product.qty}</b>
        </h2> */}
        <input
          type="number"
          className="final-check-product-table-price direct-amount-input-amounnt-handler w-12 mt-1 mx-2 "
          value={product.qty}
          onChange={(e) =>
            handleUserDirectInput(product, Number(e.target.value))
          }
        />
        <button
          className="inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 mr-10"
          onClick={() => {
            handleIncreaseProductAmount(product);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
