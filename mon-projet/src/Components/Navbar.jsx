import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <header className='header'>
      <nav className="navbar">
        <div className="navbar-content">
          {/* Photo de Profil */}
          <div className="profile">
            <img src="https://via.placeholder.com/40" alt="Profile" className="profile-photo" />
            <span className="username">Jean Dupont</span>
          </div>

          {/* Notifications */}
          <div className="notifications">
            <FontAwesomeIcon icon={faBell} className="icon bell-icon" />
            <span className="notification-count">3</span> {/* Affichage d'un nombre de notifications */}
          </div>

          {/* Déconnexion */}
          <div className="logout">
            <FontAwesomeIcon icon={faSignOutAlt} className="icon logout-icon" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
