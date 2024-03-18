const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  transactionID: {
    type: String,
    required: true,
    unique: true,
  },
  orderID: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionDate: {
    type: Date,
    default: () => Date.now(),
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  transactionStatus: {
    type: String,
    required: true,
    enum: ['pending', 'succeeded', 'failed'],
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);
