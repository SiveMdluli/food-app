const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  orderID: {
    type: String,
    required: true,
    unique: true,
  },

  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  restaurantID: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  orderDate: {
    type: Date,
    default: () => Date.now(),
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'processing', 'completed'],
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Order', orderSchema);
