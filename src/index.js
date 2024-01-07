import Express  from "express";
import rutas from './routes.js'

const App = Express()
App.use(rutas);

App.listen(3000, ()=>{
    console.log("run proyect on port 3000")
})