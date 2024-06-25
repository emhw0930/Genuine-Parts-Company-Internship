// src/App.jsx
import React from 'react';
import './index.css';
import L3 from './pages/L3_Main';
import { SeatDataProvider } from './context/SeatDataContext';

export default function App() {
  return (
    <SeatDataProvider>
      <L3 />
    </SeatDataProvider>
  );
}
