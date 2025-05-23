import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import  BasketContext  from "./context/BasketProvider.jsx";

createRoot(document.getElementById("root")).render(
    <BasketContext>
      <App />
    </BasketContext>
);
