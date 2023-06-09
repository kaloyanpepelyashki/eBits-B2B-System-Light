//Importin React hooks
import { useContext, useState } from "react";

//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

//Importing Components
import ProductDisplayFinalCheckPage from "../Small Components/ProductDisplayFinalCheckPage";
import PopUpMessage from "../Small Components/FinalCheckPagePop-up";

export default function PageLeftSideFinalCheckPage(props) {
  const { cartProducts, productList } = props;
  const {
    funcs: { addProduct, removeProduct },
  } = useContext(ShoppingCartFunc);

  const [toggleUp, setToggleUp] = useState(false);

  const handleAddProduct = (product) => {
    addProduct(product);
  };
  const handleRemoveProduct = (product) => {
    removeProduct(product);
  };
  return (
    <>
      <PopUpMessage
        productList={productList}
        handleAddProduct={handleAddProduct}
        toggleUp={toggleUp}
        setToggleUp={setToggleUp}
      >
        <FontAwesomeIcon
          className="text-TextMid"
          icon={faXmark}
          onClick={() => {
            setToggleUp(false);
          }}
        />
      </PopUpMessage>
      <div
        className="page-left-side-wrapper px-10 py-6 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl
            "
      >
        <div className="page-left-side-contacts-main-content">
          <div className="page-left-side-contacts-top-section">
            <p className="page-left-side-contacts-top-section-heading font-bold  text-primary-color">
              Last check if this is everything...
            </p>

            <div className="page-left-side-contacts-add-more-holder text-primary-color invisible md:visible">
              <FontAwesomeIcon
                icon={faPlus}
                className="text-TextMid cursor-pointer md:mr-2"
                onClick={() => {
                  setToggleUp(true);
                }}
              />
              <p className="text-primary-color text-ProductTitleSmall font-bold">
                Add more
              </p>
            </div>
          </div>
          {props.children}
          <div className="products-holder-section">
            <div className="final-check-products-table-holder">
              <table className="final-check-product-table">
                <thead>
                  <tr className="final-check-product-table-head">
                    <th className="final-check-product-table-I-tag-field"></th>
                    <th className="final-check-product-table-name-field">
                      Name
                    </th>
                    <th className="final-check-product-table-total-field">
                      Total
                    </th>
                    <th className="final-check-product-table-amount-field">
                      Amount
                    </th>
                    <th className="final-check-product-table-delete-field"></th>
                  </tr>
                </thead>
                <tbody className="final-check-page-products-display-tbody">
                  {cartProducts.map((product) =>
                    product.qty > 0 && product.varQty > 0 ? (
                      <ProductDisplayFinalCheckPage
                        key={product.productBaksetUnqKey}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                      />
                    ) : (
                      ""
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
