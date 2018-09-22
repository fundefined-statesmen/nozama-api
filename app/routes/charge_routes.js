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

console.log(process.env.PUBLISHABLE_KEY)
console.log(process.env.SECRET_KEY)

router.get('/', (req, res) => res.render('index.pug', {keyPublishable}))

router.post('/charge', (req, res) => {
  stripe.charges.create({
    amount: 2500,
    currency: 'usd',
    description: 'anything',
    source: req.body.stripeToken
  })
    .then(() => {
      res.status(200).json({ message: 'good' })
    })
    .catch(console.error)
//   let amount = 2000
//
// console.log(req.body.stripeEmail)
// console.log(req.body.stripeToken)
//
//   stripe.customers.create({
//     email: req.body.stripeEmail,
//     source: req.body.stripeToken
//   })
//     .then(customer =>
//       stripe.charges.create({
//         amount,
//         description: 'Sample Charge',
//         currency: 'usd',
//         customer: customer.id
//       }))
//     .then(console.log)
// .then(charge => res.render('charge.pug'))
})

module.exports = router
