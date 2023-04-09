//Importing React hooks
import { useContext, useEffect, useState } from "react";

//Importing React-router elements, components and hooks
import { useNavigate } from "react-router";

//Importing Components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import { ShoppingCartFunc } from "../../Components/Context Components/ShoppingCartFuncContext";

export default function AskToSave() {
  const navigate = useNavigate();
  const [routeChoice, setRouteChoice] = useState(0);
  const { typeOfQuerry, setTypeOfQuerry } = useContext(ShoppingCartFunc);

  //TODO Set the typeOfQuery to be on the shopping cart func context component

  useEffect(() => {
    if (routeChoice == 1) {
      setTypeOfQuerry(1);
    }
    if (routeChoice == 2) {
      setTypeOfQuerry(2);
    }
  }, [routeChoice]);

  //The logic for the order type
  const nextPageState =
    routeChoice == 1
      ? navigate("/contactInfo-Page")
      : routeChoice == 2
      ? navigate("/contactInfo-Page")
      : "";

  //Initiating the page transfer function
  const handleTransfer = () => {
    if (routeChoice == 0) {
      window.alert("Please select a choice");
    } else {
      nextPageState;
    }
  };

  return (
    // <=== TYPE OF ORDER PAGE / ASK TO EXPORT PAGE CONTENT STARTS HERE ===>
    <>
      <main className="TypeOfOrder-page-content-wrapper page-main-section">
        <div className="TypeOfOrder-inner-content">
          <h1 className="TypeOfOrder-page-header text-TextXL text-txt-grey-color font-normal mt-20 mb-10">
            Would you like to save the
            <b className="text-primary-color"> current invoice </b>as a custom
            product link?
          </h1>
          <div className="TypeOfOrder-page-route-choice-holder mx-8 mt-16">
            <div className="TypeOfOrder-page-choice-item font-semibold space-x-4">
              <input
                name="route-choice"
                className="route-choice-input mt-4"
                type="radio"
                value="2"
                onChange={(e) => {
                  setRouteChoice(e.target.value);
                  setTypeOfQuerry(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text font-semibold text-TextLarge">
                Yes
              </p>
            </div>
            <div className="TypeOfOrder-page-choice-item space-x-4">
              <input
                name="route-choice"
                className="route-choice-input w-4 h-4 mt-4"
                type="radio"
                value="1"
                onChange={(e) => {
                  setRouteChoice(e.target.value);
                  setTypeOfQuerry(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text font-bold text-TextLarge">
                No
              </p>
            </div>
          </div>
        </div>
        <ButtonsHolder
          back={"Yes"}
          title={"Next"}
          handleTransfer={handleTransfer}
          className="button-holder"
        />
      </main>
    </>
  );
}
