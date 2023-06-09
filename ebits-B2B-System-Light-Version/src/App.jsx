//Importing React hooks
import { useEffect, useState } from "react";

//Importing React-router elements and components
import { Navigate, Route, Routes } from "react-router";

//Importing MUI elements, dependencies and components
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

//Importing styling sheet
import "./App.css";

//Importing Context components
import { ShoppingCartProvider } from "./Components/Context Components/ShoppingCartFuncContext";
import { ContactInfoContProvider } from "./Components/Context Components/ContactsInformationContext";
import LandingPage from "./Pages/Global pages/LandingPage";
import HeaderBar from "./Components/Global Components/HeaderBar";
import FinalCheckPage from "./Pages/Global pages/FinalCheckPage";
import OutroPage from "./Pages/Global pages/OutroPage";
import ProductSelectionPage from "./Pages/Global pages/ProductSelectionPage";
import AskToSave from "./Pages/Global pages/AskToSave";
import ContactInfoPage from "./Pages/Global pages/ContactsPage";
import NameKit from "./Pages/Global pages/NameYourKit";

function App() {
  //*Fetching data from the server
  //////
  ////
  //
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://65.109.137.46:5000/api")
        .then((response) => response.json())
        .then((data) => {
          setProductsList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  //
  ////
  //////
  return (
    <div className="App">
      <HeaderBar />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ContactInfoContProvider>
          <ShoppingCartProvider>
            <Routes>
              <Route
                path="/"
                element={<LandingPage productsList={productsList} />}
              />
              <Route
                path="/select-products"
                element={<ProductSelectionPage productsList={productsList} />}
              />
              <Route path="/BuyorExport" element={<AskToSave />} />

              <Route path="/contactInfo-Page" element={<ContactInfoPage />} />
              <Route
                path="/finalChackPage"
                element={<FinalCheckPage productList={productsList} />}
              />
              <Route path="/name-it" element={<NameKit />} />
              <Route path="/thankYou" element={<OutroPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ShoppingCartProvider>
        </ContactInfoContProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
