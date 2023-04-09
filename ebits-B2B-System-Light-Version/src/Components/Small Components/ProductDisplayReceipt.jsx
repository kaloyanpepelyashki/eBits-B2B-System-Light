//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function ProductDisplayReceipt(props) {
  const { product, handleReduceProductAmount } = props;
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
      <div className="product-display-receipt-wrapper flex justify-start text-txt-grey-color">
        <div className="product-display-receipt-delete">
          <FontAwesomeIcon
            icon={faMinus}
            className="product-display-receipt-icon-minus"
            onClick={() => {
              handleReduceProductAmount(product);
            }}
          />
        </div>

        <div className="product-display-receipt-main-cont">
          <div className="product-display-receipt-name">
            <p className="text-VariationTitleSmall">
              {product.ProductName === product.VariationName ? (
                product.ProductName
              ) : (
                <DisplayNameVar />
              )}
            </p>
          </div>
          <div className="product-display-receipt-price">
            <p className="text-VariationTitle">{product.Price} dkk</p>
          </div>
        </div>
        <div className="">
          <p
            className="text-VariationTitle font-bold block ml-2 px-2 py-1 bg-white border-white border-slate-300 rounded-sm shadow-md
            focus:outline-none relative"
          >
            x{product.qty}
          </p>
        </div>
      </div>
    </>
  );
}
