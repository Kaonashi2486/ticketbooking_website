import express from 'express';
import { getAllMovies, getMovieById, addReview, updateMovie } from '../controllers/movieController.js';

const router = express.Router();

// Route to get all movies
router.get('/movies', getAllMovies);

// Route to get a single movie by ID
router.get('/movies/:id', getMovieById);

// Route to add a review to a movie
router.post('/movies/:id/review', addReview);

// Route to update movie details
router.put('/movies/:id', updateMovie);

export default router;