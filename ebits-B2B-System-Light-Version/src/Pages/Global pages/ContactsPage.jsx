//Importin React hooks
import { useContext } from "react";

//Importing React-router elements and components
import { useLocation, useNavigate } from "react-router";

//Importing Context components
import { ContactsInformationFunc } from "../../Components/Context Components/ContactsInformationContext";

//Importing Components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import KitReceipt from "../../Components/Global Components/KitReceipt";
import ProcessMicroCopy from "../../Components/Global Components/MicroCopy";
import KitReceiptBottomSection from "../../Components/Small Components/KitBuyReceiptBottomSection";
import PageLeftSideStaticContacts from "../../Components/Small Components/PageLeftSideStaticContacts";
import PageLeftSideStaticContactsShort from "../../Components/Small Components/PageLeftSideStaticContactShort";
import { ShoppingCartFunc } from "../../Components/Context Components/ShoppingCartFuncContext";
import ReceiptHandler from "../../Components/Global Components/ReceiptHandler";

export default function ContactInfoPage() {
  const { contactInfoState } = useContext(ContactsInformationFunc);
  const { typeOfQuerry } = useContext(ShoppingCartFunc);

  const navigate = useNavigate();

  const handleTransfer = () => {
    if (typeOfQuerry === 2) {
      if (!contactInfoState.Name) {
        window.alert("Please tell us your name");
      }
      if (!contactInfoState.lastName) {
        window.alert("Please tell us your last name");
      }
      if (!contactInfoState.email) {
        window.alert("Please tell us your email");
      }
      if (!contactInfoState.phone) {
        window.alert("Please tell us your phone");
      } else {
        navigate("/finalChackPage");
      }
    }
    if (typeOfQuerry === 1) {
      Object.keys(contactInfoState).map((key) => {
        if (!contactInfoState[key] && contactInfoState[key].length <= 0) {
          window.alert(`Please provide us with ${key}`);
        } else {
          navigate("/finalChackPage");
        }
      });
    }
  };

  return (
    <>
      <main className="contact-info-page-main-content-wrapper page-main-section">
        <div className="contact-info-page-inner-content">
          <div className="contact-info-page-widgets-holder">
            <div>
              <ProcessMicroCopy processStep={2} />
              {typeOfQuerry == 1 ? (
                <PageLeftSideStaticContacts />
              ) : (
                <PageLeftSideStaticContactsShort />
              )}
            </div>
            <ReceiptHandler />
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
