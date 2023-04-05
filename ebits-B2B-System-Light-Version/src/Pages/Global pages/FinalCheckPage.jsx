//Importin React hooks
import { useContext } from "react";

//Importing React-router elements and components
import { useLocation, useNavigate } from "react-router";

import { ShoppingCartFunc } from "../../Components/Context Components/ShoppingCartFuncContext";
import { ContactsInformationFunc } from "../../Components/Context Components/ContactsInformationContext";

//Importing components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";

import axios from "axios";
import KitReceipt from "../../Components/Global Components/KitReceipt";
import KitReceiptBottomSection from "../../Components/Small Components/KitBuyReceiptBottomSection";
import PageLeftTopSection from "../../Components/Global Components/PageLeftSideTopSection";
import AmountPicker from "../../Components/Small Components/AtomicComponents/AmountPicker";
import ProcessMicroCopy from "../../Components/Global Components/MicroCopy";
import PageLeftSideFinalCheckPage from "../../Components/Global Components/PageLeftSideFinalCheckPage";

export default function FinalCheckPage(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const { productList } = props;

  const { cartProducts } = useContext(ShoppingCartFunc);

  const { contactInfoState } = useContext(ContactsInformationFunc);

  // const sendQuery = () => {
  //   axios
  //     //Makes a post request to the mailer server
  //     .post(
  //       "http://localhost:5000/querymailer",
  //       {
  //         emailAddress: contactInfoState.email,
  //         name: contactInfoState.name,
  //         lastName: contactInfoState.lastName,
  //       },
  //       { headers: { "Content-Type": "application/json" } }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const handleTransfer = () => {
    navigate("/thankYou");
  };
  return (
    <>
      <main className="final-check-page-content-wrapper page-main-section">
        <div className="final-check-page-inner-content page-inner-content">
          <div className="final-check-page-widgets-holder page-widgets-holder">
            <div>
              <ProcessMicroCopy processStep={3} />
              <PageLeftSideFinalCheckPage
                productList={productList}
                cartProducts={cartProducts}
              >
                {location.state.contactsPageType === "separateProductsBuy" ? (
                  ""
                ) : (
                  <PageLeftTopSection>
                    {location.state.contactsPageType === "kitBuy" ? (
                      <AmountPicker />
                    ) : (
                      ""
                    )}
                  </PageLeftTopSection>
                )}
              </PageLeftSideFinalCheckPage>
            </div>
            <KitReceipt>
              <KitReceiptBottomSection />
            </KitReceipt>
          </div>
        </div>
        <div className="buttons-holder-h">
          <ButtonsHolder
            back={"Yes"}
            title={"Next"}
            handleTransfer={handleTransfer}
          />
        </div>
      </main>
    </>
  );
}
