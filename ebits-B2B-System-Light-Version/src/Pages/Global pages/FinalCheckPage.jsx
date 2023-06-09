//Importin React hooks
import { useContext } from "react";

//Importing React-router elements and components
import { useNavigate } from "react-router";

//Importing Context Components
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
import ReceiptHandler from "../../Components/Global Components/ReceiptHandler";

export default function FinalCheckPage(props) {
  const navigate = useNavigate();

  const { productList } = props;

  const { cartProducts, typeOfQuerry } = useContext(ShoppingCartFunc);

  const nextRoute = typeOfQuerry === 2 ? "/name-it" : "/thankYou";

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
    navigate(nextRoute);
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
                {typeOfQuerry === 2 ? (
                  " "
                ) : (
                  <PageLeftTopSection>
                    <AmountPicker />
                  </PageLeftTopSection>
                )}
              </PageLeftSideFinalCheckPage>
            </div>
            <ReceiptHandler />
          </div>
        </div>
        <div className="buttons-holder-h">
          <ButtonsHolder back={"Yes"} handleTransfer={handleTransfer} />
        </div>
      </main>
    </>
  );
}
