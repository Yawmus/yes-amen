async function updateScore(req, h) 
{
  const db = await req.database('test');

  let game = req.payload.game;
  let score = req.payload.score;
  let user = req.payload.username;

  const res = await db.query(
    'INSERT INTO highscores (game, score, username) VALUES ($1, $2, $3)',
    [game, score, user]
  );

  return h.response({}).code(200);
}


async function getScore(req, h) 
{
  const db = await req.database('test');

  const res = await db.query(
    'select * from highscores where game=$1 order by score desc limit 1',
    [req.query.game]
  );

  if(!res.rows.length)
  {
    return h.response({score: 0}).code(200)
    //return h.response().code(404);
  }

  return h.response(res.rows[0]).code(200);
}

module.exports = {
  getScore,
  updateScore
};

