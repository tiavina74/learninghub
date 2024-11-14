import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Components.css';
import logo from '../assets/logo1.png';

function SideBar() {
  const location = useLocation(); // Utilisez useLocation pour obtenir la route actuelle

  return (
    <div className="sidebar">
      <div className="sidebar-logo center">
        <img src={logo} alt="Logo" width={250} />
      </div>
      <div className="hr"></div>
      <div className="menu p-3">
        <Link to="/">
          <button className={`btn btn-primary mt-3 p-3 fs-5${location.pathname === '/dashboard' ? 'active' : ''}`}>
            <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
          </button>
        </Link>
        <Link to="/cours">
          <button className={`btn btn-primary mt-3 p-3 fs-5${location.pathname === '/cours' ? 'active' : ''}`}>
            <i className="fas fa-book mr-2"></i> Cours
          </button>
        </Link>
        <Link to="/etudiant">
          <button className={`btn btn-primary mt-3 p-3 fs-5${location.pathname === '/etudiant' ? 'active' : ''}`}>
            <i className="fas fa-user-graduate mr-2"></i> Etudiant
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
