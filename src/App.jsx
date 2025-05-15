import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { MovieProvider } from "./contexts/MovieContext";
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import "./css/App.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/Movie-App-Showcase/'>
  <MovieProvider>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Favorite" element={<Favorite/>}/>
  </Routes>
  </MovieProvider>
  </BrowserRouter>
);

export default App;

