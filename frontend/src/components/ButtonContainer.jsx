import React, { useState, useEffect, useContext } from 'react';
import Button from './Button';
import { SeatDataContext } from '../context/SeatDataContext.jsx';
import { updateSeat } from '../api';
import './ButtonContainer.css';

const ButtonContainer = ({ seatNumber, initialLabel, placeholder, isHighlighted, buttonStyle, searchTerm }) => {
    const { seats, loading } = useContext(SeatDataContext);
    const [buttonLabel, setButtonLabel] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [isMatchedDelayed, setIsMatchedDelayed] = useState(false);

    // Fetch seat data from context
    useEffect(() => {
        if (!loading) {
            const seat = seats.find(seat => seat.seatId === initialLabel);
            if (seat) {
                setButtonLabel(seat.name);
            }
        }
    }, [loading, initialLabel, seats]);

    // Handle changes in the input field by changing the button's name
    const handleInputChange = (event) => {
        setButtonLabel(event.target.value);
    };

    // Handle button click to enable editing mode
    const handleButtonClick = () => {
        setIsEditing(true);
    };

    // Handle input blur or pressing enter to save the changes
    const handleInputBlurOrKeyPress = async () => {
        setIsEditing(false);
        if (!buttonLabel.trim()) {
            // If the input is empty, revert to the original seat name
            const seat = seats.find(seat => seat.seatId === initialLabel);
            if (seat) setButtonLabel(seat.name);
        } else {
            // Update the seat name in the database
            try {
                await updateSeat(initialLabel, buttonLabel);
            } catch (error) {
                console.error('Error updating seat name:', error);
            }
        }
    };

    // Determine if the current button label matches the search term
    const isMatched = searchTerm && buttonLabel.toLowerCase().includes(searchTerm.toLowerCase());

    // Set isMatchedDelayed to true if isMatched is true after 1 seconds
    useEffect(() => {
        let timer;
        if (isMatched) {
            timer = setTimeout(() => {
                setIsMatchedDelayed(true);
            }, 300);
        } else {
            setIsMatchedDelayed(false);
        }
        return () => clearTimeout(timer);
    }, [isMatched]);

    return (
        <div className="button-container">
            <div className="button-wrapper">
                {/* Render the Button component with conditional styling */}
                <Button 
                    label={seatNumber} 
                    onClick={handleButtonClick} 
                    style={{
                        ...buttonStyle,
                        ...(isHighlighted ? { background: '#ff8977' } : {}),
                        ...(isMatchedDelayed ? { background: 'rgb(57, 57, 179)' } : {})
                    }}
                />
                {/* Display the button label */}
                <div className={`label ${isEditing || isMatchedDelayed || isHighlighted? 'visible' : ''}`}>{buttonLabel}</div>
            </div>
            {/* Render an input field if in editing mode */}
            {isEditing && (
                <input
                    type="text"
                    value={buttonLabel}
                    onChange={handleInputChange}
                    onBlur={handleInputBlurOrKeyPress}
                    onKeyPress={(event) => event.key === 'Enter' && handleInputBlurOrKeyPress()}
                    placeholder={placeholder}
                    autoFocus
                />
            )}
        </div>
    );
};

export default ButtonContainer;
