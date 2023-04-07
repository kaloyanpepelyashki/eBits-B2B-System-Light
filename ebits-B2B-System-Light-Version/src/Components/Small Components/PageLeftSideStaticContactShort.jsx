//Importin React hooks
import { useContext } from "react";

//Importing Context components
import { ContactsInformationFunc } from "../Context Components/ContactsInformationContext";

export default function PageLeftSideStaticContactsShort() {
  const {
    contactInfoState,
    getContactInfoFuncs: {
      handleNameChange,
      handleLastNameChange,
      handleEmailChange,
      handlePhoneChange,
    },
  } = useContext(ContactsInformationFunc);
  return (
    <>
      <div
        className="page-left-side-contacts-wrapper bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl
          focus:outline-none"
      >
        <div className="personal-contact-info-block">
          <p className="contacts-page-heading text-primary-color text-HeadingSmall">
            Contact Details
          </p>

          {/*<=== | THIS IS TO REMAIN AS IT IS NOW |===> */}

          <input
            type="text"
            className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
            value={contactInfoState.name}
            placeholder="Name"
            onChange={handleNameChange}
            required
          />
          <input
            type="text"
            className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
            value={contactInfoState.lastName}
            placeholder="Last Name"
            onChange={handleLastNameChange}
            required
          />

          <input
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
            value={contactInfoState.email}
            placeholder="Email"
            onChange={handleEmailChange}
            required
          />
          <input
            inputMode="numeric"
            pattern="[0-9]*"
            className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
            value={contactInfoState.phone}
            placeholder="Phone"
            onChange={handlePhoneChange}
            required
          />
        </div>
      </div>
    </>
  );
}
