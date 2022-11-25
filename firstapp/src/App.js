import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className="App-wrapper">
      <Header />
      <Navbar />
      <div className='App-wrapper-content'>
      
      <Routes>
          <Route path='/' element={< Profile />} />
          <Route path="/profile" element={< Profile />} />
          <Route path="/dialogs" element={< Dialogs />} />      
      </Routes>
      </div>
      </div>
   </BrowserRouter>

 );
}
export default App;
