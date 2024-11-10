// Header.js
import React from 'react';
import './header.css'; // Import the CSS file

function Header() {
    return (
        <header className="header">
          <nav className="nav">
            <div className='button-nav-1'> <a href="#home" className="link">Health insurance</a></div>
            <div className='button-nav-2'> <a href="#home" className="link">Post a remote job</a></div>
          </nav>
          <div className="header-content">
                <p className="title">find a remote job</p>
                <p className="subtitle">work from anywhere</p>
        </div>
        <div className='search-bar'>
            <input className='search'></input>
        </div>
        </header>
    );
}

export default Header;
