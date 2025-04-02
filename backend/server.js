import express from 'express';
import connectDB from './db.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import cinemaRoutes from './routes/cinemaRoutes.js';
import cors from 'cors';


// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use User Routes
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/cinemas', cinemaRoutes);

app.use(cors()); // Allow requests from different origins

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express with MongoDB & ES Modules!');
});

// Define the port
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
