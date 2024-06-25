// src/context/SeatDataContext.jsx
// Fetching data from MongoDB 
// Make a seats object
import React, { createContext, useState, useEffect } from 'react';
import { getAllSeats } from '../api';

export const SeatDataContext = createContext();

export const SeatDataProvider = ({ children }) => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllSeats = async () => {
      try {
        const allSeats = await getAllSeats();
        setSeats(allSeats);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching all seats:', error); // Log error
      }
    };

    fetchAllSeats();
  }, []);

  return (
    <SeatDataContext.Provider value={{ seats, loading }}>
      {children}
    </SeatDataContext.Provider>
  );
};
