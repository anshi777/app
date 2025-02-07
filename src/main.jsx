import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./Components/NavBar.jsx";
import store from "./UserContext/Store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <NavBar />
      <App />
    </Provider>
    ,
  </StrictMode>
);
