//Importing React hooks
import { useState } from "react";

//Importing React-router elements, components and hooks
import { useNavigate } from "react-router";

//Importing libraries

//Importing components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";

export default function LandingPage({ productsList }) {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const products = productsList;

  console.log(products);

  //The function that sends the email information to the mailer
  function sendMail() {
    //Validates the email
    //Checks if the email contains "@"
    if (!emailAddress.includes("@")) {
      //If the email doesn't contain "@" the validation is false
      setEmailValidation(false);
    } else {
      setEmailValidation(true);
      console.log({ emailAddress });
      axios
        //Makes a post request to the mailer server
        .post(
          "http://localhost:5000/mailer",
          { emailAddress: emailAddress },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleTransfer = () => {
    navigate("/select-products");
  };

  return (
    <>
      <main
        className="landing-page-content-wrapper page-main-section 
         px-6 mt-8 mb-8 2xl:px-20"
      >
        <div
          className="landing-page-inner-content
         mx-auto max-w-7xl px-6 xl:px-8 2xl:px-0"
        >
          <h1
            className="landing-page-welcome-header text-TextBig
             md:pt-10 xl:mt-24 cursor-default"
          >
            Before starting your shop journey, do
            <br /> you want us to send you
            <b className="text-primary-color"> our catalog</b>?
          </h1>
          <div className="mt-4">
            <input
              className="email-input-field block px-3 py-2 bg-white border-white border-slate-300 rounded-sm text-sm shadow-xl focus:outline-none 
            md:mr-4 max-w-lg 2xl:max-w-xl"
              type="text"
              placeholder="Your Email..."
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            {!emailValidation && (
              <p
                className="email-validation text-sm ml-14
              mt-2 mb-0 md:mb-6 lg:mb-10 2xl:w-1/2"
              >
                Please enter a valid email
              </p>
            )}
          </div>
          <button
            onClick={sendMail}
            className="form-btn bg-primary-color mt-8 py-1 px-6 rounded-sm"
          >
            Send
          </button>
        </div>
        <ButtonsHolder
          back={"No"}
          title={"Next"}
          handleTransfer={handleTransfer}
          className="buttons-holder"
        />
      </main>
    </>
  );
}
