import { useContext } from "react";

import { ContactsInformationFunc } from "../../Components/Context Components/ContactsInformationContext";

//Importing Components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";

export default function OutroPage() {
  const { contactInfoState } = useContext(ContactsInformationFunc);

  return (
    <>
      <main
        className="outro-page-content-wrapper page-main-section 
        px-6 2xl:px-20"
      >
        <div
          className="outro-page-inner-content
         mx-auto max-w-7xl px-6 xl:px-8 2xl:px-0"
        >
          <h1
            className="outro-page-outro-header text-TextXL text-txt-grey-color
            md:mt-20 xl:mt-24"
          >
            Thank You for your query
          </h1>
          <p className="text-TextLarge text-txt-grey-color">
            <br /> You will be contacted soon on
            <b className="text-primary-color">
              &nbsp; {contactInfoState.email}
            </b>
          </p>
        </div>
        <ButtonsHolder back={"Yes"} title={"Home"} />
      </main>
    </>
  );
}
