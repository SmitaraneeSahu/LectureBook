import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider, CartProvider } from "./contexts";
import './index.css';
import App from "./App.jsx";
import ScrollToTop from './components/Others/ScrollToTop';
import { ToastContainer } from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <CartProvider>
        <FilterProvider>
            <ToastContainer/>
            <ScrollToTop/>
            <App />
        </FilterProvider>
        </CartProvider>
        </BrowserRouter>
    </React.StrictMode>
);

