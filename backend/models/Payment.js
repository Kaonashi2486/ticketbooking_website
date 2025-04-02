import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    booking: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: ['credit_card', 'debit_card', 'paypal', 'upi'], required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
}, { timestamps: true });

export default model('Payment', PaymentSchema);