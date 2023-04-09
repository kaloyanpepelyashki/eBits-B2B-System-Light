export default function ProductAmountHandler(props) {
  const { product, handleIncreaseProductAmount, handleReduceProductAmount } =
    props;
  return (
    <>
      <div className="product-amount-handler-component-wrapper flex items-center">
        <button
          className="inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 -mr-2"
          onClick={() => {
            handleIncreaseProductAmount(product);
          }}
        >
          +
        </button>

        <h2 className="final-check-product-table-price text-ProductAmountIndex mt-1 mx-2">
          <b>{product.qty}</b>
        </h2>

        <button
          className="inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 mr-10"
          onClick={() => {
            handleReduceProductAmount(product);
          }}
        >
          -
        </button>
      </div>
    </>
  );
}
