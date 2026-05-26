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

import './App.css'

function App() {

  // const [currentPage, setCurrentPage] = useState("home");
  
  // const renderPage = () => {
  //   if(currentPage === "login") return <Login />;
  //   if(currentPage === "home") return <Home />;
  //   if(currentPage === "history" ) return <History />;
  //   if(currentPage === "favorites" ) return <Favorites />;
  //   if(currentPage === "downloads" ) return <Downloads />;
  //   if(currentPage === "configuration" ) return <Configuration/>;

  //   return <Home />;
  // };
   
  // return (
  //   <div className="min-h-screen bg-[#0d0d1a] text-white flex flex-row ">

  //     <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

  //     <div className="flex-1 min-h-screen">

  //       <Header/>
  //       <main className="flex-1 p-8">
  //               {renderPage()}
  //       </main>

  //     </div>

  //   </div>
  // );
  return <Login/>;
}

export default App
