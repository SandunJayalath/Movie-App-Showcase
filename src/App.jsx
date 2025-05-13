import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieProvider } from "./contexts/MovieContext";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReactDom from 'react-dom/client'
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import "./css/App.css";

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MovieProvider>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Favorite" element={<Favorite/>}/>
  </Routes>
  </MovieProvider>
  </BrowserRouter>
)

export default App;

