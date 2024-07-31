const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [
    {
      quantity: { type: Number, required: true },
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }
      
    }
  ],
    orderDate: { type: Date, default: Date.now },
    totalPrice: { type: Number, required: true }
});
module.exports = mongoose.model('Order', orderSchema);
