export default function ProcessMicroCopy(props) {
  const { processStep } = props;
  return (
    <>
      <div className="process-micro-copy-holder ml-10 space-x-6">
        <p className="process-micro-copy-text ml-2 text-txt-black-color text-ProductAmountIndex text-left font-bold">
          Choose Products
        </p>
        <p
          className={
            processStep >= 2
              ? "process-micro-copy-text ml-2 text-txt-black-color text-GlobalBtnsTxt text-left font-bold"
              : "process-micro-copy-text ml-2 text-txt-black-color text-GlobalBtnsTxt text-left font-bold"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 2
              ? "process-micro-copy-text ml-2 text-txt-black-color text-ProductAmountIndex font-bold"
              : "process-micro-copy-text mr-2 text-txt-grey-color text-ProductAmountIndex font-bold"
          }
        >
          Contact Info
        </p>
        <p
          className={
            processStep >= 3
              ? "process-micro-copy-arrow mr-2  text-txt-black-color text-GlobalBtnsTxt font-bold"
              : "process-micro-copy-arrow mr-2  text-txt-grey-color text-GlobalBtnsTxt font-bold"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 3
              ? "process-micro-copy-arrow mr-2 text-txt-black-color text-ProductAmountIndex font-bold"
              : "process-micro-copy-arrow mr-2 text-txt-grey-color text-ProductAmountIndex font-bold"
          }
        >
          Final Check
        </p>
        <p
          className={
            processStep >= 4
              ? "process-micro-copy-arrow mr-2 text-txt-black-color text-GlobalBtnsTxt font-bold"
              : "process-micro-copy-arrow mr-2 text-txt-grey-color text-GlobalBtnsTxt font-bold"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 4
              ? "process-micro-copy-arrow mr-2 text-txt-black-color text-ProductAmountIndex font-bold"
              : "process-micro-copy-arrow mr-2 text-txt-grey-color text-ProductAmountIndex font-bold"
          }
        >
          Finish
        </p>
      </div>
    </>
  );
}
