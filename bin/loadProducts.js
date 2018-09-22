const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/nozama-development', {
// set this to heroku address when we're ready
  useMongoClient: true
})
const db = mongoose.connection

// const data = require('../data/products.csv')

const Product = require('../app/models/product')

const done = function () {
  db.close()
}

const loadProducts = () =>
  new Promise((resolve, reject) => {
    const product = []
    const fs = require('fs')
    const parse = require('csv').parse
    const parser = parse({ columns: true })

    const input = fs.createReadStream('data/products.csv')
    input.on('error', e => reject(e))

    parser.on('readable', () => {
      const record = parser.read()
      if (record) {
        product.push(record)
      }
    })

    parser.on('error', e => reject(e))
    parser.on('finish', () => resolve(product))
    input.pipe(parser)
  })

db.once('open', function () {
  loadProducts()

    // .then((product) => {
    //   Person.collection.insert(product)
    // })

    // This inserts and runs the documents through mongoose validations
    .then(Product.insertMany)
    .then((docs) => {
      console.log(docs.length + ' products inserted')
    })
    .then(done)
    .catch(console.log)
})
