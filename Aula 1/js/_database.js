const pg = require('pg')

const client = new pg.Client({
  user: 'xxxxxx',
  host: 'localhost',
  database: 'xxxxxx',
  password: 'xxxxxxxxx',
  port: 5432
})

module.exports = client
