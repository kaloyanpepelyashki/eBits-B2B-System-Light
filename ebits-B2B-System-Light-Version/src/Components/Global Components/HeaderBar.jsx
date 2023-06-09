import { useNavigate } from "react-router-dom";

export default function HeaderBar() {
  const navigate = useNavigate();
  return (
    <header className="application-header-bar">
      <div className="application-header-bar-inner bg-primary-color">
        <a href="https://ebits.dk/">
          <img
            className="application-header-bar-company-logo"
            src="https://cdn.shopify.com/s/files/1/0444/6932/1894/files/Rasmines_eBits_Logo_small_f5522fd4-6199-4817-8b3c-fe2b15dab369_130x@2x.png?v=1661704331"
            alt="Company logo"
          />
        </a>
        <div className="application-header-bar-empty-side"></div>
      </div>
    </header>
  );
}
