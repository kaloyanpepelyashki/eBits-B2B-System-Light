export default function ProcessMicroCopy(props) {
  const { processStep } = props;
  return (
    <>
      <div className="process-micro-copy-holder ml-10 space-x-6">
        <p className="process-micro-copy-text ml-2 text-txt-black-color text-TextXS text-left font-bold">
          Choose Products
        </p>
        <p
          className={
            processStep >= 2
              ? "process-micro-copy-text ml-2 text-txt-black-color text-TextSmall text-left font-bold"
              : "process-micro-copy-text ml-2 text-txt-black-color text-TextSmall text-left font-bold"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 2
              ? "process-micro-copy-text ml-2 text-txt-black-color text-TextXS  font-bold"
              : "process-micro-copy-text mr-2 text-txt-grey-color text-TextXS  font-bold"
          }
        >
          Contact Info
        </p>
        <p
          className={
            processStep >= 3
              ? "process-micro-copy-arrow mr-2  text-txt-black-color text-TextSmall font-bold"
              : "process-micro-copy-arrow mr-2  text-txt-grey-color text-TextSmall font-bold"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 3
              ? "process-micro-copy-arrow mr-2 text-txt-black-color text-TextXS  font-bold"
              : "process-micro-copy-arrow mr-2 text-txt-grey-color text-TextXS  font-bold"
          }
        >
          Final Check
        </p>
        <p
          className={
            processStep >= 4
              ? "process-micro-copy-arrow mr-2 text-txt-black-color text-TextSmall font-bold"
              : "process-micro-copy-arrow mr-2 text-txt-grey-color text-TextSmall font-bold"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 4
              ? "process-micro-copy-arrow mr-2 text-txt-black-color text-TextXS  font-bold"
              : "process-micro-copy-arrow mr-2 text-txt-grey-color text-TextXS  font-bold"
          }
        >
          Finish
        </p>
      </div>
    </>
  );
}
