# Nozama (API)
This is an e-Commerce app built with Node and Express. Users can
sign up/in and select from a large list of products and can checkout and pay
via the Stripe checkout API

[link to production heroku url]

Link to the client app:
[link to production client url]

Link to the client repo:
[link to production client repo]


## Technologies Used:
  - node.js
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

### Products

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/products`            | `users#signup`    |

### Orders

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/orders`              | `orders#index`    |
| POST   | `/orders`              | `orders#create`   |
| PATCH  | `/orders/:id`          | `orders#update`   |
| DELETE | `/orders/:id`          | `orders#destroy`  |

## Planning and Development process:
[insert planning and development process]

Link to Entity Relationship Diagram (ERD).
![ERD]()


## Version 2 (Currently developing):
