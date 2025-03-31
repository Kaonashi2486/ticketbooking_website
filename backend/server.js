import express from 'express';
import connectDB from './db.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

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
