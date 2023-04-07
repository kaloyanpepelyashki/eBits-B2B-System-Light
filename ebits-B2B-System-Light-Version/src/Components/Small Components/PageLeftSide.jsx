//Importin React hooks
import { useContext, useState } from "react";

//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

//Importing Components
import BasketProductsDisplay from "./BasketItemsDisplay";
import ProductSearchBar from "../Small Components/ProductDisplaySearchBar";

export default function PageLeftSide(props) {
  const [searchQuerry, setSearchQuerry] = useState(" ");
  const { productsList } = props;

  //Getting the context data from the context component
  //Destructuring the object, for a best practice use
  const {
    cartProducts,
    funcs: {
      addProduct,
      reduceProductAmount,
      increaseProductAmount,
      removeProduct,
    },
  } = useContext(ShoppingCartFunc);

  //Re-assigning the functions for the basked functionality features.
  const handleAddProduct = (product) => {
    addProduct(product);
  };
  const handleRemoveProduct = (product) => {
    removeProduct(product);
  };
  const handleReduceProductAmount = (product) => {
    reduceProductAmount(product);
  };
  const handleIncreaseProductAmount = (product) => {
    increaseProductAmount(product);
  };

  //Setting the search filtering function
  //It takes the user input and filters out the array accordingly
  let filterFunc = [];
  filterFunc =
    searchQuerry !== " "
      ? productsList.filter((product) =>
          product.ProductName.toLowerCase().includes(searchQuerry.toLowerCase())
        )
      : " ";

  return (
    <>
      <div
        className="page-left-side-wrapper block px-4 py-6 mb-14 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl
            focus:outline-none "
      >
        {props.children}
        <div className="page-left-side-main-section">
          {/* <= //The input field the user types in */}
          <input
            className="page-left-side-search-bar block px-4 py-2 pr-80 bg-white border-white  rounded-sm text-sm shadow-md
            focus:outline-none"
            type="text"
            placeholder="Product name here..."
            onChange={(e) => setSearchQuerry(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon absolute -mt-10 py-0"
          />
          <div className="search-result-container-scroll">
            {Array.isArray(filterFunc) && searchQuerry !== ""
              ? filterFunc
                  .slice(0, 6)
                  .map((product) => (
                    <ProductSearchBar
                      product={product}
                      addProduct={handleAddProduct}
                      key={product.ProductIndex}
                    />
                  ))
              : " "}
          </div>
        </div>
        <div className="line line-2"></div>
        <div className="page-left-side-basket-section">
          <h2 className="text-cardText font-bold text-primary-color">
            Your products :
          </h2>

          <div className="page-left-side-bottom-section">
            <div className="basket-scroll-section">
              {cartProducts.map((product) =>
                product.qty > 0 && product.varQty > 0 ? (
                  <BasketProductsDisplay
                    key={product.productBaksetUnqKey}
                    product={product}
                    handleIncreaseProductAmount={handleIncreaseProductAmount}
                    handleReduceProductAmount={handleReduceProductAmount}
                    handleRemoveProduct={handleRemoveProduct}
                  />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
