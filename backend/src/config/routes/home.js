const Boom = require('boom');
const home = require('../../home').home;
const games = require('../../games');
const joi = require('joi');

exports.routes =  [
  {
    method: 'POST',
    path: '/',
    handler: () => console.log('hit')
  },
  {
    method: 'POST',
    path: '/highscore',
    config: {
      handler: games.updateScore,
      validate: {
        payload: {
          game: joi.string().required(),
          score: joi.number(),
          username: joi.string().required()
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/highscore',
    config: {
      handler: games.getScore,
      validate: {
        query: {
          game: joi.string().required(),
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/sendEmail',
    config: {
      handler: home.sendEmail,
      validate: {
        payload: {
          from: joi.string().required(),
          to: joi.string().required(),
          subject: joi.string().required(),
          text: joi.string().required(),
        }
      }
    }
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
      let response = h.response('404');
      const accept = request.headers.accept

      if (accept && accept.match(/json/)) {
        return Boom.notFound('Fuckity fuck, this resource isn’t available.')
      }

      return response.code(404)
    }
  }
];
