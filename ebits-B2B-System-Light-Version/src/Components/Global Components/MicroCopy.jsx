import { useNavigate } from "react-router-dom";

export default function ProcessMicroCopy(props) {
  const { processStep } = props;
  const navigate = useNavigate();

  const handleClick = (destination) => {
    navigate(destination);
  };
  return (
    <>
      <div className="process-micro-copy-holder ml-10 space-x-6 my-5">
        <p
          className="process-micro-copy-text ml-2 text-txt-black-color text-TextXS text-left font-bold cursor-pointer"
          onClick={() => handleClick("/select-products")}
        >
          Choose Products
        </p>
        <p
          className={
            processStep >= 2
              ? "process-micro-copy-text ml-2 text-txt-black-color text-TextSmall text-left font-bold cursor-default"
              : "process-micro-copy-text ml-2 text-txt-black-color text-TextSmall text-left font-bold cursor-default"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 2
              ? "process-micro-copy-text ml-2 text-txt-black-color text-TextXS  font-bold cursor-pointer"
              : "process-micro-copy-text mr-2 text-txt-grey-color text-TextXS  font-bold cursor-default"
          }
          onClick={
            processStep >= 2 ? () => handleClick("/contactInfo-Page") : ""
          }
        >
          Contact Info
        </p>
        <p
          className={
            processStep >= 3
              ? "process-micro-copy-arrow mr-2  text-txt-black-color text-TextSmall font-bold cursor-default"
              : "process-micro-copy-arrow mr-2  text-txt-grey-color text-TextSmall font-bold cursor-default"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 3
              ? "process-micro-copy-text mr-2 text-txt-black-color text-TextXS  font-bold cursor-pointer"
              : "process-micro-copy-text mr-2 text-txt-grey-color text-TextXS  font-bold cursor-default"
          }
          onClick={processStep >= 2 ? () => handleClick("/finalChackPage") : ""}
        >
          Final Check
        </p>
        <p
          className={
            processStep >= 4
              ? "process-micro-copy-arrow mr-2 text-txt-black-color text-TextSmall font-bold cursor-default"
              : "process-micro-copy-arrow mr-2 text-txt-grey-color text-TextSmall font-bold cursor-default"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 4
              ? "process-micro-copy-arrow mr-2 text-txt-black-color text-TextXS  font-bold cursor-default"
              : "process-micro-copy-arrow mr-2 text-txt-grey-color text-TextXS  font-bold cursor-default"
          }
        >
          Finish
        </p>
      </div>
    </>
  );
}
