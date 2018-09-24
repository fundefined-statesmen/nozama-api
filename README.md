# Nozama (API)

Nazama API is an e-Commerce app built with Node.js and Express.js. Users can sign up/in and select from a large list of products and can checkout and pay via the Stripe checkout API.

Link to the client app:
[link to production client url](https://fundefined-statesmen.github.io/browser-template/#)

Link to the client repo:
[link to production client repo](https://github.com/fundefined-statesmen/browser-template)


## Technologies Used:
  - Node.js
  - MongoDB
  - Mongoose
  - Express
  - Stripe API


## Catalog of Routes:

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |
| DELETE | `/delete-account`      | `users#destroy`   |


### Products

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/products`            | `products#index`    |

### Orders

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/orders`              | `orders#index`    |
| POST   | `/orders`              | `orders#create`   |
| PATCH  | `/orders/:id`          | `orders#update`   |
| DELETE | `/orders/:id`          | `orders#destroy`  |

### Line Items

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/orders`              | `lineItem#create`   |
| DELETE | `/orders/:id`          | `lineItem#destroy`  |

### Charges

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/orders`              | `orders#create`   |

## Planning and Development process:
The process for creating the Nozama API began with extensive planning coupled with conversation over our data relationships and how we could provide the functionality that the app required along with enough flexiblity to allow for growth without taking on unnecessary work.

Work commenced with developing out our required models and the routes to compliment them. Special attention was given to the line-item route and model due to it's unique role as a carrier of product information that would provide the flexibility to update quantity without altering the product data itself.

Other time-intensive features include the integration of Strip API for payment which was simple enough on the API side but difficult to itegrate into the front-end with the functionality that we required.

Future work will include building out an inventory managment system to allow merchants to add inventory to the store.

Link to Entity Relationship Diagram (ERD).
[ERD](https://imgur.com/HOiWW92)


## Version 2 (Currently developing):
