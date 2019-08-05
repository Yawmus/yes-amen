const routes = require('./config/routes').routes;
const utils = require('./utilities');
const hapi = require('@hapi/hapi'); 
const pg = require('pg'); 

const server = hapi.server({
  port: 8080,
  host: '0.0.0.0'
});

const init = async () => {
  await server.register({
    plugin: require('hapi-cors'),
    options: {
      origins: ['http://localhost:4000'] // Front-end
    }
  });
  
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

server.route(routes);

const client = new pg.Pool((process.env.BE_ENVIRONMENT === 'live') ? {
  user: process.env["DB_LIVE_USER"],
  password: process.env["DB_LIVE_PASS"],
  database: process.env["DB_LIVE_NAME"],
  host: process.env["DB_LIVE_HOST"],
  connectionTimeoutMillis: 60000
} : {
  user: process.env["DB_TEST_USER"],
  password: process.env["DB_TEST_PASS"],
  database: process.env["DB_TEST_NAME"],
  host: process.env["DB_TEST_HOST"],
  connectionTimeoutMillis: 60000
});


server.decorate("request", "database", function (name) {
  return client
})

init();

