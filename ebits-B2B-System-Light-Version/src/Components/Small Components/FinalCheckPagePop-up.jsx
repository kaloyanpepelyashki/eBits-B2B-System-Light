//Importin React hooks
import { useState } from "react";

//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

//Importing Components
import ProductDisplaySearchBar from "./ProductDisplaySearchBar";

export default function PopUpMessage(props) {
  const [searchQuerry, setSearchQuerry] = useState(" ");

  //Importing data and functions from component's props
  const { productList, toggleUp, handleAddProduct } = props;

  //Setting the search filtering function
  //It takes the user input and filters out the array accordingly
  let filterFunc = [];
  filterFunc =
    searchQuerry !== " " && productList.length > 0
      ? productList.filter((product) =>
          product.ProductName.toLowerCase().includes(searchQuerry.toLowerCase())
        )
      : " ";

  return toggleUp ? (
    <>
      <div className="final-check-page-pop-up-full-width">
        <div className="final-check-page-pop-up-wrapper mb-32 bg-white shadow-xl">
          <div className="final-check-pop-up-inner-content">
            <div className="final-check-pop-up-top-section">
              {props.children}
            </div>
            <div className="final-check-pop-up-main-section mb-32">
              <div className="page-left-side-search-bar-icon-wrapper ">
                <input
                  className="page-left-side-search-bar block px-4 py-2 pr-24 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
                  type="text"
                  placeholder="Product name here..."
                  onChange={(e) => setSearchQuerry(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="icon absolute ml-72 py-0"
                />
              </div>
              <div className="pop-up-search-result-scroll">
                {Array.isArray(filterFunc) && searchQuerry !== ""
                  ? filterFunc
                      .slice(0, 6)
                      .map((product) => (
                        <ProductDisplaySearchBar
                          product={product}
                          addProduct={handleAddProduct}
                          key={product.ProductIndex}
                        />
                      ))
                  : " "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
