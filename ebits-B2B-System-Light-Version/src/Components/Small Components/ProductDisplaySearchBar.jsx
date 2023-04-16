//Importing React hooks
import React, { useState, useEffect } from "react";

//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faCircleQuestion as farFaCircleQuestion } from "@fortawesome/free-regular-svg-icons";

export default React.memo(function ProductSearchBar({ product, addProduct }) {
  const [productWithVar, setProductWithVar] = useState({});
  const [variationAndPrice, setVariationAndPrice] = useState([]);

  const [revealDescription, setRevealDescription] = useState(false);

  //Fetching the variations from the server
  //////
  ////
  //

  useEffect(() => {
    //Fetching the variations and the prices for a product
    const varPostRequest = async () => {
      const response = await fetch("http://65.109.137.46:5000/apivar", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //Sending a post request with the productIndex as body content
        body: JSON.stringify({
          ProductIndex: product.ProductIndex,
        }),
      });
      const data = await response.json();
      setVariationAndPrice(data);
    };
    varPostRequest();
  }, []);
  ////
  //////

  //Sets the variable that is to hold the variation information
  let value = {
    VariationName: product.ProductName,
    VariationID: 0,
  };
  //The function that handles the variation choice
  const handleVariationChoice = (e) => {
    value = {
      ProductName: product.ProductName,
      ProductIndex: product.ProductIndex,
      VariationName: e.target.value,
      VariationID:
        e.target.options[e.target.selectedIndex].getAttribute(
          "data-variationid"
        ),
      Price: e.target.options[e.target.selectedIndex].getAttribute(
        "data-variationprice"
      ),
      Description: product.Description,
    };
    //Sets the state of teh ProductWithVar variable
    setProductWithVar((productWithVar) => ({
      ...productWithVar,
      ...value,
    }));
  };
  //The function, checking if a variation is selected
  const handleChoiceValidation = () => {
    //Checks if there is a variation
    //Checks if there is a VariationName in the productWith var object
    //And checks if there are any variations in the list of variations

    if (
      !productWithVar.VariationName &&
      (!productWithVar.Price || productWithVar.Price === 0) &&
      productWithVar.VariationName !== "select a variation"
    ) {
      //If there is no selected variation and there are variations in the list, it pushes a window alert
      window.alert("Please selct a variation");
    }
    if (productWithVar.VariationName == "select a variation") {
      window.alert("Please select a valid choice");
    } else {
      addProduct(productWithVar);
    }
  };
  return (
    <>
      <div className="product-search-bar-outter-wrapper relative">
        <div className="product-search-bar-main-container">
          <select
            onChange={(e) => {
              handleVariationChoice(e);
            }}
            className="product-search-bar-select product-search-bar text-VariationTitle bg-selector-color text-txt-white-color round-sm border-round mr-6"
          >
            <option>Select Product</option>
            {variationAndPrice.length !== 0 ? (
              variationAndPrice.map((variation) => (
                <option
                  key={variation.VariationID}
                  value={variation.ProductName}
                  data-variationid={variation.VariationID}
                  data-variationprice={variation.Price}
                >
                  {variation.ProductName}&nbsp; &nbsp; - &nbsp; &nbsp;
                  {variation.Price} DKK
                </option>
              ))
            ) : (
              <option
                data-variationid={0}
                value={product.ProductName}
                data-variationprice={product.Price}
              >
                {product.ProductName} &nbsp; &nbsp; - &nbsp; &nbsp;
                {product.Price} DKK
              </option>
            )}
          </select>
          <div
            className="product-searchbar-clickable-space"
            onClick={() => {
              handleChoiceValidation();
            }}
          >
            <img
              className="w-9 h-9 mr-6 "
              src={`http://65.109.137.46:5000/img/${product.ProductIndex}_0.jpg`}
              alt={product.ProductName}
            />
            <h2 className="text-ProductTitleSmall font-bold">
              {product.ProductName}
            </h2>
          </div>
          <div className="flex row">
            <FontAwesomeIcon
              className="product-search-bar-info-icon "
              onMouseEnter={() => setRevealDescription(true)}
              onMouseLeave={() =>
                setTimeout(() => setRevealDescription(false), 2500)
              }
              icon={faCircleQuestion}
            />
            {revealDescription ? (
              <div
                className="product-search-bar-description-pop-up absolute"
                onMouseEnter={() => setRevealDescription(true)}
                onMouseLeave={() => setRevealDescription(false)}
              >
                <p className="text-TextXXS">{product.Description}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
});
