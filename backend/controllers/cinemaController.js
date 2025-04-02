import Cinema from '../models/Cinema.js';

// Get all cinemas
export const getAllCinemas = async (req, res) => {
    try {
        const cinemas = await Cinema.find();
        res.status(200).json(cinemas);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cinemas', error });
    }
};

// Get a single cinema by ID
export const getCinemaById = async (req, res) => {
    try {
        const cinema = await Cinema.findById(req.params.id);
        if (!cinema) return res.status(404).json({ message: 'Cinema not found' });
        res.status(200).json(cinema);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cinema', error });
    }
};

// Create a new cinema
export const createCinema = async (req, res) => {
    try {
        const newCinema = new Cinema(req.body);
        await newCinema.save();
        res.status(201).json(newCinema);
    } catch (error) {
        res.status(500).json({ message: 'Error creating cinema', error });
    }
};

// Update a cinema
export const updateCinema = async (req, res) => {
    try {
        const updatedCinema = await Cinema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCinema) return res.status(404).json({ message: 'Cinema not found' });
        res.status(200).json(updatedCinema);
    } catch (error) {
        res.status(500).json({ message: 'Error updating cinema', error });
    }
};

// Delete a cinema
export const deleteCinema = async (req, res) => {
    try {
        const deletedCinema = await Cinema.findByIdAndDelete(req.params.id);
        if (!deletedCinema) return res.status(404).json({ message: 'Cinema not found' });
        res.status(200).json({ message: 'Cinema deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting cinema', error });
    }
};