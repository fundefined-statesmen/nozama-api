const mongoose = require('mongoose')
const LineItem = require('./line-item')

const orderSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
    // Add validation for possible value set
  },
  line_item: [LineItem],
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

module.exports = mongoose.model('Order', orderSchema)
