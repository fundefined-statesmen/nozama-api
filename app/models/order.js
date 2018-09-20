const mongoose = require('mongoose')
// const LineItem = require('./line-item')

const orderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date(),
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'open'
    // Add validation for possible value set
  },
  // TODO fix lineitem array, crashes server
  // line_item:[LineItem]
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
  toJSON: { virtuals: true },
  usePushEach: true
})

module.exports = mongoose.model('Order', orderSchema)
