import mongoose from 'mongoose';

const seatSchema = new mongoose.Schema({
    seatId: { type: String, unique: true, required: true },
    name: { type: String, required: true }
});

const Seat = mongoose.model('Seat', seatSchema);

export default Seat;
