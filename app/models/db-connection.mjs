import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  database: 'quidax',
  password: '123456',
  port: '5433',
  host: 'localhost'
});

export default pool;
