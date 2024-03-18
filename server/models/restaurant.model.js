const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurantID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  ownerID: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference the User model
    required: true,
  },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
