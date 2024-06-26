import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SeatDataContext } from '../context/SeatDataContext';
// src/components/L3_Main.jsx
import '../index.css';
import L3 from '../pages/L3';
import Header from '../components/Header';

const SeatDetail = () => {
  const { seatId } = useParams();
  const { seats, loading } = useContext(SeatDataContext);
  const [seat, setSeat] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!loading) {
      const foundSeat = seats.find(seat => seat.seatId === seatId);
      setSeat(foundSeat);
    }
  }, [loading, seatId, seats]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!seat) {
    return <div>Seat not found</div>;
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div>
        <Header searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
        {/* Render your indoor map here and highlight the seat */}
        {/* Example: <Map seatId={seat.seatId} /> */}
        <L3 searchTerm={searchTerm} seatID={seat.seatId}/>
        <div className='personal-information-container'>
            <div className='personal-information'>
                <h1 className='name'>{seat.name}</h1>
                <p className='seat-id'>Seat ID: {seat.seatId}</p>
            </div>
        </div>
    </div>
  );
};

export default SeatDetail;
