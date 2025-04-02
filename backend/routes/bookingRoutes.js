import express from 'express';
import {
    getUserBookings,
    getBookingById,
    createBooking,
    updateBookingStatus,
    deleteBooking
} from '../controllers/bookingController.js';

const router = express.Router();

// Get all bookings for a user
router.get('/user/:userId', getUserBookings);

// Get a single booking by ID
router.get('/:id', getBookingById);

// Create a new booking
router.post('/', createBooking);

// Update booking status
router.put('/:id', updateBookingStatus);

// Delete a booking
router.delete('/:id', deleteBooking);

export default router;
