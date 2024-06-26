import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import L3_Main from './pages/L3_Main';
import SeatDetail from './components/SeatDetail';
import { SeatDataProvider } from './context/SeatDataContext';

export default function App() {
  return (
    <SeatDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<L3_Main />} />
          <Route path="/seats/:seatId" element={<SeatDetail />} />
        </Routes>
      </Router>
    </SeatDataProvider>
  );
}
