import express from 'express';
import {
    getAllCinemas,
    getCinemaById,
    createCinema,
    updateCinema,
    deleteCinema
} from '../controllers/cinemaController.js';

const router = express.Router();

// Get all cinemas
router.get('/', getAllCinemas);

// Get a single cinema by ID
router.get('/:id', getCinemaById);

// Create a new cinema
router.post('/', createCinema);

// Update a cinema
router.put('/:id', updateCinema);

// Delete a cinema
router.delete('/:id', deleteCinema);

export default router;
