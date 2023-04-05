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

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ContactInfoContProvider>
          <ShoppingCartProvider>
            <Routes>
              <Route
                path="/"
                element={<LandingPage productsList={productsList} />}
              />
              <Route path="/orderType" element={<TypeOfOrderPage />} />
              <Route
                path="/finalChackPage"
                element={<FinalCheckPage productList={productsList} />}
              />
              <Route path="/thankYou" element={<OutroPage />} />
            </Routes>
          </ShoppingCartProvider>
        </ContactInfoContProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
