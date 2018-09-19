const mongoose = require('mongoose')
const LineItem = require('./line-item')

const orderSchema = new mongoose.Schema({
  date: {
    type: Date
  },
  status: {
    type: String,
    required: true
    // Add validation for possible value set
  },
  // TODO fix lineitem array, crashes server
  line_item: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LineItem'
  }],
  owner: {
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
