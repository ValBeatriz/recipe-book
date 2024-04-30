import { Pool } from 'pg';
import { envs } from '../config';

const pool = new Pool({
    host: envs.POSTGRE_HOST,
    user: envs.POSTGRE_USER,
    password: envs.POSTGRE_PASSWORD,
    database: envs.POSTGRE_DATABASE,
    ssl: true
});

export {pool};