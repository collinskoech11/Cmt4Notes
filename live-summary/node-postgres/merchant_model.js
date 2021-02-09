const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'sample_one',
  password: 'root',
  port: 5432,
});