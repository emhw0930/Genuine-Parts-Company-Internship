import express from 'express';
import Seat from '../models/seat.model.js';

const router = express.Router();

// Fetch all seats
router.get('/seats', async (req, res) => {
    try {
        const seats = await Seat.find();
        res.json(seats);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching seats' });
    }
});

// Fetch a specific seat by seatId
router.get('/seats/:seatId', async (req, res) => {
    try {
        const seat = await Seat.findOne({ seatId: req.params.seatId });
        if (!seat) {
            return res.status(404).send({ message: 'Seat not found' });
        }
        res.json(seat);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching seat' });
    }
});

// Create a new seat
router.post('/seats', async (req, res) => {
    try {
        const { seatId, name } = req.body;
        const seat = new Seat({ seatId, name });
        await seat.save();
        res.json(seat);
    } catch (error) {
        res.status(500).send({ message: 'Error creating seat' });
    }
});

// Update a seat by seatId
router.put('/seats/:seatId', async (req, res) => {
    try {
        const { name } = req.body;
        const seat = await Seat.findOneAndUpdate(
            { seatId: req.params.seatId },
            { name },
            { new: true }
        );
        if (!seat) {
            return res.status(404).send({ message: 'Seat not found' });
        }
        res.json(seat);
    } catch (error) {
        res.status(400).send({ message: 'Invalid seatId format' });
    }
});

// Delete a seat by seatId
router.delete('/seats/:seatId', async (req, res) => {
    try {
        const seat = await Seat.findOneAndDelete({ seatId: req.params.seatId });
        if (!seat) {
            return res.status(404).send({ message: 'Seat not found' });
        }
        res.json({ message: 'Seat deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting seat' });
    }
});

export default router;
