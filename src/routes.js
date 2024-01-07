import { Router } from "express";
import {Conexion} from './db.js'

const rutas = Router();

rutas.get('/', async (req, resp)=>{
    const [Result] = await Conexion.query('SELECT * FROM user')
    resp.json(Result)
});


rutas.get('/create', async (req, resp)=>{
    const Result = await Conexion.query(`INSERT INTO user (nombre) value ('liz')`);
    resp.json(Result);
});


export default rutas;