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
      <main
        className="TypeOfOrder-page-content-wrapper page-main-section
      px-6 mt-14 2xl:px-20"
      >
        <div className="TypeOfOrder-inner-content">
          <div
            className=" landing-page-welcome-header text-TextBig text-center
           md:pt-10 xl:mt-24"
          >
            Would you like to save the&nbsp;
            <b className="text-primary-color">
              current invoice <br />
            </b>
            a custom product link?
            <div />
          </div>
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
              <p className="text-primary-color mt-5 TypeOfOrder-page-choice-text font-semibold text-TextBig">
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
              <p className="text-primary-color mt-5 TypeOfOrder-page-choice-text font-bold text-TextBig">
                No
              </p>
            </div>
          </div>
        </div>
        <ButtonsHolder
          handleTransfer={handleTransfer}
          className="button-holder"
        />
      </main>
    </>
  );
}
