import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import Team from './app';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter basename="inbox">
      <Team />
    </BrowserRouter>
  </React.StrictMode>
)





