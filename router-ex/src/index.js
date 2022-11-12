import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import {Home, About, Contact} from "./App";


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={< Home />} />
    <Route path='/about' element={< About />} />
    <Route path='/contact' element={< Contact />} />
    <Route path='/home' element={< Home />} />
  </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
  );

  // ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );