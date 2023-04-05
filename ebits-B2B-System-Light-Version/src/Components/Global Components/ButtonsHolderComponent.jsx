//Importing React-router elements and components
import { useNavigate } from "react-router";

export default function ButtonsHolder(props) {
  const navigate = useNavigate();

  const { handleTransfer, title, backBtn } = props;

  return (
    <>
      <div className="buttons-holder">
        <div className="buttons-holder-inner">
          <button
            className="btn-holder-back text-GlobalBtnsTxt font-semibold mx-5"
            onClick={() => navigate(-1)}
          >
            &lt; Back
          </button>
          <button
            className="btn-holder-next bg-primary-color rounded-sm text-GlobalBtnsTxt font-normal mx-5"
            onClick={handleTransfer}
          >
            {title}
          </button>
        </div>
      </div>
    </>
  );
}
