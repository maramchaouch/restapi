const express= require("express");
const conndb = require("./Config/config")
const server = express();
const appRoute = require ("./Routes/route")

const dotenv = require('dotenv').config()
console.log(process.env) 



const port = 5000 ;


server.use(express.json());
server.use("/user",appRoute);


//call connection method


conndb();

server.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on .. http://localhost:${port}`);
})