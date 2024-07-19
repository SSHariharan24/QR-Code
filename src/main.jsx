import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import {QrCode} from "./App.jsx";
import {App} from "./App.jsx";
// import {QrCode} from "./components/QrCode";
// import "./components/QrCode.css";
// import './index.css'
import  "./App.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  {/* <QrCode /> */}
  </React.StrictMode>,
)
