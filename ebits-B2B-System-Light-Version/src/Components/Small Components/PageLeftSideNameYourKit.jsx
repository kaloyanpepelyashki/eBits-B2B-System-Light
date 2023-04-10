export default function PageLeftSideNameKit() {
  return (
    <>
      <div className="page-left-side-name-kit page-left-side-wrapper block py-6 mb-14 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl">
        <div className="page-left-side-name-kit-main-content">
          <div className="page-left-side-name-kit-top-section">
            <p className="text-TextBig text-primary-color font-bold">
              Give your kit a name
            </p>
            <input
              type="text"
              className="name-it-input-field name-it-input-kit-name px-3 py-2 bg-white border-white border-slate-300 rounded-sm text-sm shadow-xl focus:outline-none"
              placeholder="Name...?"
            />
            <input
              type="text"
              className="name-it-input-field name-it-input-kit-description px-3 py-2 bg-white border-white border-slate-300 rounded-sm text-sm shadow-xl focus:outline-none"
              placeholder="Tell us more..."
            />
          </div>
          <div className="line line-2 line-name-it"></div>
          <div className="page-left-side-name-kit-bottom-section">
            <div className="name-it-choice-holder">
              <input
                name="export-option"
                type="radio"
                className="name-it-choice-radio"
              />
              <p className="text-TextMidSmall">Export to website</p>
            </div>
            <div className="name-it-choice-holder">
              <input
                name="export-option"
                type="radio"
                className="name-it-choice-radio "
              />
              <p className="text-TextMidSmall">Keep it private</p>
            </div>
          </div>
          <button
            type="button"
            className="name-it-page-ok-btn bg-primary-color rounded-sm"
          >
            Ok
          </button>
        </div>
      </div>
    </>
  );
}
