import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import ListEmployes from './components/ListEmployes';
import AjoutEmploye from './components/AjoutEmploye';
import NotFound from './components/NotFound';
import Employe from './components/Employe';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ListEmployes />} />
        <Route path='/employe/:id' element={<Employe />} />
        <Route path='/ajouter' element={<AjoutEmploye />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
