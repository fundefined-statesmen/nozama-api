// Express docs: http://expressjs.com/en/api.html
const express = require('express')

// pull in Mongoose model for products
const Product = require('../models/product')

// we'll use this to intercept any errors that get thrown and send them
// back to the client with the appropriate status code
const handle = require('../../lib/error_handler')

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /products
router.get('/products', (req, res) => {
  Product.find()
    .then(products => {
      console.log(products)
      // `products` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return products.map(product => product.toObject())
    })
    // respond with status 200 and JSON of the products
    .then(products => res.status(200).json({ products: products }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// INDEX
// GET /examples
router.get('/search', (req, res) => {
  // search by:
  //   terms: req.query.terms.split(' ').join('|')
  //   phrase: req.query.terms
  //   'i' stands for insensitive case search
  // const terms = new RegExp(req.query.terms.split(' ').join('|'), 'i')
  const phrase = new RegExp(req.query.terms, 'i')
  Product.find({ $or: [ { name: phrase }, { desc: phrase } ] })
    .then(products => {
      // `products` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return products.map(product => product.toObject())
    })
    // respond with status 200 and JSON of the products
    .then(products => res.status(200).json({ products: products }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

module.exports = router
