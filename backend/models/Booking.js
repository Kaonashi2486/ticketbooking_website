import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BookingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
    cinema: { type: Schema.Types.ObjectId, ref: 'Cinema', required: true },
    showtime: { type: Date, required: true },
    seats: [{ type: String, required: true }], // Array of booked seat numbers
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['booked', 'cancelled', 'completed'], default: 'booked' },
    payment: { type: Schema.Types.ObjectId, ref: 'Payment', required: true }
}, { timestamps: true });

export default model('Booking', BookingSchema);
