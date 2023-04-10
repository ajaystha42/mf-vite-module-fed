import { useState } from "react";
import "./App.css";
import Button from "./Button";
import useCount from "./store";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useCount();

  return (
    <div className="App">
      <Header />
      <h1>Remote Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
