//Importing React hooks
import { createContext, useState } from "react";

export const ShoppingCartFunc = createContext();

export const ShoppingCartProvider = (props) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [kitAmount, setKitAmount] = useState(1);
  let total = 0;
  cartProducts.map((product) => (total = total + product.qty * product.Price));

  const funcs = {
    addProduct: (product) => {
      //Return true if there is a product with an index in the cart, that is equal to the product index you are adding to the cart now
      const doesExist = cartProducts.find(
        (item) =>
          item.ProductName === product.ProductName &&
          item.ProductIndex === product.ProductIndex &&
          item.VariationName?.toLowerCase() ===
            product.VariationName?.toLowerCase() &&
          item.VariationID === product.VariationID
      );
      //If doesExist is true, it adds one more to the qty (quantity)  of the product
      if (doesExist) {
        setCartProducts(
          cartProducts.map((item) =>
            item.ProductName === product.ProductName &&
            item.ProductIndex === product.ProductIndex &&
            item.VariationName?.toLowerCase() ===
              product.VariationName?.toLowerCase() &&
            item.VariationID === product.VariationID
              ? {
                  ...doesExist,
                  qty: doesExist.qty + 1,
                  varQty: doesExist.varQty + 1,
                }
              : item
          )
        );
        //If doesExist is not true, it just adds the product to the cart with quantity 1
      } else {
        setCartProducts([
          ...cartProducts,
          {
            ...product,
            qty: 1,
            varQty: 1,
            productName: product.ProductName,
            VariationName: product.VariationName,
            VariationID: product.VariationID,
            productBaksetUnqKey: `${product.ProductIndex} / ${product.VariationID}`,
          },
        ]);
      }
    },

    //<== REDUCE AMOUNT FROM CARD CART FUNCTIONALITY FEATURE

    //TODO Examine, if the application still has the reduction bug (removeing all from the same kind despite the variations. Or removing all the ones that have no variation)
    reduceProductAmount: (product) => {
      const doesExist = cartProducts.find(
        (item) =>
          item.ProductName === product.ProductName &&
          item.ProductIndex === product.ProductIndex &&
          item.VariationName?.toLowerCase() ===
            product.VariationName?.toLowerCase() &&
          item.VariationID === product.VariationID &&
          item.productBaksetUnqKey === product.productBaksetUnqKey
      );
      if (doesExist.qty === 1 && doesExist.varQty === 1) {
        setCartProducts(
          cartProducts.filter(
            (item) =>
              //Code I removed on last deb
              // item.product.ProductName !== product.product.ProductName &&
              // item.product.ProductIndex !== product.product.ProductIndex &&
              item.VariationName?.toLowerCase() !==
                product.VariationName?.toLowerCase() &&
              item.VariationID !== product.VariationID
          )
        );
      } else {
        setCartProducts(
          cartProducts.map((item) =>
            item.ProductName === product.ProductName &&
            item.ProductIndex === product.ProductIndex &&
            item.VariationName?.toLowerCase() ===
              product.VariationName?.toLowerCase() &&
            item.VariationID === product.VariationID
              ? {
                  ...doesExist,
                  qty: doesExist.qty - 1,
                  varQty: doesExist.varQty - 1,
                }
              : item
          )
        );
      }
    },

    increaseProductAmount: (product) => {
      const doesExist = cartProducts.find(
        (item) =>
          item.ProductName === product.ProductName &&
          item.ProductIndex === product.ProductIndex &&
          item.VariationName?.toLowerCase() ===
            product.VariationName?.toLowerCase() &&
          item.VariationID === product.VariationID
      );
      setCartProducts(
        cartProducts.map((item) =>
          item.ProductName === product.ProductName &&
          item.ProductIndex === product.ProductIndex &&
          item.VariationName?.toLowerCase() ===
            product.VariationName?.toLowerCase() &&
          item.VariationID === product.VariationID
            ? {
                ...doesExist,
                qty: doesExist.qty + 1,
                varQty: doesExist.varQty + 1,
              }
            : item
        )
      );
    },

    //<== REMOVE FROM CART FUNCTIONALITY FEATURE

    removeProduct: (product) => {
      const doesExist = cartProducts.find(
        (item) =>
          item.ProductName === product.ProductName &&
          item.ProductIndex === product.ProductIndex &&
          item.VariationName?.toLowerCase() ===
            product.VariationName?.toLowerCase() &&
          item.VariationID === product.VariationID &&
          item.productBaksetUnqKey === product.productBaksetUnqKey
      );
      if (doesExist.qty === 1) {
        setCartProducts(
          cartProducts.filter(
            (item) =>
              //Code I removed on last debug
              // item.product.ProductName !== product.product.ProductName &&
              item.ProductIndex !== product.ProductIndex &&
              item.VariationName?.toLowerCase() !==
                product.VariationName?.toLowerCase()
          )
        );
      } else {
        setCartProducts(
          cartProducts.map((item) =>
            item.ProductName === product.ProductName &&
            item.ProductIndex === product.ProductIndex &&
            item.VariationName?.toLowerCase() ===
              product.VariationName?.toLowerCase() &&
            item.VariationID === product.VariationID &&
            item.productBaksetUnqKey === product.productBaksetUnqKey
              ? {
                  ...doesExist,
                  qty: (doesExist.qty = 0),
                  varQty: (doesExist.varQty = 0),
                }
              : item
          )
        );
      }
    },
  };

  return (
    <ShoppingCartFunc.Provider
      value={{
        cartProducts,
        funcs,
        setCartProducts,
        kitAmount,
        setKitAmount,
        total,
      }}
    >
      {props.children}
    </ShoppingCartFunc.Provider>
  );
};
