# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

AdonisJs CLI is a command line tool to help you install AdonisJs.

Install it globally via npm like so:

```js
npm i -g @adonisjs/cli
```

Clone the repo and then run `npm install` or `yarn`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Initialize Server

Run the following command to start the HTTP Server:

```js
adonis serve --dev
```
