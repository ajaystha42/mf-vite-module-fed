// import { useState } from "react";
import "./App.css";
import Header from "remoteApp/Header";
import Button from "remoteApp/Button";
import Footer from "remoteApp/Footer";
import useStore from "remoteApp/store";

function App() {
  const [count, setCount] = useStore();

  return (
    <div className="App">
      <Header />
      <h1>Host Application</h1>
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
