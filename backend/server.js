import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';
import connectToMongoDB from "./db/connectToMongoDB.js";
import seedDatabase from './seed.js'; // Import the seed function
import seatRoutes from './routes/seat.routes.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API endpoints
app.use('/api', seatRoutes);

app.listen(PORT, async () => {
    await connectToMongoDB();
    // await seedDatabase();
    console.log(`Server Running on port ${PORT}`);
});
