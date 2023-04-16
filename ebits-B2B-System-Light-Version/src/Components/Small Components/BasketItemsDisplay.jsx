//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//Importing Components
import ProductAmountHandler from "./AtomicComponents/ProductAmountHandler";
import ProductImageHandler from "./AtomicComponents/ProductImageHandler";

export default function BasketProductsDisplay(props) {
  const { product, handleRemoveProduct } = props;

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
    <>
      <div className="item-display-basket">
        <div className="item-display-basket-inner-content bg-white border-white rounded-sm text-sm shadow-md focus:outline-none flex justify-center items-center">
          <div className="item-display-inner flex justify-between items-center">
            <div className="flex items-center ml-10 mr-10">
              <ProductImageHandler
                imageURL={`http://65.109.137.46:5000/img/${product.ProductIndex}_${product.VariationID}.jpg`}
                fallBackURL={`http://65.109.137.46:5000/img/${product.ProductIndex}_0.jpg`}
                product={product}
              />
              <h2 className="inline-block font-bold text-ProductTitleSmall ml-10 cursor-default">
                {product.ProductName === product.VariationName ? (
                  product.ProductName
                ) : (
                  <DisplayNameVar />
                )}
              </h2>
            </div>

            <div className="flex items-center">
              <ProductAmountHandler product={product} />
              <FontAwesomeIcon
                icon={faTrash}
                className="trash-icon final-check-product-icon"
                onClick={() => {
                  handleRemoveProduct(product);
                }}
              />
              <p className="text-right inline-block text-ProductTitleMedium font-extrabold w-32 cursor-default">
                {(Number(product.Price) * Number(product.qty)).toFixed(2)}
                &nbsp;Dkk
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
