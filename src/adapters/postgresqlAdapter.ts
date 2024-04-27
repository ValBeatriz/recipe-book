import postgre, { Pool } from 'pg';
import { envs } from '../config';
import { env } from 'process';

const pool = new Pool({
    host: envs.POSTGRE_HOST,
    user: envs.POSTGRE_USER,
    password: envs.POSTGRE_PASSWORD,
    database: envs.POSTGRE_DATABASE,
    ssl: true
});

export default pool;