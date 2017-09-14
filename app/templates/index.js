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
