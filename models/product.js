const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  },
  productImage: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
