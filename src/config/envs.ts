import 'dotenv/config'
import {get} from 'env-var'

export const envs = {
    POSTGRE_HOST: get('POSTGRE_HOST').default('localhost').asString(),
    POSTGRE_USER: get('POSTGRE_USER').default('root').asString(),
    POSTGRE_PASSWORD: get('POSTGRE_PASSWORD').default('').asString(),
    POSTGRE_DATABASE: get('POSTGRE_DATABASE').default('dbrecipe_nctg').asString(),
    POSTGRE_SSL: get('POSTGRE_SSL').default('true').asBool(),
    SERVER_PORT: get('SERVER_PORT').default('3100').asPortNumber(),

}