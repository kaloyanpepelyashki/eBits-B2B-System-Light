//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//Importing Components
import ProductAmountHandler from "./AtomicComponents/ProductAmountHandler";

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
            <ProductAmountHandler
              product={product}
              handleIncreaseProductAmount={handleIncreaseProductAmount}
              handleReduceProductAmount={handleReduceProductAmount}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="trash-icon final-check-product-icon"
              onClick={() => {
                handleRemoveProduct(product);
              }}
            />
            <p className="text-right inline-block text-ProductTitleMedium font-extrabold w-32">
              {(Number(product.Price) * Number(product.qty)).toFixed(2)}
              &nbsp;Dkk
            </p>
          </div>
        </div>
        {/* //TODO MAKE THE DESCRIPTION MESSAGE //TODO MAKE THE DESCRIPTION MESSAGE
        POP-UP ON HOVER ON THE INFORMATION ICON */}
      </div>
    </div>
  );
}
