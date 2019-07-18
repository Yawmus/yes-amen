const routes = require('./config/routes').routes;
const utils = require('./utilities');
const hapi = require('@hapi/hapi'); 

const server = hapi.server({
  port: 8080,
  host: '0.0.0.0'
});

const init = async () => {
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

server.route(routes);

init();

