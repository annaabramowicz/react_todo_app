import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import store from "App/store/store";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
