//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import ProductAmountHandler from "./AtomicComponents/ProductAmountHandler";

export default function ProductDisplayFinalCheckPage(props) {
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
      <tr className="final-check-product-table-row-item">
        <td className="final-check-product-table-I-tag-field">
          <FontAwesomeIcon
            className="final-check-product-I-icon final-check-product-icon text-textSmall"
            icon={faCircleInfo}
          />
        </td>
        <tr className="final-check-product-table-row">
          <td className="final-check-product-table-name-field text-ProductTitleSmall">
            {product.VariationName &&
            product.ProductName !== product.VariationName ? (
              <DisplayNameVar />
            ) : (
              product.ProductName
            )}
          </td>
        </tr>
        <td className="final-check-product-table-total-field text-ProductTitleMedium">
          {product.Price} dkk
        </td>
        <td className="final-check-product-table-amount-field final-check-product-table-amount-field-flex">
          <ProductAmountHandler product={product} />
        </td>
        <td className="final-check-product-table-delete-field">
          <FontAwesomeIcon
            icon={faTrash}
            className="trash-icon final-check-product-icon"
            onClick={() => {
              handleRemoveProduct(product);
            }}
          />
        </td>
      </tr>
    </>
  );
}
