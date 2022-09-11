import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { TourProvider } from "@reactour/tour";

const steps = [
    {
        selector: "#nav-brand",
        content: "¡Bienvenido a preguntAPI!",
    },
    {
        selector: "#text-info",
        content: "¿Que es preguntAPI?",
    },
    {
        selector: "#nav-quiz",
        content: "Si quieres hacer un QUIZ, clica el botón QUIZ en el menú.",
    },
    {
        selector: "#nav-api",
        content: "Si quieres conocer la API, clica el botón API en el menú.",
    }
    // ...
];

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <TourProvider steps={steps} className="rounded p-5">
            <App />
        </TourProvider>
    </BrowserRouter>
);
