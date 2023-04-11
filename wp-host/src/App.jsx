import React from "react";
import ReactDOM from "react-dom/client";

import HeaderModule from "remote/Header";
const Header = HeaderModule.default;
import FooterModule from "remote/Footer";
const Footer = FooterModule.default;
import ButtonModule from "remote/Button";
const Button = ButtonModule.default;

import useStore from "remote/store";

import "./index.css";

const App = () => {
  const [count, setCount] = useStore();
  return (
    <div className="container">
      <Header />
      <Button />
      <button onClick={() => setCount((count) => count + 1)}>
        Click {count}
      </button>
      <Footer count={count} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
