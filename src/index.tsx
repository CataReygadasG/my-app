import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FotoList from './components/Fotos/FotoList';
import FotoForm from './components/Fotos/FotosForm';
import Navbar from './components/Navbar/Navbar';


import 'bootswatch/dist/pulse/bootstrap.min.css'
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
    <Navbar />
    <div className="container p-4">
      <Routes>
        <Route path="/" element={<FotoList />} />
        <Route path="/new-foto" element={<FotoForm />} />

      </Routes>
    </div>

  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

