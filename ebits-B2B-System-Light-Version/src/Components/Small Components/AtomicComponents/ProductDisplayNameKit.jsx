export default function ProductDisplayStaticReceipt(props) {
  const { product } = props;
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
      </div>
    </>
  );
}
