import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Вариант №2 — по мотивам moedelo.org. Вариант №1 — в ./App.tsx (открывается по /variant1.html).
import App from "./App2.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
