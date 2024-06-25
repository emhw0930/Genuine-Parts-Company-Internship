// src/components/L3_Main.jsx
import React, { useState } from 'react';
import '../index.css';
import L3 from './L3';
import Header from '../components/Header';

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
    </div>
  );
}
