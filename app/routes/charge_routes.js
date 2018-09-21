// Express docs: http://expressjs.com/en/api.html
const express = require('express')

// instantiate a router (mini app that only handles routes)
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config()

// Stripe's Secret Keys
const keyPublishable = process.env.PUBLISHABLE_KEY
const keySecret = process.env.SECRET_KEY
const stripe = require('stripe')(keySecret)

router.get('/', (req, res) => res.render('index.pug', {keyPublishable}))

router.post('/charge', (req, res) => {
  let amount = 500

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: 'Sample Charge',
        currency: 'usd',
        customer: customer.id
      }))
    .then(console.log)
    // .then(charge => res.render('charge.pug'))
})

module.exports = router
