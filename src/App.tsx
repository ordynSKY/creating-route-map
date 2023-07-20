import React, { useState } from "react";
import "./style.css";
import Header from "./components/Header/Header";
import { ChakraProvider } from "@chakra-ui/react";
import RouteBlock from "./components/Routes/RouteBlock";
import Details from "./components/Details/Details";
import Modal from "./components/Modal/Modal";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <HomePage />
      </div>
    </ChakraProvider>
  );
}

export default App;
