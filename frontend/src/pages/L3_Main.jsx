import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../index.css';
import F12Main from '../F12Main';
import L3 from './L3';
import Header from '../components/Header';

// const router = createBrowserRouter([
//   { path: '/', element: <F12Main /> },
//   { path: '/L3', element: <L3 /> },
//   // Add more routes here as needed
// ]);

export default function L3_Main() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='all'>
      <Header searchTerm={searchTerm} isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} handleSearchChange={handleSearchChange}/>
      <L3 searchTerm={searchTerm} />
      <div className='frame-container' style={{ marginTop: '-50px' }}>
        {/* <RouterProvider router={router} /> */}
      </div>
    </div>
  );
}
