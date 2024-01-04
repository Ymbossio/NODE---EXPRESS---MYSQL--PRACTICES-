import Express  from "express";

const App = Express()

App.get('/', (req, resp)=>{
    resp.send('Home Page')
})

App.listen(3000, ()=>{
    console.log("run proyect on port 3000")
})