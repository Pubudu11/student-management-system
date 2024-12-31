import React from "react"
import ReactDOM from "react-dom/client"
import { ToastContainer } from 'react-toastify';

import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
        <ToastContainer aria-label="Toast notifications container" />
    </BrowserRouter>
  </React.StrictMode>
)