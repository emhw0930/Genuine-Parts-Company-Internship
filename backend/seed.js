import Seat from './models/seat.model.js'; // Ensure the path is correct

const generateSeats = (numSeats) => {
    const seats = [];
    for (let i = 1; i <= numSeats; i++) {
        seats.push({
            seatId: `SeatA${i}`,
            name: `Seat ${i}`
        });
    }
    return seats;
};

const initialSeats = generateSeats(287);

const seedDatabase = async () => {
    try {
        // Clear existing data (optional)
        await Seat.deleteMany({});

        // Insert initial seats
        await Seat.insertMany(initialSeats);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

export default seedDatabase;
