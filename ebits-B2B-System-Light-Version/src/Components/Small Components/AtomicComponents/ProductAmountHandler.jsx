import { useContext } from "react";
import { ShoppingCartFunc } from "../../Context Components/ShoppingCartFuncContext";

export default function ProductAmountHandler(props) {
  const { product } = props;

  const {
    funcs: {
      reduceProductAmount,
      increaseProductAmount,
      handleDirectAmountInput,
    },
  } = useContext(ShoppingCartFunc);

  const handleUserDirectInput = (product, amount) => {
    handleDirectAmountInput(product, amount);
  };

  const handleReduceProductAmount = (product) => {
    reduceProductAmount(product);
  };
  const handleIncreaseProductAmount = (product) => {
    increaseProductAmount(product);
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
        <input
          type="number"
          className="final-check-product-table-price direct-amount-input-amounnt-handler w-12 mt-1 mx-2 "
          value={product.qty}
          onChange={(e) =>
            handleUserDirectInput(product, Number(e.target.value))
          }
          min={1}
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
