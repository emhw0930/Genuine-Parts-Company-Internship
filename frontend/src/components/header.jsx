// src/components/Header.jsx
import React, { useContext, useEffect, useState } from 'react';
import '../index.css';
import { CSSTransition } from 'react-transition-group';
import { SeatDataContext } from '../context/SeatDataContext';

export default function Header({ searchTerm, handleSearchChange }) {
  const { seats, loading } = useContext(SeatDataContext);
  const [matchedSeats, setMatchedSeats] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (!loading && searchTerm) {
      const matches = seats.filter(seat => seat.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setMatchedSeats(matches);
    } else {
      setMatchedSeats([]);
    }
  }, [searchTerm, loading, seats]);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

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
                window.location.href = `/seats/${seat.seatId}`;
              }}
            >
              <div className="search-button-container">
                <div className="image-container"></div>
                <p>{seat.name}</p>
              </div>
            </button>
            ))}
          </div>
        )}
      </div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="dropdown-container">
        <button className="dropdown-toggle">
          Level 3
        </button>
        <CSSTransition
          in={isDropdownOpen}
          timeout={300}
          classNames="dropdown"
          unmountOnExit
        >
          <div className="dropdown-menu">
            <button onClick={() => window.location.href = '/'}>Home</button>
            <button onClick={() => window.location.href = '/L1'}>Level 1</button>
            <button onClick={() => window.location.href = '/L2'}>Level 2</button>
          </div>
        </CSSTransition>
      </div>
    </header>
  );
}
