// Import required modules
const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  shopName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  gstNo: {
    type: String,
    required: true,
    unique: true
  },
  panNo: {
    type: String,
    required: true,
    unique: true
  },
  shopType: {
    type: String,
    required: true
  }
});

// Define the Seller model
const Seller = mongoose.model('Seller', sellerSchema);
module.exports = Seller 



