const Boom = require('boom');
const home = require('../../home').home;

exports.routes =  [
  {
    method: 'POST',
    path: '/',
    handler: () => console.log('hit')
  },
  {
    method: 'GET',
    path: '/test',
    handler: home.get
  },
  {  
    method: [ 'GET', 'POST' ],
    path: '/{any*}',
    handler: (request, h) => {
      const accept = request.headers.accept

      if (accept && accept.match(/json/)) {
        return Boom.notFound('Fuckity fuck, this resource isn’t available.')
      }

      return h.view('404').code(404)
    }
  }
];
