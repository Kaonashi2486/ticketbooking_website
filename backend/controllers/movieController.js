import Movie from '../models/Movie.js';

// Get all movies
export const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies', error });
    }
};

// Get a single movie by ID
export const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movie', error });
    }
};

// Add a review to a movie
export const addReview = async (req, res) => {
    try {
        const { user, rating, comment } = req.body;
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });

        movie.reviews.push({ user, rating, comment });
        await movie.save();
        res.status(200).json({ message: 'Review added', movie });
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error });
    }
};

// Update movie details
export const updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMovie) return res.status(404).json({ message: 'Movie not found' });
        res.status(200).json({ message: 'Movie updated', updatedMovie });
    } catch (error) {
        res.status(500).json({ message: 'Error updating movie', error });
    }
};