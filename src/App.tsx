import "./style.css";
import { ChakraProvider } from "@chakra-ui/react";
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
