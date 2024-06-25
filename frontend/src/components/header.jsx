// src/components/Header.js
import React from 'react';
import '../index.css';
import { CSSTransition } from 'react-transition-group';


export default function Header({ searchTerm, isDropdownOpen, toggleDropdown, handleSearchChange }) {
  return (
    <header> 
        <img src="../src/pictures/logo.png" alt="Logo" className="logo" />
        <h1>Level 3</h1> 
        <div className="input-container">
            <input 
              type="text" 
              placeholder="Search" 
              className="styled-input" 
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-button">
              <span className="material-icons"></span>
            </button>
        </div>
        <div>
          <button onClick={toggleDropdown} className="dropdown-toggle">
            Level
          </button>
          <CSSTransition
            in={isDropdownOpen}
            timeout={300}
            classNames="dropdown"
            unmountOnExit
          >
            <div className="dropdown-menu">
              <button onClick={() => window.location.href = '/'}>Home</button>
              <button onClick={() => window.location.href = '/Frame1'}>Level 1</button>
              <button onClick={() => window.location.href = '/Frame1'}>Level 2</button>
              {/* Add more buttons for other pages here */}
            </div>
          </CSSTransition>
        </div>
      </header>
  );
};