import React from "react";
import ReactDOM from "react-dom/client";

import HeaderModule from "remote/Header";
const Header = HeaderModule.default;
import FooterModule from "remote/Footer";
const Footer = FooterModule.default;
import ButtonModule from "remote/Button";
const Button = ButtonModule.default;

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <Button />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
