// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:9000/api';

export const getSeatBySeatId = async (seatId) => {
    const response = await axios.get(`${API_URL}/seats/${seatId}`);
    return response.data;
};

export const updateSeat = async (seatId, name) => {
    const response = await axios.put(`${API_URL}/seats/${seatId}`, { name });
    return response.data;
};

export const getAllSeats = async () => {
    const response = await axios.get(`${API_URL}/seats`);
    return response.data;
};

