const pg = require('pg');

const db = new pg.Pool({
  user: 'peter',
  password: 'pwd',
  host: 'localhost',
  database: 'test',
  connectionTimeoutMillis: 60000
});

async function query(params, args)
{
  const client = await db.connect()
  console.log(process.env);
  try {
    const res = await client.query(
      query,
      [...args]
    );
    client.release()
    return res
  }
  catch (e) {
    client.release()
    return false
  }
}

exports.query = query;
