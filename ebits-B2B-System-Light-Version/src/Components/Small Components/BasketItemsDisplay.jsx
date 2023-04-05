import { useEffect, useState } from "react";

export default function BasketProductsDisplay(props) {
  const {
    product,
    handleIncreaseProductAmount,
    handleReduceProductAmount,
    handleRemoveProduct,
    setGlobalPrices,
  } = props;

  // //Validates the product data forma
  // //If there is a variation in the product object
  // const productFormatValidation = product.VariationID
  //   ? //Sends the data + the VariationID
  //     JSON.stringify({
  //       ProductIndex: product.ProductIndex,
  //       VariationID: product.VariationID,
  //       Amount: product.qty,
  //     })
  //   : //If there is no variation
  //     //Sends the data without a VariationID
  //     JSON.stringify({
  //       ProductIndex: product.product.ProductIndex,
  //       Amount: product.qty,
  //     });

  // useEffect(() => {
  //   const sendPostRequestPrice = async () => {
  //     //Sending a POST request to the server with the product price
  //     await fetch("http://65.109.137.46:5000/pyth", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       //Sends to the server the validated format of the product data
  //       body: productFormatValidation,
  //     })
  //       //The server retreives a price that match the criteria
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data !== null && data !== undefined) {
  //           const parsedData = JSON.parse(data);
  //           setProductPrice(parsedData);
  //           //Checking if the globalPrices variable is equal to 0
  //           if (globalPrices < 0) {
  //             //If it is equal to 0, then it just sets the value
  //             setGlobalPrices(Number(parsedData.toFixed(2)));
  //           } else {
  //             //If it is not equal to 0, then it adds the new price to the old value
  //             setGlobalPrices((prevPrice) => {
  //               return Number(
  //                 (prevPrice + Number(parsedData.toFixed(2))).toFixed(2)
  //               );
  //             });
  //           }
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         console.error(err);
  //       });
  //   };
  //   sendPostRequestPrice();
  // }, [product]);

  return (
    <div className="item-display-basket w-full">
      <div className="bg-white border-white rounded-sm text-sm shadow-md focus:outline-none">
        <div className="flex justify-between items-center">
          <div className="flex items-center ml-10 mr-10">
            <img
              className="w-10 h-10 object-contain"
              src={`http://65.109.137.46:5000/img/${product.ProductIndex}_${product.VariationID}.jpg`}
              alt={product.ProductName}
            />
            <h2 className="inline-block font-bold text-ProductTitleSmall">
              {product.productName}
              <br />
              {product.VariationName}
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
