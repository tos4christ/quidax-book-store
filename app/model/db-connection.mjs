import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  database: 'quidax',
  password: '000000',
  port: '5432',
  host: 'localhost'
});

export default pool;
