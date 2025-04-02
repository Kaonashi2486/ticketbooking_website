import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CinemaSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    screens: { type: Number, required: true },
}, { timestamps: true });

export default model('Cinema', CinemaSchema);
