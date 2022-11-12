import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';


// ReactDOM.render(
//   <BrowserRouter>
//   <Routes>
//     <Route path='/' element={< App />} />
//   </Routes>
//   </BrowserRouter>
//   ,
//   document.getElementById('root')
//   );

ReactDOM.render(
  <BrowserRouter >
  <Routes >
  <Route path='/' element={< App />} />
        {/* <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}


  </Routes> 
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);
