import { useNavigate } from "react-router-dom";
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSideNameKit from "../../Components/Small Components/PageLeftSideNameYourKit";
import ReceiptStaticExportKit from "../../Components/Small Components/ReceiptStaticExportKit";

export default function NameKit() {
  const navigate = useNavigate();

  const handleTransfer = () => {
    navigate("/thankYou");
  };
  return (
    <>
      <main className="product-selectionKB-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionKB-page-inner-content product-selection-page-inner-content">
          <div className="final-check-page-widgets-holder page-widgets-holder">
            <div>
              <div className="name-it-page-empty-space"></div>
              <PageLeftSideNameKit />
            </div>
            <ReceiptStaticExportKit />
          </div>
          <ButtonsHolder
            back={"Yes"}
            title={"Finish"}
            handleTransfer={handleTransfer}
          />
        </div>
      </main>
    </>
  );
}
