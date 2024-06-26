// src/components/Header.jsx
import React, { useContext, useEffect, useState } from 'react';
import '../index.css';
import { CSSTransition } from 'react-transition-group';
import { SeatDataContext } from '../context/SeatDataContext';

export default function Header({ searchTerm, isDropdownOpen, toggleDropdown, handleSearchChange }) {
  const { seats, loading } = useContext(SeatDataContext);
  const [matchedSeats, setMatchedSeats] = useState([]);

  useEffect(() => {
    if (!loading && searchTerm) {
      const matches = seats.filter(seat => seat.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setMatchedSeats(matches);
    } else {
      setMatchedSeats([]);
    }
  }, [searchTerm, loading, seats]);

  return (
    <header>
      <img src="../src/pictures/logo.png" alt="Logo" className="logo" />
      <h1>Indoor Map</h1>
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
        {matchedSeats.length > 0 && (
        <div className="matched-seats-dropdown">
          {matchedSeats.map(seat => (
            <button
              key={seat.seatId}  // Unique key prop
              className="matched-seat-button"
              onClick={() => {
                window.location.href = `/seat/${seat.seatId}`;
              }}
            >
              <div class="search-button-container">
                <div class="image-container"></div>
                <p>{seat.name}</p>
              </div>
            </button>
            ))}
          </div>
        )}
      </div>
      {/*
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
          </div>
        </CSSTransition>
      </div>
      */}
    </header>
  );
}
