async function get(req, h) 
{
  let response = h.response('hi');

  //response.header('Access-Control-Allow-Origin', 'http://localhost:4000');
  //console.log(req);
  //console.log(reply);
  return response.code(200);
}

async function sendEmail(req, h)
{
  const mailgun = require("mailgun-js");
  const domain = 'sandbox03da95095b1a48bda8a7f23265424989.mailgun.org';
  const key = 'a1c3638d2edad21388c0b44f231b42d9-f877bd7a-ae7fad7f';
  const mg = mailgun({apiKey: key, domain: domain});

  try{
    let ret = await mg.messages().send(req.payload)
    return h.response(ret).code(200);
  }
  catch (e)
  {
    return h.response(JSON.stringify(e)).code(400)
  }
}

module.exports = {
  get,
  sendEmail
};
