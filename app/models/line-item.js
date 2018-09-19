const mongoose = require('mongoose')

const lineItemSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('LineItem', lineItemSchema)
