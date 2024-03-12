const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  orderItemID: {
    type: String,
    required: true,
    unique: true,
  },
  orderID: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  menuItemID: {
    type: Schema.Types.ObjectId,
    ref: 'MenuItem',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

module.exports = mongoose.model('OrderItem', orderItemSchema);
