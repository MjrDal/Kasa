import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer.jsx";
import Header from "./components/Header/header.jsx";
import About from "./pages/About/about.jsx";
import Error from "./pages/Error/error.jsx";
import Home from "./pages/Home/home.jsx";
import Rental from "./pages/Rental/rental.jsx";
import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rental/:idRental" element={<Rental />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
