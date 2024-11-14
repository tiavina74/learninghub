import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap

import Dashboard from './Pages/Dashboard';
import Cours from './Pages/Cours';
import Etudiant from './Pages/Etudiant';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/etudiant" element={<Etudiant />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
