import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
export default function App() {
  const [countries, setCountries] = React.useState([]);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={<Home countries={countries} setCountries={setCountries} />}
          />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}
