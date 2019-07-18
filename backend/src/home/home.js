async function get(req, h) 
{
  let response = h.response('hi');
  //console.log(req);
  //console.log(reply);
  return response.code(200);
}

module.exports = {
  get
};
