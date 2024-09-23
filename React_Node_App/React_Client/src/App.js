import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import RegisterUser from "./components/RegisterUser";
import FullPage from "./components/FullPage";

function App() {
  return (
    <div className="App">
      {/* <RegisterUser /> */}
      <FullPage />
    </div>
  );
}

export default App;
