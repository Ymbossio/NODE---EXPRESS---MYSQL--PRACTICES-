import {createPool} from 'mysql2/promise'

 export const Conexion = createPool({
    user: 'root',
    password: '123450',
    host: 'localhost',
    port: '3306',
    database: 'users'
})