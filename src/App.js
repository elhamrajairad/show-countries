import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import PageNotFound from "./components/PageNotFound.js";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/show-countries" element={<Home />} />
          <Route path="/products" element={<Cards />} />
          <Route path="/products/:slug" element={<CountryDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
