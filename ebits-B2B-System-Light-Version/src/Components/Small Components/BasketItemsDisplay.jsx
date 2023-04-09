import { useEffect, useState } from "react";

export default function BasketProductsDisplay(props) {
  const {
    product,
    handleIncreaseProductAmount,
    handleReduceProductAmount,
    handleRemoveProduct,
    setGlobalPrices,
  } = props;

  const DisplayNameVar = () => {
    return (
      <>
        {product.ProductName}
        <br />
        {product.VariationName}
      </>
    );
  };

  return (
    <div className="item-display-basket">
      <div className="bg-white border-white rounded-sm text-sm shadow-md focus:outline-none">
        <div className="flex justify-between items-center">
          <div className="flex items-center ml-10 mr-10">
            <img
              className="w-10 h-10 object-contain"
              src={`http://65.109.137.46:5000/img/${product.ProductIndex}_${product.VariationID}.jpg`}
              alt={product.ProductName}
            />
            <h2 className="inline-block font-bold text-ProductTitleSmall">
              {product.ProductName === product.VariationName ? (
                product.ProductName
              ) : (
                <DisplayNameVar />
              )}
            </h2>
          </div>

          <div className="flex items-center">
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

            <p className="text-right inline-block text-ProductTitleMedium font-extrabold w-32">
              {(Number(product.Price) * Number(product.qty)).toFixed(2)}
              &nbsp;Dkk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
