// Header.js
import React from 'react';
import './header.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch, faUser, faHome);
function Header() {
    return (
        <header className="header">
          <nav className="nav">
            <div className='button-nav button-nav-1'> <a href="#home" className="link">Health insurance</a></div>
            <div className='button-nav button-nav-2'> <a href="#home" className="link">Post a remote job</a></div>
          </nav>
          <div className="header-content">
          <p className="title">find a <b>remote job</b><br />work from <b>anywhere</b></p>
          <div className="search-container">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input className="search" type="text"  />
      </div>
        </div>
        </header>
    );
}

export default Header;
