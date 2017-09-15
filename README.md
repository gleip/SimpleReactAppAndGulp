# generator-simple-reactapp-gulp
Simple generator for creating ReactApp

__yeoman:__ &nbsp; http://yeoman.io/ <br>
__react:__ &nbsp; https://facebook.github.io/react/ <br>
__redux:__ &nbsp; http://redux.js.org/

# Configuration
The generator includes a framework Hapi

```
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Handlebars = require('handlebars');
const path = require('path');
const logger = require('pino')();

// routes
const routs = require('./routes');

const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 5000,
  routes: {
    cors: true,
  },
});

server.register([Inert, Vision], () => {});

server.views({
  engines: { html: Handlebars },
  path: path.resolve(__dirname, './templates'),
});

server.route(routs);

server.start((err) => {
  if (err) {
    throw err;
  }
  logger.info('Server running at:', server.info.uri);
});

```
routes

```
module.exports = [
  {
    method: 'GET',
    path: '/js/{param*}',
    handler: {
      directory: {
        path: './public/js',
        redirectToSlash: true,
        index: true,
      },
    },
  },
  {
    method: 'GET',
    path: '/css/{param*}',
    handler: {
      directory: {
        path: './public/css',
        redirectToSlash: true,
        index: true,
      },
    },
  },
  {
    method: 'GET',
    path: '/img/{param*}',
    handler: {
      directory: {
        path: './public/img',
        redirectToSlash: true,
        index: true,
      },
    },
  },
  {
    method: 'GET',
    path: '/fonts/{param*}',
    handler: {
      directory: {
        path: './public/fonts',
        redirectToSlash: true,
        index: true,
      },
    },
  },
  {
    method: 'GET',
    path: '/media/{param*}',
    handler: {
      directory: {
        path: './public/media',
        redirectToSlash: true,
        index: true,
      },
    },
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => {
      reply.view('index');
    },
  },
];
```

# Usage:

## Install

```
yo simple-reactapp-gulp
```

## Start developer server
```
npm start
```

## Production build
```
npm run build
```

## Build Docker container
```
npm run buildContainer
```
