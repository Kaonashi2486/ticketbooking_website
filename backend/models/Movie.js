import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ReviewSchema = new Schema({
    user: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
}, { _id: false });

const MovieSchema = new Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 10 },
    duration: { type: String, required: true }, // Keeping it as a string ("2h 49m")
    releaseDate: { type: Date, required: true },
    director: { type: String, required: true },
    cast: [{ type: String, required: true }], // Array of actors' names
    synopsis: { type: String, required: true },
    image: { type: String, required: true }, // Image URL or path
    banner: { type: String, required: true }, // Banner image URL or path
    trailer: { type: String, required: true }, // YouTube link or other video link
    reviews: [ReviewSchema] // Embedded reviews schema
}, { timestamps: true });

export default model('Movie', MovieSchema);
