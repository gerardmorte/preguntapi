import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { TourProvider } from "@reactour/tour";

const steps = [
    {
        selector: "#text-info",
        content: "Bienvenido a preguntAPI",
    },
    {
        selector: "#nav-quiz",
        content: "Si quieres hacer un QUIZ, clica aqui!",
    },
    {
        selector: "#nav-api",
        content: "Si quieres conocer la API, clica aqui!",
    }
    // ...
];

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <TourProvider steps={steps}>
            <App />
        </TourProvider>
    </BrowserRouter>
);
