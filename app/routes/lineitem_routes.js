// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for lineitems
const LineItem = require('../models/lineitem')

// we'll use this to intercept any errors that get thrown and send them
// back to the client with the appropriate status code
const handle = require('../../lib/error_handler')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `res.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE
// POST /lineitems
router.post('/lineitems', requireToken, (req, res) => {
  // set owner of new lineItem to be current user
  req.body.lineitem.owner = req.user.id
  console.log(req.body.lineitem)
  LineItem.create(req.body.lineitem)
    // respond to succesful `create` with status 201 and JSON of new "lineItem"
    .then(lineItem => {
      res.status(201).json({ lineItem: lineItem.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(err => handle(err, res))
})

// DESTROY
// DELETE /lineitems/5a7db6c74d55bc51bdf39793
router.delete('/lineitems/:id', requireToken, (req, res) => {
  LineItem.findById(req.params.id)
    .then(handle404)
    .then(lineItem => {
      // throw an error if current user doesn't own `lineItem`
      requireOwnership(req, lineItem)
      // delete the lineItem ONLY IF the above didn't throw
      lineItem.remove()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

module.exports = router
