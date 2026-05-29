import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import History from './pages/History';
import Favorites from './pages/Favorites';
import Downloads from './pages/Downloads';
import Configuration from './pages/Configuration';
import Header from './components/header/Header';
import Login from './pages/Login';
import {
    BrowserRouter,
    Routes,
    Route
 } from "react-router-dom";

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Login/>}
        />

        <Route
          path='/home'
          element={<Home/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
