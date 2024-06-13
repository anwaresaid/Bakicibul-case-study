import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { InputProvider } from "./context/InputContext";

function App() {
  return (
    <InputProvider>
      <MainPage />
    </InputProvider>
  );
}

export default App;
